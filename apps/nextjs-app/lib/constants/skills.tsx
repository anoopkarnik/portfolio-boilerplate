import { skillsProps } from "@repo/ts-types/profile/skills"
import { SiCanva, SiCloudflare, SiCss3, SiDavinciresolve, SiDiscord, SiDocker, SiElasticsearch, SiExpress, SiFigma, SiFlask, SiGithub,
     SiGithubactions,
     SiGooglecloud, SiHtml5, SiJavascript, SiJest, SiJira, SiLinkedin, SiMongodb, SiN8N, SiNeo4J, SiNextdotjs, SiNodedotjs, 
     SiNotion, SiNpm, SiObsstudio, SiOpenai, SiPostgresql, SiPrisma, SiPython, SiReact, SiShadcnui, SiSpringboot, 
     SiTailwindcss, SiTypescript, SiVercel, 
     SiVitest,
     SiX,
     SiYoutube} from "react-icons/si"
import { FaAws, FaJava } from "react-icons/fa";
import { TbCircleLetterC, TbCircleLetterH } from "react-icons/tb";



export const skills:skillsProps = {
    "Languages": [
        {title: 'Javascript',icon: <SiJavascript/>,},
        {title: 'Typescript',icon: <SiTypescript />,},
        {title: 'Python',icon: <SiPython />,},
        {title: 'Java',icon: <FaJava />,},
    ],
    "Frontend": [
        {title: 'HTML',icon: <SiHtml5 />,},
        {title: 'CSS',icon: <SiCss3 />,},
        {title: 'React',icon: <SiReact />,},
        {title: 'React Native',icon: <SiReact />,},
        {title: 'Tailwind CSS',icon: <SiTailwindcss />,},
        {title: 'Shadcn', icon: <SiShadcnui />},
        {title: 'Next.js', icon: <SiNextdotjs />},
    ],
    "Backend":[
        {title: 'Node.js',icon: <SiNodedotjs/>,},
        {title: 'Express.js',icon: <SiExpress/>,},
        {title: 'Flask',icon: <SiFlask/>,},
        {title: 'Springboot', icon: <SiSpringboot/>},
        {title: 'Next.js', icon: <SiNextdotjs />},
    ],
    "AI & Automations": [
        {title: 'OpenAI', icon: <SiOpenai/>},
        {title: 'n8n', icon: <SiN8N/>},
    ],
    "Devops": [
        {title: 'AWS', icon: <FaAws/>},
        {title: 'Docker', icon: <SiDocker/>},
        {title: 'Cloudflare', icon: <SiCloudflare/>},
        {title: 'Vercel', icon: <SiVercel/>},
        {title: 'Npm Deployment', icon: <SiNpm/>},
        {title: 'Github', icon: <SiGithub/>},
        {title: 'Google Cloud', icon: <SiGooglecloud/>},
        {title: 'Coolify', icon: <TbCircleLetterC/>},
        {title: 'Github Actions', icon: <SiGithubactions/>},
    ],
    "Databases": [
        {title: 'Postgresql', icon: <SiPostgresql/>},
        {title: 'MongoDB', icon: <SiMongodb/>},
        {title: 'Prisma', icon: <SiPrisma/>},
        {title: 'Elastic Search', icon: <SiElasticsearch/>},
        {title: 'Neo4j', icon: <SiNeo4J/>}
    ],
    "Project Management": [
        {title: 'Notion', icon: <SiNotion/>},
        {title: 'Jira', icon: <SiJira/>},
        {title: 'Huly', icon: <TbCircleLetterH/>},
    ],
    "UI/UX": [
        {title: 'Figma', icon: <SiFigma/>},
    ],
    "Testing": [
        {title: 'Vitest', icon: <SiVitest/>},
        {title: 'Jest', icon: <SiJest/>},
    ],
    "Content Creation": [
        {title: 'Youtube', icon: <SiYoutube/>},
        {title: 'LinkedIn', icon: <SiLinkedin/>},
        {title: 'Twitter', icon: <SiX/>},
        {title: 'Discord', icon: <SiDiscord/>},
        {title: 'Canva', icon: <SiCanva/>},
        {title: 'OBS Studio', icon: <SiObsstudio/>}, 
        {title: 'Davinci Resolve', icon: <SiDavinciresolve/>},
    ],
    "Miscellaneous": [],

}