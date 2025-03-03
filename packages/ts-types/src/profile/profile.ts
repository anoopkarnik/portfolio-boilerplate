import { aboutProps } from "./about";
import { educationProps } from "./education";
import { experienceProps } from "./experience";
import { projectProps } from "./project";
import { skillProps } from "./skills";

export interface profileProps {
    name: string;
    logo: string;
    details: string;
    title: string;
    email: string;
    phone: string;
    resume: string;
    location: string;
    emailComposeLink: string;
    githubLink: string;
    linkedinLink: string;
    youtubeLink: string;
    twitterLink: string;
    discordLink: string;
}

export interface profileDetailsProps {
    about: aboutProps;
    education: educationProps[];
    experience: experienceProps[];
    skills: skillProps[];
    projects: projectProps[];
}