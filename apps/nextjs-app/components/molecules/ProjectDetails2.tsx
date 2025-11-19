"use client"
import React, { useEffect, useState } from 'react'
import { useDeviceType } from '@repo/ui/hooks/use-device'
import { Card, CardContent } from '@repo/ui/molecules/shadcn/card'
import { cn } from '@repo/ui/lib/utils'
import { projectProps } from '@/lib/ts-types/project'
import { Accordion } from '@radix-ui/react-accordion'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@repo/ui/molecules/shadcn/accordion'
import ProjectSkillsList from './ProjectSkillsList'

const ProfileDetails2 = ({project}:{project:projectProps}) => {    
  const device = useDeviceType()
    const [skillTypes, setSkillTypes] = useState<any>([])
  
    useEffect(() => {
      const types = project.skills?.map(skill=>skill.subType[0])
      setSkillTypes(new Set(types))
    }, [project.skills])

  return (
    <Card className={cn('min-h-[700px] min-w-[70%] overflow-y-auto h-full ',
        device === 'desktop' && 'max-w-[70%]',
        device !== 'desktop' && 'w-full'
    )}>
      <CardContent>
          <Accordion type='multiple' defaultValue={['open-source','content','notion','website']}>
              <AccordionItem value='open-source'>
                  <AccordionTrigger className='border-none outline-none'>Open Source Details</AccordionTrigger>
                  <AccordionContent>
                      <div className='flex flex-col flex-wrap text-paragraph '>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Github Link:</div> 
                            <a className='text-description hover:text-white' href={project.githubLink} target='_blank'>
                              {project.githubLink}
                            </a>
                          </div>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Npm Package Link: </div> 
                            <a className='text-description hover:text-white' href={project.npmPackageLink} target='_blank'>
                              {project.npmPackageLink}
                            </a>
                          </div>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Github Repo Stars: </div>
                            <div className='text-description'>{project.githubStars}</div>
                          </div>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Weekly Github Clones: </div>
                            <div  className='text-description'>{project.weeklyGithubClones}</div>
                          </div>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Weekly Npm Downloads: </div>
                            <div  className='text-description'>{project.weeklyNpmDownloads}</div>
                          </div>
                      </div>
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value='content'>
                  <AccordionTrigger>Content Details</AccordionTrigger>
                  <AccordionContent>
                      <div className='flex flex-col flex-wrap text-paragraph '>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Blog | Documentation Link:</div> 
                            <a className='text-description hover:text-white' href={project.blogLink} target='_blank'>
                              {project.blogLink}
                            </a>
                          </div>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Youtube Video Link </div> 
                            <a className='text-description hover:text-white' href={project.youtubeLink} target='_blank'>
                              {project.youtubeLink}
                            </a>
                          </div>
                      </div>
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value='notion'>
                  <AccordionTrigger>Notion Template Details</AccordionTrigger>
                  <AccordionContent>
                      <div className='flex flex-col flex-wrap text-paragraph '>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Template Link:</div> 
                            <a className='text-description hover:text-white' href={project.notionTemplateLink} target='_blank'>
                              {project.notionTemplateLink}
                            </a>
                          </div>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Views: </div>
                            <div className='text-description'>{project.notionViews}</div>
                          </div>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Downloads: </div>
                            <div  className='text-description'>{project.notionDownloads}</div>
                          </div>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Rating: </div>
                            <div  className='text-description'>{project.notionRating}</div>
                          </div>
                      </div>
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value='website'>
                  <AccordionTrigger>Website Details</AccordionTrigger>
                  <AccordionContent>
                      <div className='flex flex-col flex-wrap text-paragraph '>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Website Link:</div> 
                            <a className='text-description hover:text-white' href={project.websiteLink} target='_blank'>
                              {project.websiteLink}
                            </a>
                          </div>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Views: </div>
                            <div className='text-description'>{project.websiteViews}</div>
                          </div>
                          <div className='flex justify-between items-center gap-4 '>
                            <div>Monthly Active Users: </div>
                            <div  className='text-description'>{project.websiteUsers}</div>
                          </div>
                      </div>
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem value='skills'>
                <AccordionTrigger>Skills </AccordionTrigger>
                  <AccordionContent className='overflow-y-auto max-h-[200px]'>
                      {[...skillTypes].map((type, index) => (
                        <div key={index} className='flex flex-wrap items-center gap-4 justify-start border-b-[1px] '>
                          <h2 key={index} className='text-md col-span-3 font-bold'>{type}</h2>
                          <ProjectSkillsList subSkills={project.skills.filter((skill) => skill.subType.includes(type))}/>
                        </div>
                      ))}
                  </AccordionContent>
              </AccordionItem>
          </Accordion>

      </CardContent>
    </Card>
  )
}

export default ProfileDetails2