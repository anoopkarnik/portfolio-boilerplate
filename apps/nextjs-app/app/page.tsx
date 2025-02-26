'use client'

import React from 'react'


import Profile from '@repo/ui/organisms/custom/profile/Profile'
import {useDeviceType}  from '@repo/ui/hooks/use-device'
import { cn } from '@repo/ui/lib/utils'
import ProfileDetails from '@repo/ui/organisms/custom/profile/ProfileDetails'
import { profile } from '../lib/constants/profile'
import { education } from '../lib/constants/education'
import { about } from '../lib/constants/about'
import { experience } from '../lib/constants/experience'
import { skills } from '../lib/constants/skills'
import { projects } from '../lib/constants/projects'

const Home = () => {
  const device = useDeviceType()

  return (
    <div className={cn('flex justify-center my-10 gap-10 mx-6',
      device === 'tablet' && 'flex-col items-center ',
      device === 'mobile' && 'flex-col items-center'
    )}>
      <Profile profile={profile}/>
      <ProfileDetails about={about} education={education} experience={experience} 
      skills={skills} projects={projects}/>
    </div>
  )
}

export default Home