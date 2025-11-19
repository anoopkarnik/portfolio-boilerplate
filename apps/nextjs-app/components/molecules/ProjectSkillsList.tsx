import { skillProps } from '@/lib/ts-types/skills'
import React from 'react'
import IconRenderer from '@repo/ui/molecules/custom/v1/IconRenderer'

const ProjectSkillsList = ({subSkills}:{subSkills:skillProps[]}) => {
  return (
    <div className='flex flex-wrap gap-4 my-2'>
        {subSkills?.map((s, i) => (               
            <div key={i} className='flex flex-col gap-2 items-center justify-center 
            border-[1px] p-2 cursor-pointer rounded-md hover:bg-accent'>
                <IconRenderer iconName={s.title} iconImg={s.icon ? s.icon[0] : undefined} />
                <span>{s.title}</span>
            </div>
        ))}
    </div>
    
  )
}

export default ProjectSkillsList