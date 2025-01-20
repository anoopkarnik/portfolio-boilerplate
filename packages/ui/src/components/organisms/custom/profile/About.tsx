import AboutCard from '../../../molecules/custom/Profile/v1/AboutCard'

const About = ({aboutMe,myJourney,whatIAmWorkingOn}:{aboutMe:string, myJourney:string, whatIAmWorkingOn:any}) => {
  return (
    <div>
        <h1 className='text-xl underline'>About Me</h1>
        <p>
            {aboutMe}
        </p>
        
        <h1 className='text-xl underline mt-4'>My Journey</h1>
            {myJourney}
        <h1 className='text-2xl my-4'>What I am working on</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {whatIAmWorkingOn.map((item:any, index:number) => (
                <AboutCard key={index} imgSrc={item.imgSrc} title={item.title} description={item.description}/>
            ))}
        </div>

    </div>
  )
}

export default About