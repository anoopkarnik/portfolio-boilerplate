import { aboutProps } from "./about";
import { educationProps } from "./education";
import { experienceProps } from "./experience";
import { profileProps } from "./profile";
import { projectProps } from "./project";
import { skillProps } from "./skills";

export type PortfolioData = {
  about: aboutProps;
  profile: profileProps;
  education: educationProps[];
  skills: skillProps[];
  projects: projectProps[];
  experience: experienceProps[];
};