'use client'

import React from 'react'


import Profile from '@/components/organisms/Profile'
import {useDeviceType}  from '@repo/ui/hooks/use-device'
import { cn } from '@repo/ui/lib/utils'
import ProfileDetails from '@/components/organisms/ProfileDetails'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useTRPC } from '@/trpc/client'


const HomeView = () => {
  const device = useDeviceType()
  const trpc = useTRPC()
  const { data: notionData } = useSuspenseQuery(trpc.portfolio.getPortfolioDataFromNotion.queryOptions())
//   const { data: strapiData } = useSuspenseQuery(trpc.portfolio.getPortfolioDataFromStrapi.queryOptions())

  return (
    <>
      <div className={cn('flex justify-center my-10 gap-10 mx-6 relative w-full',
        device === 'tablet' && 'flex-col items-center ',
        device === 'mobile' && 'flex-col items-center'
      )}>
        <Profile profile={notionData.profile}/>
        <ProfileDetails about={notionData.about} education={notionData.education} experience={notionData.experience} 
        skills={notionData.skills} projects={notionData.projects}/>
      </div>
    </>
  )
}

export default HomeView