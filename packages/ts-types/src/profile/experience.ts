export interface experienceProps {
    year: string;
    position: string;
    company: string;
    type: string;
    projects:projectProps[];
}

export interface projectProps {
    title: string;
    techStack: string[];
    contribution: string;
    description: string;
}