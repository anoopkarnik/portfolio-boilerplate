'use client'
import { LucideIcon } from 'lucide-react'

const ProfileDetail = ({label,value,Icon,link}:{label:string,value:string, Icon:LucideIcon,link?:string}) => {
  return (
    <div className='flex items-start justify-start gap-4'>
      <div
        className="p-2 rounded-sm "
        style={{
          boxShadow:
            '-2px -2px 5px var(--tw-bg-opacity, rgba(0, 0, 0, 0.5)), 2px 2px 5px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'var(--tw-bg-opacity)',
        }}
      >
        <Icon size={16} className="text-primary" strokeWidth={0.7} />
        </div>

          <div className='flex flex-col items-start'>
            <p className='text-xs font-light text-gray-500'>{label}</p>
            {link ?
              <a href={link} target='_blank'>
                <p className='text-xs hover:opacity-45 '>
                  {value}
                </p>
              </a>:
              <p className='text-xs'>
                {value}
              </p>
            }
          </div>
    </div>
  )
}

export default ProfileDetail