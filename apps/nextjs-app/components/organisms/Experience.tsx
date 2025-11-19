"use client"
import { experienceProps } from '@/lib/ts-types/experience'
import React, { useEffect, useState } from 'react'
import ExperienceCard from '../molecules/ExperienceCard'
import { cn } from '@repo/ui/lib/utils'
import { useDeviceType } from '@repo/ui/hooks/use-device'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/molecules/shadcn/select'

const Experience = ({experience}:{experience:experienceProps[]}) => {
    const [experienceTypes, setExperirenceTypes] = useState<any>([])
    const [experienceType, setExperienceType] = useState(experienceTypes[0])
    const device = useDeviceType()
  
    useEffect(() => {
      const types = experience?.map(exp=>exp.type[0])
      setExperirenceTypes(new Set(types))
      setExperienceType(types[0])
    }, [experience])

  return (
    <div className='flex flex-col gap-4 '>
       {device !== 'mobile' &&
      <div className='flex items-center gap-4 text-md flex-wrap'>
          {[...experienceTypes]?.map((type:string, index:number) => (
              <h2 key={index} className={cn('cursor-pointer hover:opacity-50',
              experienceType === type && 'text-primary font-bold')} 
              onClick={()=>setExperienceType(type)}
              >{type}</h2>
          ))}
      </div>}
      {device === 'mobile' &&
        <Select  defaultValue={experienceType} onValueChange={(value)=>setExperienceType(value)}>
            <SelectTrigger>
                <SelectValue placeholder="Select a Experience Type"/>
            </SelectTrigger>
            <SelectContent >
                {[...experienceTypes]?.map((type:string, index:number) => (
                    <SelectItem key={index} value={type}>{type}</SelectItem>
                ))}
            </SelectContent>
        </Select>
      }
      <div className='flex flex-col gap-4 '>
          {experience?.filter(exp=>exp.type.includes(experienceType)).map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
          ))}
      </div>
    </div>
  )
}

export default Experience