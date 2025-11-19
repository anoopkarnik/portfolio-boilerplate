import { projectProps } from "./project";

export interface experienceProps {
    id: string;
    durationDisplay: string;
    position: string;
    company: string;
    type: string;
    projects:projectProps[];
}
