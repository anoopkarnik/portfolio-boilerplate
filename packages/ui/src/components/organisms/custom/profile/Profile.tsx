import React, { useState } from 'react'
import { Card, CardContent } from '../../../molecules/shadcn/card'
import ProfileDetail from '../../../molecules/custom/Portfolio/v1/ProfileDetail'
import SocialIcons from '../../../molecules/custom/Portfolio/v1/SocialIcons'
import { BookText, Mail, MapPin, PhoneCallIcon } from 'lucide-react'
import { Separator } from '../../../atoms/shadcn/separator'
import { useDeviceType } from '../../../../hooks/use-device'
import { Button } from '../../../atoms/shadcn/button'
import { cn } from '../../../../lib/utils'
import { profileProps } from '@repo/ts-types/profile/profile'
import { Switch } from '../../../molecules/shadcn/switch'
import Image from 'next/image'

const Profile = ({profile,constantsType,handleConstantsType}:{profile:profileProps,
    constantsType:string,handleConstantsType:()=>void
}) => {

        const device = useDeviceType()
        const [showDetails, setShowDetails] = useState(false)
        
  return (
    <Card className={cn(`h-full`,
      device !== 'desktop' && 'w-full',
      device === 'desktop' && 'sticky top-10'
    )}>
         <CardContent className='flex flex-col items-center justify-center gap-4 relative'>
            <div className='w-full flex justify-start items-center '>
              <div className={cn('flex items-center justify-center gap-4 pt-10',
                   device === 'desktop' && 'flex-col gap-4'
                 )}>
                     <Image src={profile.logo} width={100} height={100} alt='logo' className='rounded-2xl '/>
                     <div className='flex flex-col items-center justify-center gap-4'>
                       <p className='text-center text-2xl'>
                           {profile.name}
                       </p>
                       <p className='text-center text-sm font-extralight bg-accent px-4 rounded-sm'>
                           {profile.title}
                       </p>
                       {device !== 'desktop' && 
                       <div className='flex items-center'>
                          <Switch onClick={handleConstantsType}/>
                          <p className='text-xs font-light text-gray-500 ml-2'>{constantsType}</p>
                       </div> 
                        }
                     </div>
                 </div>
            </div>
            {device === 'desktop' && 
              <div className='flex items-center'>
                  <Switch onClick={handleConstantsType}/>
                  <p className='text-xs font-light text-gray-500 ml-2'>{constantsType}</p>
              </div> 
            }
            {
              device!="desktop" && 
                <Button variant="ghost" onClick={()=>setShowDetails(!showDetails)} 
                className='absolute top-0 right-0 rounded-none rounded-tr-lg '>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </Button>
            }

            {(showDetails || device=="desktop") && 
              <>
              <Separator className='my-0'/>
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