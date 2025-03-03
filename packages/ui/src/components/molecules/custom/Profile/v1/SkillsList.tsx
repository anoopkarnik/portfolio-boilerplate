import { skillProps } from '@repo/ts-types/profile/skills'
import React from 'react'
import IconRenderer from '../../v1/IconRenderer'

const SkillsList = ({subSkills}:{subSkills:skillProps[]}) => {
  return (
    <div className='flex flex-wrap gap-4'>
        {subSkills?.map((s, i) => (               
            <div key={i} className='flex flex-col gap-2 items-center justify-center 
            border-[1px] p-4 cursor-pointer rounded-md hover:bg-accent'>
                <IconRenderer iconName={s.title} />
                <span>{s.title}</span>
            </div>
        ))}
    </div>
    
  )
}

export default SkillsList