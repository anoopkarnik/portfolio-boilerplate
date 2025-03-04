'use client'

import React, { useEffect, useState } from 'react'


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
import { getPortfolioDetails } from '../actions/strapi'

const Home = () => {
  const device = useDeviceType()
  const [profileDetails, setProfileDetails] = useState(profile)
  const [aboutDetails, setAboutDetails] = useState(about)
  const [educationDetails, setEducationDetails] = useState(education)
  const [experienceDetails, setExperienceDetails] = useState(experience)
  const [skillsDetails, setSkillsDetails] = useState(skills)
  const [projectsDetails, setProjectsDetails] = useState(projects)
  const [constantsType, setConstantsType] = useState(process.env.NEXT_PUBLIC_BASE_DATA_SOURCE || 'file')


  useEffect(() => {
    if (constantsType === 'cms') {
      updateDataFromStrapiCms()
    }
  }, [])

  const updateDataFromStrapiCms = async () => {
    const portfolioDetails = await getPortfolioDetails()
    setAboutDetails(portfolioDetails.about)
    setProfileDetails(portfolioDetails.profile)
    setEducationDetails(portfolioDetails.education)
    setExperienceDetails(portfolioDetails.experience)
    setSkillsDetails(portfolioDetails.skills)
    setProjectsDetails(portfolioDetails.projects)
  }

  const updateDataFromFiles = async () => {
    setAboutDetails(about)
    setProfileDetails(profile)
    setEducationDetails(education)
    setExperienceDetails(experience)
    setSkillsDetails(skills)
    setProjectsDetails(projects)
  }

  const handleConstantsType = async () => {
      if (constantsType === 'file') {
          await updateDataFromStrapiCms()
          setConstantsType('cms')
      }
      else {
          await updateDataFromFiles()
          setConstantsType('file')
      }
  }

  return (
    <div className={cn('flex justify-center my-10 gap-10 mx-6 ',
      device === 'tablet' && 'flex-col items-center ',
      device === 'mobile' && 'flex-col items-center'
    )}>
      <Profile profile={profileDetails} constantsType={constantsType} 
      handleConstantsType={handleConstantsType}/>
      <ProfileDetails about={aboutDetails} education={educationDetails} experience={experienceDetails} 
      skills={skillsDetails} projects={projectsDetails}/>
    </div>
  )
}

export default Home