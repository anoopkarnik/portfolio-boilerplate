import React from "react";
import {
  SiApachekafka,
  SiCanva, SiCloudflare, SiCss3, SiDavinciresolve, SiDiscord, SiDocker, SiElasticsearch, SiExpress, SiFigma, SiFlask, SiGithub,
  SiGithubactions, SiGooglecloud, SiHtml5, SiJavascript, SiJest, SiJira, SiLinkedin, SiMongodb, SiN8N, SiNeo4J, SiNextdotjs,
  SiNodedotjs, SiNotion, SiNpm, SiObsstudio, SiOpenai, SiPostgresql, SiPrisma, SiPython, SiReact, SiShadcnui, SiSpringboot,
  SiTailwindcss, SiTypescript, SiVercel, SiVitest, SiX, SiYoutube,SiGnubash, SiHono,
  SiJitsi, SiTurborepo,SiFastapi,SiGoogleanalytics,
  SiRender,
  SiGtk,
  SiOllama,
  SiPaddlepaddle,
  SiSupabase,
  SiDocusaurus,
  SiStrapi,
  SiTrpc
} from "react-icons/si";
import { FaAws, FaJava,FaTelegramPlane, FaRocketchat } from "react-icons/fa";
import { TbCircleLetterC, TbCircleLetterH } from "react-icons/tb";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaStripe } from "react-icons/fa6";



// Mapping icon names to React components
const iconMap: Record<string, JSX.Element> = {
  "Canva": <SiCanva />,
  "Cloudflare": <SiCloudflare />,
  "Css": <SiCss3 />,
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
  "Html": <SiHtml5 />,
  "Javascript": <SiJavascript />,
  "Jest": <SiJest />,
  "Jira": <SiJira />,
  "LinkedIn": <SiLinkedin />,
  "MongoDB": <SiMongodb />,
  "n8n": <SiN8N />,
  "Neo4j": <SiNeo4J />,
  "Nextjs": <SiNextdotjs />,
  "Nodejs": <SiNodedotjs />,
  "Notion": <SiNotion />,
  "Npm Deployment": <SiNpm />,
  "OBS Studio": <SiObsstudio />, 
  "OpenAI": <SiOpenai />,
  "Postgresql": <SiPostgresql />,
  "Prisma": <SiPrisma />,
  "Python": <SiPython />,
  "React": <SiReact />,
  "React Native": <SiReact />,
  "Shadcn UI": <SiShadcnui />,
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
  "Huly": <TbCircleLetterH />,
  "Kafka": <SiApachekafka />,
  "X APIs": <FaXTwitter />,
  "Telegram APIs": <FaTelegramPlane />,
  "Vercel Analytics": <SiVercel />,
  "Linkedin APIs": <SiLinkedin />,
  "Bash": <SiGnubash />,
  "Hono": <SiHono />,
  "Jitsi": <SiJitsi />,
  "Rocket.Chat": <FaRocketchat />,
  "Render": <SiRender />,
  "GCP": <SiGooglecloud />,
  "TurboRepo": <SiTurborepo />,
  "FastAPI": <SiFastapi />,
  "GTK": <SiGtk />,
  "Ollama": <SiOllama />,
  "OpenAI APIs": <SiOpenai />,
  "Paddle OCR": <SiPaddlepaddle />,
  "Supabase": <SiSupabase />,
  "Docusaurus": <SiDocusaurus />,
  "Stripe": <FaStripe />,
  "Strapi CMS": <SiStrapi />,
  "tRPC": <SiTrpc />,
  "Google Analytics & Search": <SiGoogleanalytics />,
};

const IconRenderer = ({ iconName, iconImg }: { iconName: string, iconImg?: string }) => {
  if (iconImg) {
    return <Image src={iconImg} alt={iconName} height={24} width={24} />;
  }
  return iconMap[iconName] || <span>❌</span>; // Show ❌ if icon is missing
};

export default IconRenderer;
