import { experienceProps } from '@repo/ts-types/profile/experience'
import React, { useState } from 'react'
import ExperienceCard from '../../../molecules/custom/Profile/v1/ExperienceCard'
import { cn } from '../../../../lib/utils'

const Experience = ({experience}:{experience:experienceProps[]}) => {
  const [experienceType, setExperienceType] = useState('Full Time')
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4 text-md flex-wraps'>
          <h2 className={cn('cursor-pointer hover:opacity-50',
          experienceType === 'Full Time' && 'text-primary font-bold')} 
          onClick={()=>setExperienceType('Full Time')}
          >Full Time</h2>
          <h2 className={cn('cursor-pointer hover:opacity-50',
          experienceType === 'Internship' && 'text-primary font-bold')} 
          onClick={()=>setExperienceType('Internship')}
          >Internship</h2>
      </div>
      <div className='flex flex-col gap-4 max-w-[500px]'>
          {experience.filter(exp=>exp.type===experienceType).map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
          ))}
      </div>
    </div>
  )
}

export default Experience