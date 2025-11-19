import { aboutProps } from "@/lib/ts-types/about";
import { educationProps } from "@/lib/ts-types/education";
import { experienceProps } from "@/lib/ts-types/experience";
import { profileProps } from "@/lib/ts-types/profile";
import { projectProps } from "@/lib/ts-types/project";
import { skillProps } from "@/lib/ts-types/skills";
import { createTRPCRouter, baseProcedure } from "@/trpc/init";
import { queryAllNotionDatabase } from "@repo/notion/notion-client";

export const portfolioRouter = createTRPCRouter({
    // getPortfolioDataFromStrapi: baseProcedure.query(async () => {
    //     const baseUrl = process.env.STRAPI_API_URL || "http://localhost:1337/api/";
    //     const database = "portfolio-boilerplate";
    //     const populateAbout= "populate[about][populate][0]=whatIAmWorkingOn";
    //     const populateProfile = "populate[profile]=true";
    //     const populateEducation = "populate[education]=true";
    //     const populateSkills = "populate[skills]=true";
    //     const populateProjects = "populate[projects][populate][0]=openSourceDetails&populate[projects][populate][1]=websiteDetails&populate[projects][populate][2]=contentDetails&populate[projects][populate][3]=notionDetails";
    //     const populateExperience = "populate[experience][populate][projects][populate][techStack]=true";
    //     const url = `${baseUrl}${database}?${populateAbout}&${populateProfile}&${populateEducation}&${populateSkills}&${populateProjects}&${populateExperience}`;
    //     const config = {
    //         method: 'get',
    //         maxBodyLength: Infinity,
    //         url,
    //         headers: { 
    //           'Authorization': "Bearer " +process.env.STRAPI_TOKEN || ""
    //         }
    //       };
    //       const response  = await axios.request(config);
    //       const result = await response.data;
    //       return result.data as {about: aboutProps, 
    //         profile: profileProps, education: educationProps[], skills: skillProps[], projects: projectProps[], experience: experienceProps[]};
    // }),

    getPortfolioDataFromNotion: baseProcedure.query( async () => {
        const profileResults = await queryAllNotionDatabase({
            apiToken: process.env.NOTION_API_TOKEN || "",
            database_id: process.env.PROFILE_DATABASE_ID || "",
            filters: [],
            filter_condition: "and",
            sorts: []
        })
        const profileData = profileResults.results[0]
        const profile = {name: profileData.name, logo: profileData.logo, details: profileData.details, title: profileData.title, email: profileData.email, 
            phone: profileData.phone, resume: profileData.resume, location: profileData.location, emailComposeLink: profileData.emailComposeLink,
            githubLink: profileData.githubLink, linkedinLink: profileData.linkedinLink, youtubeLink: profileData.youtubeLink,
            twitterLink: profileData.twitterLink, discordLink: profileData.discordLink};

        const whatIAmWorkingOnResults = await queryAllNotionDatabase({
            apiToken: process.env.NOTION_API_TOKEN || "",
            database_id: process.env.CURRENTLY_WORKING_ON_DATABASE_ID || "",
            filters: [],
            filter_condition: "and",
            sorts: []
        })
        const whatIAmWorkingOnData = whatIAmWorkingOnResults.results
        const about = {aboutMe: profileData.aboutMe,myJourney: profileData.myJourney,
             whatIAmWorkingOn: whatIAmWorkingOnData};
        
        const educationResults = await queryAllNotionDatabase({
            apiToken: process.env.NOTION_API_TOKEN || "",
            database_id: process.env.EDUCATION_DATABASE_ID || "",
            filters: [],
            filter_condition: "and",
            sorts: [{name: "duration", direction: "descending", type: "date"}]
        })
        const education = educationResults.results;

        const experienceResults = await queryAllNotionDatabase({
            apiToken: process.env.NOTION_API_TOKEN || "",
            database_id: process.env.EXPERIENCES_DATABASE_ID || "",
            filters: [
                {name: "type",type: "multi_select", condition: "contains", value: "Full Time" },
                {name: "type",type: "multi_select", condition: "contains", value: "Internship"},
                {name: "type",type: "multi_select", condition: "contains", value: "Part Time" }
            ],
            filter_condition: "or",
            sorts: [{name: "duration", direction: "descending", type: "date"}]
        })
        const experience = experienceResults.results;
        const enrichedExperience = await Promise.all(
            experience.map(async (expItem:any) => {
                const projectsResult = await queryAllNotionDatabase({
                    apiToken: process.env.NOTION_API_TOKEN!,
                    database_id: process.env.PROJECTS_DATABASE_ID!,
                    filters: [
                        {name: "placeOfWork",type: "relation",condition: "contains", value: expItem.id},
                        {name: "Parent project", type: "relation", condition: "is_empty", value: true} // To fetch only main projects, not sub-projects
                    ],
                    filter_condition: "and",
                    sorts: [{ name: "created_time", type: "created_time", direction: "descending" }]
                });

                return {
                    ...expItem,
                    projects: projectsResult.results
                };
            })
        );
        const projectsResults = await queryAllNotionDatabase({
            apiToken: process.env.NOTION_API_TOKEN || "",
            database_id: process.env.PROJECTS_DATABASE_ID || "",
            filters: [
                {name: "Parent project", type: "relation", condition: "is_empty", value: true} // To fetch only main projects, not sub-projects
            ],
            filter_condition: "and",
            sorts: [{ name: "created_time", type: "created_time", direction: "descending" }]
        })
        const projects = projectsResults.results;
        const enrichedProjects = await Promise.all(
            projects.map(async (projectItem:projectProps)=> {
                const skillResult = await queryAllNotionDatabase({
                    apiToken: process.env.NOTION_API_TOKEN!,
                    database_id: process.env.SKILLS_DATABASE_ID!,
                    filters: [
                        {name: "projects", type: "relation", condition: "contains", value: projectItem.id}
                    ],
                    filter_condition: "and",
                    sorts: []
                });
                return ({
                    ...projectItem,
                    skills: skillResult.results
                })
            })
        )

        const skillsResults = await queryAllNotionDatabase({
            apiToken: process.env.NOTION_API_TOKEN || "",
            database_id: process.env.SKILLS_DATABASE_ID || "",
            filters: [
                {name: "projects", type: "relation", condition: "is_not_empty", value: true}
            ],
            filter_condition: "and",
            sorts: [
                {name: "totalProjects", direction: "descending", type: "number"},
            ]
        })
        const skills = skillsResults.results;

        return {about,
            profile, education , skills, projects: enrichedProjects, experience: enrichedExperience} as {about: aboutProps,
            profile: profileProps, education: educationProps[], skills: skillProps[], projects: projectProps[], experience: experienceProps[]};
    })
})