import React, { useState } from 'react'
import { Card, CardContent } from '../../../molecules/shadcn/card'
import AvartarNameProfession from '../../../molecules/custom/Portfolio/v1/AvartarNameProfession'
import ProfileDetail from '../../../molecules/custom/Portfolio/v1/ProfileDetail'
import SocialIcons from '../../../molecules/custom/Portfolio/v1/SocialIcons'
import { BookText, Mail, MapPin, PhoneCallIcon } from 'lucide-react'
import { Separator } from '../../../atoms/shadcn/separator'
import { useDeviceType } from '../../../../hooks/use-device'
import { Button } from '../../../atoms/shadcn/button'
import { cn } from '../../../../lib/utils'
import { profileProps } from '@repo/ts-types/profile/profile'

const Profile = ({profile}:{profile:profileProps}) => {

        const device = useDeviceType()
        const [showDetails, setShowDetails] = useState(false)

  return (
    <Card className={cn(`h-full`,
      device !== 'desktop' && 'w-full',
      device === 'desktop' && 'sticky top-10'
    )}>
         <CardContent className='flex flex-col items-center justify-center gap-6 relative'>
            <div className='w-full flex justify-start items-center '>
              <AvartarNameProfession imagePath={profile.logo} fullName={profile.name} title={profile.title}/>
            </div>
            {
              device!="desktop" && 
                <Button variant="ghost" onClick={()=>setShowDetails(!showDetails)} 
                className='absolute top-0 right-0 rounded-none rounded-tr-lg '>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </Button>
            }

            {(showDetails || device=="desktop") && 
              <>
              <Separator className='my-4 '/>
              <div className={cn('w-full grid',
                device === 'tablet' && 'grid-cols-2 gap-8',
                device === 'mobile' && 'grid-cols-1 gap-4',
                device === 'desktop' && 'grid-cols-1 gap-8'
              )}>
                <ProfileDetail Icon={Mail} label='EMAIL' value={profile.email} link={profile.emailComposeLink}/>
                <ProfileDetail Icon={PhoneCallIcon} label='PHONE' value={profile.phone}/>
                <ProfileDetail Icon={BookText} label='RESUME' value='Download Resume' link={profile.resume}/>
                <ProfileDetail Icon={MapPin} label='LOCATION' value={profile.location}/>
              </div>
              <Separator className='my-4 '/>
              <SocialIcons 
                githubLink={profile.githubLink}
                linkedinLink={profile.linkedinLink}
                youtubeLink={profile.youtubeLink}
                twitterLink={profile.twitterLink}
                discordLink={profile.discordLink}
              />
              </>
              }
         </CardContent>
      </Card>
  )
}

export default Profile