import { experienceProps, projectProps } from '@repo/ts-types/profile/experience'
import Image from 'next/image'
import React from 'react'

const ExperienceCard = ({experience}:{experience:experienceProps}) => {
  return (
    <div className="flex flex-col bg-accent p-4 rounded-sm gap-2">
        <div className="flex justify-between items-center">
            <div className='text-lg font-bold'>{experience.position}</div>
            <div className='text-sm font-light'>{experience.year}</div>
        </div>
        <div className="text-sm text-primary">{experience.company}</div>
        <div className='flex flex-col gap-2'>
          {experience.projects.map((project:projectProps,index:number) => (
            <div key={index} className='flex flex-col'>
                <div className='text-paragraph'>{project.title}</div>
                <div className='text-description'>({project.techStack.map((tech:string) => tech+",")})</div>
                <div className='text-description'>{project.description}</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ExperienceCard