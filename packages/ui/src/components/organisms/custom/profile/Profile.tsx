import React, { useState } from 'react'
import { Card, CardContent } from '../../../molecules/shadcn/card'
import AvartarNameProfession from '../../../molecules/custom/Portfolio/v1/AvartarNameProfession'
import ProfileDetail from '../../../molecules/custom/Portfolio/v1/ProfileDetail'
import SocialIcons from '../../../molecules/custom/Portfolio/v1/SocialIcons'
import { BookText, Mail, MapPin, PhoneCallIcon } from 'lucide-react'
import { Separator } from '../../../atoms/shadcn/separator'
import useDevice from '../../../../hooks/use-device'
import { Button } from '../../../atoms/shadcn/button'
import { cn } from '../../../../lib/utils'

const Profile = ({name,logo,title,email,emailComposeLink,phone,resume,location, githubLink,linkedinLink,youtubeLink,twitterLink,
    discordLink}:{name:string,logo:string,title:string, email:string, emailComposeLink:string, phone:string,
    resume:string, location:string, githubLink:string, linkedinLink:string, youtubeLink:string, twitterLink:string,
    discordLink:string
    }) => {

        const device = useDevice()
        const [showDetails, setShowDetails] = useState(false)

  return (
    <Card className='h-full '>
         <CardContent className='flex flex-col items-center justify-center gap-6 relative'>
            <AvartarNameProfession imagePath={logo} fullName={name} title={title}/>
            {device!="desktop" && 
            <Button variant="ghost" onClick={()=>setShowDetails(!showDetails)} 
            className='absolute top-0 right-0 rounded-none rounded-tr-lg '>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </Button>}
            {(showDetails || device=="desktop") && 
            <>
            <Separator className='my-4 '/>
            <div className={cn('flex flex-col gap-4')}>
              <ProfileDetail Icon={Mail} label='EMAIL' value={email} link={emailComposeLink}/>
              <ProfileDetail Icon={PhoneCallIcon} label='PHONE' value={phone}/>
              <ProfileDetail Icon={BookText} label='RESUME' value='Download Resume' link={resume}/>
              <ProfileDetail Icon={MapPin} label='LOCATION' value={location}/>
            </div>
            <Separator className='my-4 '/>
            <SocialIcons 
              githubLink={githubLink}
              linkedinLink={linkedinLink}
              youtubeLink={youtubeLink}
              twitterLink={twitterLink}
              discordLink={discordLink}
            />
            </>}
         </CardContent>
      </Card>
  )
}

export default Profile