'use client'

import { educationProps } from '@/lib/ts-types/education'
import EducationCard from '../molecules/EducationCard'

const Education = ({education}:{education:educationProps[]}) => {

  return (
    <div className='flex flex-col gap-4 max-w-[500px]'>
        {education?.map((edu, index) => (
            <EducationCard key={index} durationDisplay={edu.durationDisplay} degree={edu.degree} institution={edu.institution} 
            result={edu.result} courses={edu.courses} type={edu.type} resultType={edu.resultType} />
        ))}
    </div>
  )
}

export default Education