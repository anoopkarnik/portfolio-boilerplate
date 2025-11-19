import React, { useEffect, useRef, useState } from 'react'
import { projectProps } from '@/lib/ts-types/project'
import { useDeviceType } from '@repo/ui/hooks/use-device'
import { Card, CardContent } from '@repo/ui/molecules/shadcn/card'
import { cn } from '@repo/ui/lib/utils'
import Image from 'next/image'
import { Button } from '@repo/ui/atoms/shadcn/button'
import { Badge } from '@repo/ui/atoms/shadcn/badge'

const ProjectDetails1 = ({project}:{project:projectProps}) => {

    const device = useDeviceType()
    const [showDetails, setShowDetails] = useState(false)
    const [expanded, setExpanded] = useState(false)
      const [showToggle, setShowToggle] = useState(false)
      const textRef = useRef<HTMLDivElement>(null)
    
      // Check if content is overflowing the clamp
      useEffect(() => {
        if (!textRef.current) return
    
        const el = textRef.current
        // Wait for layout render to measure
        const checkOverflow = () => {
          const isOverflowing = el.scrollHeight > el.clientHeight + 2
          setShowToggle(isOverflowing)
        }
    
        checkOverflow()
    
        // Also check on window resize (optional)
        window.addEventListener("resize", checkOverflow)
        return () => window.removeEventListener("resize", checkOverflow)
      }, [project.description])

  return (
    <Card className={cn(`h-full`,
      device !== 'desktop' && 'w-full overflow-auto',
      device === 'desktop' && 'sticky top-10 max-w-[500px]'
    )}>
         <CardContent className='flex flex-col items-center justify-center gap-6 relative'>
            <div className='w-full flex justify-start items-center '>
               <div className={cn('flex items-center justify-center gap-4 pt-10',
                    device === 'desktop' && 'flex-col gap-4'
                  )}>
                      {project.demoImages[0] && 
                      <Image src={project.demoImages[0]} width={device === 'mobile' ? 200 : 400} 
                      height={device === 'mobile' ? 200 : 400} alt='logo' className='rounded-2xl '/>}
                      <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='text-center text-2xl'>
                            {project.title}
                        </p>
                        <div className='flex items-center justify-center flex-wrap gap-2'>
                          {
                            project.type.map((type,index)=>(
                              <Badge key={index} className='text-sm px-2 py-1 rounded-md bg-accent text-center text-white'>
                                {type}
                              </Badge>
                            ))
                          }
                        </div>
                      </div>
                  </div>
            </div>
            {
              device!="desktop" && 
                <Button variant="ghost" onClick={()=>setShowDetails(!showDetails)} 
                className='absolute top-0 right-0 rounded-none rounded-tr-lg '>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </Button>
            }

            {(showDetails || device=="desktop") && 
              <>

                <div className={cn('w-full grid border-y-2 py-8 overflow-y-auto max-h-[300px]',
                  device === 'tablet' && 'grid-cols-2 gap-8',
                  device === 'mobile' && 'grid-cols-1 gap-4',
                  device === 'desktop' && 'grid-cols-1 gap-8'
                )}>
                    <div
                        ref={textRef}
                        className={
                          expanded
                            ? "text-sm text-description"
                            : "line-clamp-6 text-description text-sm"
                        }
                      >
                        {project.description}
                    </div>

                      {showToggle && (
                        <button
                          className="text-sm text-left  mt-1"
                          onClick={() => setExpanded(!expanded)}
                        >
                          {expanded ? "Show less" : "Read more"}
                        </button>
                      )}
                </div>
              </>
              }
         </CardContent>
      </Card>
  )
}

export default ProjectDetails1