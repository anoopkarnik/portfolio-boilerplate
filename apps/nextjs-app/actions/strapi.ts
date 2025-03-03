"use server"

import { aboutProps } from '@repo/ts-types/profile/about';
import axios from 'axios';

export const getPortfolioDetails = async () => {
    try{
        let baseUrl = process.env.STRAPI_URL || "https://strapi.bayesian-labs.com/api/portfolio-boilerplate?";
        let populateAbout= "populate[about][populate][0]=whatIAmWorkingOn";
        let populateProfile = "populate[profile]=true";
        let populateEducation = "populate[education]=true";
        let populateSkills = "populate[skills]=true";
        let populateProjects = "populate[projects][populate][0]=openSourceDetails&populate[projects][populate][1]=websiteDetails&populate[projects][populate][2]=contentDetails&populate[projects][populate][3]=notionDetails";
        let populateExperience = "populate[experience][populate][projects][populate][techStack]=true";
        const url = `${baseUrl}${populateAbout}&${populateProfile}&${populateEducation}&${populateSkills}&${populateProjects}&${populateExperience}`;
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url,
            headers: { 
              'Authorization': "Bearer " +process.env.STRAPI_TOKEN || ""
            }
          };
          const response  = await axios.request(config);
          const result = await response.data;
          return result.data;
    }
    catch(e){
        console.log(e);
        return null;
    }

}     


