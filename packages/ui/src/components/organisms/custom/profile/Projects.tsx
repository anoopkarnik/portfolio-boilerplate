"use client"
import { projectProps } from '@repo/ts-types/profile/project'
import React, { useEffect, useState } from 'react'
import { cn } from '../../../../lib/utils'
import ProjectCard from '../../../molecules/custom/Profile/v1/ProjectCard'
import { useDeviceType } from '../../../../hooks/use-device'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../molecules/shadcn/select'

const Projects = ({projects}:{projects:projectProps[]}) => {
  const [projectTypes, setProjectTypes] = useState<any>([])
  const [projectType, setProjectType] = useState(projectTypes[0])
  const device = useDeviceType()

  useEffect(() => {
    const types = projects?.map(project=>project.type)
    setProjectTypes(new Set(types))
    setProjectType(types[0])
  }, [projects])
    

  return (
    <div className='flex flex-col gap-4'>
      {device !== 'mobile' &&
      <div className='flex items-center gap-4 text-md flex-wrap'>
          {[...projectTypes]?.map((type:string, index:number) => (
              <h2 key={index} className={cn('cursor-pointer hover:opacity-50',
              projectType === type && 'text-primary font-bold')} 
              onClick={()=>setProjectType(type)}
              >{type}</h2>
          ))}
      </div>}
      {device === 'mobile' &&
        <Select defaultValue={projectType} onValueChange={(value)=>setProjectType(value)}>
            <SelectTrigger>
                <SelectValue placeholder="Select a Project Type"/>
            </SelectTrigger>
            <SelectContent>
                {[...projectTypes]?.map((type:string, index:number) => (
                    <SelectItem key={index} value={type}>{type}</SelectItem>
                ))}
            </SelectContent>
        </Select>
      }
      <div className='flex flex-wrap gap-4 '>
          {projects?.filter(project=>project.type===projectType).map((project, index) => (
              <ProjectCard key={index} project={project}/>
          ))}
      </div>
    </div>
  )
}

export default Projects