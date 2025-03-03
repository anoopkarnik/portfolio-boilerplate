import Image from 'next/image'
import React from 'react'

const EducationCard = ({year,degree,institution, cgpa,courses}: {
    year:string,degree:string,institution:string, cgpa:string,courses:string[]
}) => {
  return (
    <div className="flex flex-col bg-accent p-4 rounded-sm gap-2">
        <div className="flex justify-between items-center">
            <div className='text-lg font-bold'>{degree}</div>
            <div className='text-sm font-light'>{year}</div>
        </div>
        <div className="text-sm text-primary">{institution}</div>
        <div className="text-sm">{cgpa}</div>
        <div className="text-description">
            <p>{courses}</p>
        </div>
    </div>
  )
}

export default EducationCard