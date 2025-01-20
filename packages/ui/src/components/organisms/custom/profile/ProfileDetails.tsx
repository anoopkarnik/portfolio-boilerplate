import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from '../../../molecules/shadcn/card'
import { cn } from '../../../../lib/utils'
import { Minus } from 'lucide-react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Education from './Education'
import {useDeviceType} from '../../../../hooks/use-device'
import ProfileTabs from './ProfileTabs'

const ProfileDetails = ({aboutMe,myJourney,whatIAmWorkingOn,education}:{
    aboutMe:string, myJourney:string, whatIAmWorkingOn:any,education:any[]}) => {
    const [activeTab, setActiveTab] = useState('about')
    const device = useDeviceType()
  return (
    <Card className='min-h-[700px] min-w-[50%] max-w-[1000px] overflow-y-auto '>
        <CardTitle>
            <div className='flex gap-10 justify-between items-start'>
                <div className='text-title-h1 mt-4 ml-4 capitalize flex flex-col g '>
                    <p>{activeTab}</p>
                    <p className='text-primary'>
                        <Minus size={50}/>
                    </p>
                </div>
                {device !='mobile' && 
                <div className='flex justify-end gap-6 bg-accent rounded-tr-md rounded-bl-md text-sm font-medium p-4'>
                    <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                </div>}
                {device === 'mobile' && 
                <div className='fixed bottom-0 left-[10%] right-[10%] flex justify-center gap-6 bg-accent rounded-t-md  text-sm font-medium p-4'>
                    <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                </div>
                }
            </div>
        </CardTitle>
        <CardContent>
            {activeTab === 'about' && <About  aboutMe={aboutMe} myJourney={myJourney} whatIAmWorkingOn={whatIAmWorkingOn} />}
            {activeTab === 'education' && <Education education={education}/>}
            {activeTab === 'experience' && <Experience/>}
            {activeTab === 'skills' && <Skills/>}
            {activeTab === 'projects' && <Projects/>}
        </CardContent>
    </Card>
  )
}

export default ProfileDetails