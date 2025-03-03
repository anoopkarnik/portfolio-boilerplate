import { projectProps } from "./project";

export interface experienceProps {
    year: string;
    position: string;
    company: string;
    type: string;
    projects:projectProps[];
}
