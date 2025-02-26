import { skillsProps } from '@repo/ts-types/profile/skills'
import React from 'react'

const Skills = ({skills}:{skills:skillsProps}) => {
  return (
      <div className='flex flex-col gap-4 '>
        {Object.keys(skills).map((skill, index) => (
          <div key={index} className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold'>{skill}</h2>
            <div className='flex flex-wrap gap-4'>
              {skills[skill]?.map((s, i) => (
                <div key={i} className='flex flex-col gap-2 items-center justify-center 
                border-[1px] p-4 cursor-pointer rounded-md hover:bg-accent'>
                  {s.icon}
                  <span>{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
  )
}

export default Skills