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
import { aboutProps } from '@repo/ts-types/profile/about'


const Home = () => {
  const device = useDeviceType()
  const [profileDetails, setProfileDetails] = useState(profile)
  const [aboutDetails, setAboutDetails] = useState<aboutProps>(about)
  const [educationDetails, setEducationDetails] = useState(education)
  const [experienceDetails, setExperienceDetails] = useState(experience)
  const [skillsDetails, setSkillsDetails] = useState(skills)
  const [projectsDetails, setProjectsDetails] = useState(projects)
  const [constantsType, setConstantsType] = useState('cms')
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      if(constantsType === 'cms'){
        const portfolioDetails = await getPortfolioDetails()
        setAboutDetails(portfolioDetails.about)
        setProfileDetails(portfolioDetails.profile)
        setEducationDetails(portfolioDetails.education)
        setExperienceDetails(portfolioDetails.experience)
        setSkillsDetails(portfolioDetails.skills)
        setProjectsDetails(portfolioDetails.projects)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const handleConstantsType = async () => {
      if (constantsType === 'file') {
          const portfolioDetails = await getPortfolioDetails()
          setAboutDetails(portfolioDetails.about)
          setProfileDetails(portfolioDetails.profile)
          setEducationDetails(portfolioDetails.education)
          setExperienceDetails(portfolioDetails.experience)
          setSkillsDetails(portfolioDetails.skills)
          setProjectsDetails(portfolioDetails.projects)
          setConstantsType('cms')
      }
      else {
          setAboutDetails(about)
          setProfileDetails(profile)
          setEducationDetails(education)
          setExperienceDetails(experience)
          setSkillsDetails(skills)
          setProjectsDetails(projects)
          setConstantsType('file')
      }
  }

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>Loading...</p>
      </div>
    )
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