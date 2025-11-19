import { skillProps } from "./skills";



export interface projectProps {
    id: string;
    title: string;
    type: string[];
    description?: string;
    techStack?: skillProps[];
    demoImages: string[];
    contribution?: string;
    notionTemplateLink?: string;
    notionViews?: number;
    notionDownloads?: number;
    notionRating?: number;
    youtubeLink?: string;
    blogLink?: string;
    websiteLink?: string;
    websiteViews?: number;
    websiteUsers?: number;
    githubLink?: string;
    npmPackageLink?: string;
    githubStars?: number;
    weeklyNpmDownloads?: number;
    weeklyGithubClones?: number;
    featured?: boolean;
    languagesUsed?: string;
    frontendStackUsed?: string;
    backendStackUsed?: string;
    dataEngineeringStackUsed?: string;
    cloudDevopsStackUsed?: string;
    integrationsUsed?: string;
    skills: skillProps[];
}                                                                                                                                               