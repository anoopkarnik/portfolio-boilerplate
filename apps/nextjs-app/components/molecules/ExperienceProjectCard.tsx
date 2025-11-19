import { projectProps } from '@/lib/ts-types/project'
import React, { useState, useEffect, useRef } from 'react'
import ProjectModal from './ProjectModal'

const ExperienceProjectCard = ({ project }: { project: projectProps }) => {
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
    <div className="flex flex-col">
      <div className=" flex items-center gap-1 justify-start">
        <div className='text-sm font-semibold underline'>{project.title} </div>
        <ProjectModal project={project} iconSize={20}/>
      </div>
      <div className='flex items-center justify-start gap-1 flex-wrap text-xs mb-2 italic '>
        <div >{project.languagesUsed ? project.languagesUsed + " || " : ""}</div>
        <div>{project.frontendStackUsed ? project.frontendStackUsed + " || " : ""}</div>
        <div >{project.backendStackUsed ? project.backendStackUsed + " || " : ""}</div>
        <div >{project.dataEngineeringStackUsed ? project.dataEngineeringStackUsed + " || " : ""}</div>
        <div >{project.cloudDevopsStackUsed ? project.cloudDevopsStackUsed + " || " : ""}</div>
        <div >{project.integrationsUsed ? project.integrationsUsed + " || " : ""}</div>
      </div>
      <div
        ref={textRef}
        className={
          expanded
            ? "text-sm text-description"
            : "line-clamp-3 text-description text-sm"
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
  )
}

export default ExperienceProjectCard
