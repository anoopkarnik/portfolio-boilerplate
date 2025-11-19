import { whatIAmWorkingOnProps } from '@/lib/ts-types/about'
import Image from 'next/image'
import React from 'react'

const AboutCard = ({imgSrc,title,description}: whatIAmWorkingOnProps) => {
  return (
    <div
        className="p-2 rounded-sm "
        style={{
        boxShadow:
            '-2px -2px 5px var(--tw-bg-opacity, rgba(0, 0, 0, 0.5)), 2px 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'var(--tw-bg-opacity)',
        }}
    >
        <div className='flex items-start justify-center gap-4'>
            <Image src={imgSrc[0] || '/logo.png'} width={30} height={30} alt={title} />
            <div className='flex flex-col items-start gap-1'>
                <p className='text-lg'>{title}</p>
                <p className='text-description'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutCard