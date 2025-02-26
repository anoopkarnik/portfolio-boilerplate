import { aboutProps } from "@repo/ts-types/profile/about";



export const aboutMe = `I am a passionate and driven individual who thrives on learning and adapting to
 any situation. My mission is to create impactful, end-to-end products in the domains of productivity, 
 learning, AI, and finance. With a strong foundation in backend development, LLMs, and data engineering, 
 I bring intermediate-level expertise in AI, DevOps, and frontend development, alongside a growing interest 
 in UI/UX and product design.`
export const myJourney = `I began my career as a Mechanical Engineer, exploring various fields like
 frontend development, design, finance, marketing, sales, and analytics during college.
  My first job as an analyst ignited my passion for machine learning and product development,
   motivating me to study Computer Science UG subjects independently. After securing a top rank in GATE,
    I pursued my MS in Computer Science at IIIT Hyderabad, specializing in AI and publishing two papers 
    in A-level conferences. Post-graduation, I embarked on a journey as a Data/Machine Learning Engineer,
     expanding my expertise to full-stack development and building products from concept to deployment.`
export const whatIAmWorkingOn = [
    {
        imgSrc: '/code.png',
        title: 'Micro SaaS Products',
        description: 'Building and launching small, focused SaaS products to solve specific problems.'
    },
    {
        imgSrc: "/github-dark.png",
        title: "Open Source Projects",
        description: "Contributing to and building projects that give back to the developer community."
    },
    {
        imgSrc: "/youtube.png",
        title: "Content Creation",
        description: "Sharing knowledge, insights, and experiences in AI, software development, and productivity."
    },
    {
        imgSrc: "/openai.png",
        title: "AI Integration",
        description: "Integrating AI into existing products and services to enhance user experience and drive business growth."
    },
    {
        imgSrc: '/notion.png',
        title: 'Notion Templates',
        description: 'Designing productivity-enhancing templates to simplify workflows and goal tracking.'
    }
]
export const about: aboutProps = {
    aboutMe,
    myJourney,
    whatIAmWorkingOn
}