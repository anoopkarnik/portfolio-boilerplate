import AboutCard from '../../../molecules/custom/Profile/v1/AboutCard'

const About = ({aboutMe,myJourney,whatIAmWorkingOn}:{aboutMe:string, myJourney:string, whatIAmWorkingOn:any}) => {
  return (
    <div>
        <h1 className='text-subtitle'>About Me</h1>
        <p className='text-paragraph'>
            {aboutMe}
        </p>
        
        <h1 className='text-subtitle mt-4'>My Journey</h1>
        <p className='text-paragraph'>
            {myJourney}
        </p>
        <h1 className='text-subtitle my-4'>What I am working on</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {whatIAmWorkingOn.map((item:any, index:number) => (
                <AboutCard key={index} imgSrc={item.imgSrc} title={item.title} description={item.description}/>
            ))}
        </div>

    </div>
  )
}

export default About