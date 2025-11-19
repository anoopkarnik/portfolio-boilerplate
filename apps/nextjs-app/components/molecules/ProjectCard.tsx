import { projectProps } from '@/lib/ts-types/project'
import Image from 'next/image'
import React from 'react'
import ProjectModal from './ProjectModal'

const ProjectCard = ({project}:{project:projectProps}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-accent p-2 rounded-sm gap-2 
    relative group transition-all duration-300 overflow-hidden  ">
        <div className='w-full relative'>
            <Image src={project.demoImages[0] || ''} width={400} height={250} alt={project.title} className='object-cover rounded-sm' />
        </div>
        <div className='flex items-center justify-center gap-2 w-[400px]'>
            <div className='text-lg font-bold'>{project.title}</div>
            <ProjectModal project={project}/>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center absolute right-[-40px] 
        top-2 opacity-0 transition-all duration-300 group-hover:right-2 group-hover:opacity-100'>
            
            
        </div>
    </div>
  )
}

export default ProjectCard