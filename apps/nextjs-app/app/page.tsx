'use client'

import React from 'react'

import {name,title,logo, discordLink, email, emailComposeLink, githubLink, linkedinLink, location, phone, resume, twitterLink,
   youtubeLink, 
   aboutMe,
   myJourney,
   whatIAmWorkingOn,
   education} from '../lib/constants/profileDetails'
import Profile from '@repo/ui/organisms/custom/profile/Profile'
import {useDeviceType}  from '@repo/ui/hooks/use-device'
import { cn } from '@repo/ui/lib/utils'
import ProfileDetails from '@repo/ui/organisms/custom/profile/ProfileDetails'

const Home = () => {
  const device = useDeviceType()

  return (
    <div className={cn('flex justify-center my-10 gap-10 mx-6',
      device === 'tablet' && 'flex-col items-center ',
      device === 'mobile' && 'flex-col items-center'
    )}>
      <Profile name={name} title={title} logo={logo} discordLink={discordLink} email={email}
      emailComposeLink={emailComposeLink} githubLink={githubLink} linkedinLink={linkedinLink} location={location} 
      phone={phone} resume={resume} twitterLink={twitterLink} youtubeLink={youtubeLink} />
      <ProfileDetails aboutMe={aboutMe} myJourney={myJourney} whatIAmWorkingOn={whatIAmWorkingOn} education={education} />
    </div>
  )
}

export default Home