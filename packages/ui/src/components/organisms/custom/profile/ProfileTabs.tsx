import React from 'react'
import { cn } from '../../../../lib/utils'

const ProfileTabs = ({activeTab, setActiveTab}:{activeTab:string, setActiveTab:any}) => {
  return (
    <>
        <div onClick={()=>setActiveTab('about')} className={cn('cursor-pointer hover:opacity-50',
            activeTab === 'about' && 'text-primary'
        )}>
            About
        </div >
        <div onClick={()=>setActiveTab('education')} className={cn('cursor-pointer hover:opacity-50',
            activeTab === 'education' && 'text-primary'
        )}>
            Education
        </div >
        <div onClick={()=>setActiveTab('experience')} className={cn('cursor-pointer hover:opacity-50',
            activeTab === 'experience' && 'text-primary'
        )}>
            Experience
        </div >
        <div onClick={()=>setActiveTab('skills')} className={cn('cursor-pointer hover:opacity-50',
            activeTab === 'skills' && 'text-primary'
        )}>
            Skills
        </div >
        <div onClick={()=>setActiveTab('projects')} className={cn('cursor-pointer hover:opacity-50',
            activeTab === 'projects' && 'text-primary'
        )}>
            Projects
        </div >
    </>
  )
}

export default ProfileTabs