import { aboutProps } from "@/lib/ts-types/about";
import { educationProps } from "@/lib/ts-types/education";
import { experienceProps } from "@/lib/ts-types/experience";
import { profileProps } from "@/lib/ts-types/profile";
import { projectProps } from "@/lib/ts-types/project";
import { skillProps } from "@/lib/ts-types/skills";
import { queryAllNotionDatabase } from "@repo/notion/notion-client";
import { PortfolioData } from "../ts-types/portfolio";

// types for convenience


// This is your original logic, just moved into a function
export async function fetchPortfolioDataFromNotion(): Promise<PortfolioData> {
  const profileResults = await queryAllNotionDatabase({
        apiToken: process.env.NOTION_API_TOKEN || "",
        database_id: process.env.PROFILE_DATABASE_ID || "",
        filters: [],
        filter_condition: "and",
        sorts: [],
    });

  const profileData = profileResults.results[0];
  const profile: profileProps = {
    name: profileData.name,
    logo: profileData.logo,
    details: profileData.details,
    title: profileData.title,
    email: profileData.email,
    phone: profileData.phone,
    resume: profileData.resume,
    location: profileData.location,
    emailComposeLink: profileData.emailComposeLink,
    githubLink: profileData.githubLink,
    linkedinLink: profileData.linkedinLink,
    youtubeLink: profileData.youtubeLink,
    twitterLink: profileData.twitterLink,
    discordLink: profileData.discordLink,
  };

  const whatIAmWorkingOnResults = await queryAllNotionDatabase({
    apiToken: process.env.NOTION_API_TOKEN || "",
    database_id: process.env.CURRENTLY_WORKING_ON_DATABASE_ID || "",
    filters: [],
    filter_condition: "and",
    sorts: [],
  });
  const whatIAmWorkingOnData = whatIAmWorkingOnResults.results;

  const about: aboutProps = {
    aboutMe: profileData.aboutMe,
    myJourney: profileData.myJourney,
    whatIAmWorkingOn: whatIAmWorkingOnData,
  };

  const educationResults = await queryAllNotionDatabase({
    apiToken: process.env.NOTION_API_TOKEN || "",
    database_id: process.env.EDUCATION_DATABASE_ID || "",
    filters: [],
    filter_condition: "and",
    sorts: [{ name: "duration", direction: "descending", type: "date" }],
  });
  const education = educationResults.results as educationProps[];

  const experienceResults = await queryAllNotionDatabase({
    apiToken: process.env.NOTION_API_TOKEN || "",
    database_id: process.env.EXPERIENCES_DATABASE_ID || "",
    filters: [
      { name: "type", type: "multi_select", condition: "contains", value: "Full Time" },
      { name: "type", type: "multi_select", condition: "contains", value: "Internship" },
      { name: "type", type: "multi_select", condition: "contains", value: "Part Time" },
    ],
    filter_condition: "or",
    sorts: [{ name: "duration", direction: "descending", type: "date" }],
  });
  const experience = experienceResults.results as any[];

  // 🟡 Get all projects once
  const projectsResults = await queryAllNotionDatabase({
    apiToken: process.env.NOTION_API_TOKEN || "",
    database_id: process.env.PROJECTS_DATABASE_ID || "",
    filters: [
      { name: "Parent project", type: "relation", condition: "is_empty", value: true },
    ],
    filter_condition: "and",
    sorts: [{ name: "created_time", type: "created_time", direction: "descending" }],
  });
  const projects = projectsResults.results as any[];

  // 🟡 Get all skills once
  const skillsResults = await queryAllNotionDatabase({
    apiToken: process.env.NOTION_API_TOKEN || "",
    database_id: process.env.SKILLS_DATABASE_ID || "",
    filters: [
      { name: "projects", type: "relation", condition: "is_not_empty", value: true },
    ],
    filter_condition: "and",
    sorts: [{ name: "totalProjects", direction: "descending", type: "number" }],
  });
  const skills = skillsResults.results as any[];

  // Build maps in memory
  const projectsByExperienceId: Record<string, projectProps[]> = {};
  for (const project of projects) {
    const placeOfWorkRelations = project.placeOfWork ?? [];
    for (const rel of placeOfWorkRelations) {
      const expId = rel.id ?? rel;
      if (!projectsByExperienceId[expId]) {
        projectsByExperienceId[expId] = [];
      }
      projectsByExperienceId[expId].push(project);
    }
  }

  const skillsByProjectId: Record<string, skillProps[]> = {};
  for (const skill of skills) {
    const projectRelations = skill.projects ?? [];
    for (const rel of projectRelations) {
      const projectId = rel.id ?? rel;
      if (!skillsByProjectId[projectId]) {
        skillsByProjectId[projectId] = [];
      }
      skillsByProjectId[projectId].push(skill);
    }
  }

  const enrichedProjects: projectProps[] = projects.map((project: any) => ({
    ...project,
    skills: skillsByProjectId[project.id] ?? [],
  }));

  const enrichedExperience: experienceProps[] = experience.map((expItem: any) => ({
    ...expItem,
    projects: projectsByExperienceId[expItem.id] ?? [],
  }));

  return {
    about,
    profile,
    education,
    skills: skills as skillProps[],
    projects: enrichedProjects,
    experience: enrichedExperience,
  };
}
