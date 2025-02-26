import { projectProps } from '@repo/ts-types/profile/project'
import React, { useState } from 'react'
import { cn } from '../../../../lib/utils'
import ProjectCard from '../../../molecules/custom/Profile/v1/ProjectCard'

const Projects = ({projects}:{projects:projectProps[]}) => {
  const [projectType, setProjectType] = useState('Full Stack')
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-4 text-md flex-wraps'>
          <h2 className={cn('cursor-pointer hover:opacity-50',
          projectType === 'Full Stack' && 'text-primary font-bold')} 
          onClick={()=>setProjectType('Full Stack')}
          >Full Stack</h2>
          <h2 className={cn('cursor-pointer hover:opacity-50',
          projectType === 'Notion Template' && 'text-primary font-bold')} 
          onClick={()=>setProjectType('Notion Template')}
          >Notion Template</h2>
      </div>
      <div className='flex flex-wrap gap-4 '>
          {projects.filter(project=>project.type===projectType).map((project, index) => (
              <ProjectCard key={index} project={project}/>
          ))}
      </div>
    </div>
  )
}

export default Projects