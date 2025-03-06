"use client"
import { experienceProps } from '@repo/ts-types/profile/experience'
import React, { useEffect, useState } from 'react'
import ExperienceCard from '../../../molecules/custom/Profile/v1/ExperienceCard'
import { cn } from '../../../../lib/utils'
import { useDeviceType } from '../../../../hooks/use-device'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../molecules/shadcn/select'

const Experience = ({experience}:{experience:experienceProps[]}) => {
    const [experienceTypes, setExperirenceTypes] = useState<any>([])
    const [experienceType, setExperienceType] = useState(experienceTypes[0])
    const device = useDeviceType()
  
    useEffect(() => {
      const types = experience?.map(exp=>exp.type)
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
          {experience?.filter(exp=>exp.type===experienceType).map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
          ))}
      </div>
    </div>
  )
}

export default Experience