import React from "react";
import {
  SiCanva, SiCloudflare, SiCss3, SiDavinciresolve, SiDiscord, SiDocker, SiElasticsearch, SiExpress, SiFigma, SiFlask, SiGithub,
  SiGithubactions, SiGooglecloud, SiHtml5, SiJavascript, SiJest, SiJira, SiLinkedin, SiMongodb, SiN8N, SiNeo4J, SiNextdotjs,
  SiNodedotjs, SiNotion, SiNpm, SiObsstudio, SiOpenai, SiPostgresql, SiPrisma, SiPython, SiReact, SiShadcnui, SiSpringboot,
  SiTailwindcss, SiTypescript, SiVercel, SiVitest, SiX, SiYoutube
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbCircleLetterC, TbCircleLetterH } from "react-icons/tb";

// Mapping icon names to React components
const iconMap: Record<string, JSX.Element> = {
  "Canva": <SiCanva />,
  "Cloudflare": <SiCloudflare />,
  "CSS": <SiCss3 />,
  "Davinci Resolve": <SiDavinciresolve />,
  "Discord": <SiDiscord />,
  "Docker": <SiDocker />,
  "Elastic Search": <SiElasticsearch />,
  "Express.js": <SiExpress />,
  "Figma": <SiFigma />,
  "Flask": <SiFlask />,
  "Github": <SiGithub />,
  "Github Actions": <SiGithubactions />,
  "Google Cloud": <SiGooglecloud />,
  "HTML": <SiHtml5 />,
  "Javascript": <SiJavascript />,
  "Jest": <SiJest />,
  "Jira": <SiJira />,
  "LinkedIn": <SiLinkedin />,
  "MongoDB": <SiMongodb />,
  "n8n": <SiN8N />,
  "Neo4j": <SiNeo4J />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <SiNodedotjs />,
  "Notion": <SiNotion />,
  "Npm Deployment": <SiNpm />,
  "OBS Studio": <SiObsstudio />, 
  "OpenAI": <SiOpenai />,
  "Postgresql": <SiPostgresql />,
  "Prisma": <SiPrisma />,
  "Python": <SiPython />,
  "React": <SiReact />,
  "React Native": <SiReact />,
  "Shadcn": <SiShadcnui />,
  "Springboot": <SiSpringboot />,
  "Tailwind CSS": <SiTailwindcss />,
  "Typescript": <SiTypescript />,
  "Vercel": <SiVercel />,
  "Vitest": <SiVitest />,
  "Twitter": <SiX />,
  "Youtube": <SiYoutube />,
  "AWS": <FaAws />,
  "Java": <FaJava />,
  "Coolify": <TbCircleLetterC />,
  "Huly": <TbCircleLetterH />
};

const IconRenderer = ({ iconName }: { iconName: string }) => {
  return iconMap[iconName] || <span>❌</span>; // Show ❌ if icon is missing
};

export default IconRenderer;
