'use client'

import EducationCard from '../../../molecules/custom/Profile/v1/EducationCard'

const Education = ({education}:{education:any[]}) => {

  return (
    <div className='flex flex-col gap-4 max-w-[500px]'>
        {education?.map((edu, index) => (
            <EducationCard key={index} year={edu.year} degree={edu.degree} institution={edu.institution} 
            cgpa={edu.cgpa} courses={edu.courses} />
        ))}
    </div>
  )
}

export default Education