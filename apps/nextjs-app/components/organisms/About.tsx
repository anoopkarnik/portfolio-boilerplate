import { aboutProps } from '@/lib/ts-types/about'
import AboutCard from '../molecules/AboutCard'

const About = ({about}:{about:aboutProps}) => {
  return (
    <div>
        <h1 className='text-subtitle'>About Me</h1>
        <p className='text-paragraph'>
            {about?.aboutMe}
        </p>
        
        <h1 className='text-subtitle mt-4'>My Journey</h1>
        <p className='text-paragraph'>
            {about?.myJourney}
        </p>
        <h1 className='text-subtitle my-4'>What I am working on</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {about?.whatIAmWorkingOn.map((item:any, index:number) => (
                <AboutCard key={index} imgSrc={item.imgSrc} title={item.title} description={item.description}/>
            ))}
        </div>

    </div>
  )
}

export default About