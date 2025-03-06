"use client"
import { skillProps } from '@repo/ts-types/profile/skills'
import SkillsList from '../../../molecules/custom/Profile/v1/SkillsList'
import { useEffect, useState } from 'react'

const Skills = ({skills}:{skills:skillProps[]}) => {
  const [skillTypes, setSkillTypes] = useState<any>([])

  useEffect(() => {
    const types = skills?.map(skill=>skill.type)
    setSkillTypes(new Set(types))
  }, [skills])
  
  return (
      <div className='flex flex-col justify-start items-start gap-4'>
          {[...skillTypes].map((type, index) => (
            <div key={index} className='flex flex-col gap-2 items-start '>
              <h2 key={index} className='text-subtitle'>{type}</h2>
              <SkillsList subSkills={skills.filter((skill) => skill.type === type)}/>
            </div>
          ))}
      </div>
  )
}

export default Skills