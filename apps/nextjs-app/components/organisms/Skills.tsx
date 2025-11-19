"use client"
import { skillProps } from '@/lib/ts-types/skills'
import SkillsList from '../molecules/SkillsList'
import { useEffect, useState } from 'react'

const Skills = ({skills}:{skills:skillProps[]}) => {
  const [skillTypes, setSkillTypes] = useState<any>([])

  useEffect(() => {
    const types = skills?.map(skill=>skill.subType[0])
    setSkillTypes(new Set(types))
  }, [skills])
  
  return (
      <div className='flex flex-col justify-start items-start gap-4'>
          {[...skillTypes].map((type, index) => (
            <div key={index} className='flex flex-col gap-2 items-start '>
              <h2 key={index} className='text-subtitle'>{type}</h2>
              <SkillsList subSkills={skills.filter((skill) => skill.subType.includes(type))}/>
            </div>
          ))}
      </div>
  )
}

export default Skills