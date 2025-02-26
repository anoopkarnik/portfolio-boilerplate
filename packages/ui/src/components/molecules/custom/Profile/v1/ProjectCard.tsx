import { projectProps } from '@repo/ts-types/profile/project'
import Image from 'next/image'
import React from 'react'
import { CiCircleInfo } from 'react-icons/ci'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { SiGithub, SiLinktree, SiNotion, SiYoutube } from 'react-icons/si'

const ProjectCard = ({project}:{project:projectProps}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-accent p-2 rounded-sm gap-2 
    relative group transition-all duration-300 overflow-hidden ">
        <Image src={project.demoImage} width={400} height={400} alt={project.title} />
        <div className='text-lg font-bold'>{project.title}</div>
        <div className='flex flex-col gap-2 items-center justify-center absolute right-[-40px] 
        top-2 opacity-0 transition-all duration-300 group-hover:right-2 group-hover:opacity-100'>
            <CiCircleInfo size={36} 
            className='opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer'/>
            {project.openSourceDetails && <a href={project.openSourceDetails.link} target='_blank'>
                <SiGithub size={30} className='opacity-50 hover:opacity-100 transition-all duration-300'/>
            </a>}
            {project.notionDetails && <a href={project.notionDetails.templateLink} target='_blank'>
                <SiNotion size={30} className='opacity-50 hover:opacity-100 transition-all duration-300'/>
            </a>}
            {project.contentDetails && <a href={project.contentDetails.videoLink} target='_blank'>
                <SiYoutube size={30} className='opacity-50 hover:opacity-100 transition-all duration-300'/>
            </a>}
            {project.websiteDetails && <a href={project.websiteDetails.websiteLink} target='_blank'>
                <FaExternalLinkAlt size={26} className='opacity-50 hover:opacity-100 transition-all duration-300'/>
            </a>}
        </div>
    </div>
  )
}

export default ProjectCard