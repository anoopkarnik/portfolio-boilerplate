import Image from 'next/image'
import React from 'react'

const AboutCard = ({imgSrc,title,description}: {imgSrc:string, title:string, description:string}) => {
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
            <Image src={imgSrc} width={30} height={30} alt={title} />
            <div className='flex flex-col items-start gap-4'>
                <p className='text-lg'>{title}</p>
                <p className='text-xs text-gray-300'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutCard