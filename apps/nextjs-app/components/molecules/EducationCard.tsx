import { educationProps } from '@/lib/ts-types/education'
import React from 'react'

const EducationCard = ({durationDisplay,degree,institution, result,courses, resultType}: educationProps) => {
  return (
    <div className="flex flex-col bg-accent p-4 rounded-sm gap-2 w-full">
        <div className="flex justify-between items-center">
            <div className='text-lg font-bold'>{degree}</div>
            <div className='text-xs font-thin'>{durationDisplay}</div>
        </div>
        <div className="text-sm text-primary">{institution}</div>
        <div className="text-sm">{result} {resultType=="Percentage" ? "%" : ""}</div>
        <div className="text-description">
            <p>{courses}</p>
        </div>
    </div>
  )
}

export default EducationCard