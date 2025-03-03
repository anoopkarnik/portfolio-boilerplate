import { skillProps } from "./skills";

export interface openSourceDetailsProps {
    link: string;
    npmPackageLink: string;
    stars: string;
    weeklyDownloads: string;
    weeklyClones: string;
}

export interface websiteDetailsProps {
    websiteLink: string;
    websiteViews: string;
    websiteUsers: string;
}

export interface contentDetailsProps {
    blogLink: string;
    videoLink: string;
}

export interface notionDetailsProps {
    templateLink: string;
    views: string;
    downloads: string;
    rating: string;
}

export interface projectProps {
    title: string;
    type?: string;
    description?: string;
    techStack?: skillProps[];
    demoImage?: string;
    contribution?: string;
    openSourceDetails?: openSourceDetailsProps;
    websiteDetails?: websiteDetailsProps;
    contentDetails?: contentDetailsProps;
    notionDetails?: notionDetailsProps;
    featured?: boolean;
}                                                                                                                                               