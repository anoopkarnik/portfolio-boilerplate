import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPropsAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_props_abouts';
  info: {
    description: '';
    displayName: 'about';
  };
  attributes: {
    aboutMe: Schema.Attribute.Text;
    myJourney: Schema.Attribute.Text;
    whatIAmWorkingOn: Schema.Attribute.Component<
      'what-i-am-working-on-props.what-i-am-working-on',
      true
    >;
  };
}

export interface ContentDetailsPropsContentDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_content_details_props_content_details';
  info: {
    displayName: 'contentDetails';
  };
  attributes: {
    blogLink: Schema.Attribute.String;
    videoLink: Schema.Attribute.String;
  };
}

export interface EducationPropsEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_props_educations';
  info: {
    displayName: 'education';
  };
  attributes: {
    cgpa: Schema.Attribute.String;
    courses: Schema.Attribute.Text;
    degree: Schema.Attribute.String;
    institution: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface ExperiencePropsExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_props_experiences';
  info: {
    displayName: 'experience';
  };
  attributes: {
    company: Schema.Attribute.String;
    position: Schema.Attribute.String;
    projects: Schema.Attribute.Component<'project-props.project', true>;
    type: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface NotionDetailsPropsNotionDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_notion_details_props_notion_details';
  info: {
    displayName: 'notionDetails';
  };
  attributes: {
    downloads: Schema.Attribute.String;
    rating: Schema.Attribute.String;
    templateLink: Schema.Attribute.String;
    views: Schema.Attribute.String;
  };
}

export interface OpenSourceDetailsPropsOpenSourceDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_open_source_details_props_open_source_details';
  info: {
    displayName: 'openSourceDetails';
  };
  attributes: {
    link: Schema.Attribute.String;
    npmPackageLink: Schema.Attribute.String;
    stars: Schema.Attribute.String;
    weeklyClones: Schema.Attribute.String;
    weeklyDownloads: Schema.Attribute.String;
  };
}

export interface ProfilePropsProfile extends Struct.ComponentSchema {
  collectionName: 'components_profile_props_profiles';
  info: {
    displayName: 'profile';
  };
  attributes: {
    details: Schema.Attribute.Text;
    discordLink: Schema.Attribute.String;
    email: Schema.Attribute.String;
    emailComposeLink: Schema.Attribute.String;
    githubLink: Schema.Attribute.String;
    linkedinLink: Schema.Attribute.String;
    location: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    logoMedia: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    resume: Schema.Attribute.String;
    title: Schema.Attribute.String;
    twitterLink: Schema.Attribute.String;
    youtubeLink: Schema.Attribute.String;
  };
}

export interface ProjectPropsProject extends Struct.ComponentSchema {
  collectionName: 'components_project_props_projects';
  info: {
    description: '';
    displayName: 'project';
  };
  attributes: {
    contentDetails: Schema.Attribute.Component<
      'content-details-props.content-details',
      false
    >;
    contribution: Schema.Attribute.Text;
    demoImage: Schema.Attribute.String;
    demoImageMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    featured: Schema.Attribute.Boolean;
    notionDetails: Schema.Attribute.Component<
      'notion-details-props.notion-details',
      false
    >;
    openSourceDetails: Schema.Attribute.Component<
      'open-source-details-props.open-source-details',
      false
    >;
    techStack: Schema.Attribute.Component<'tech-stack-props.tech-stack', true>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    websiteDetails: Schema.Attribute.Component<
      'website-details-props.website-details',
      false
    >;
  };
}

export interface TechStackPropsTechStack extends Struct.ComponentSchema {
  collectionName: 'components_tech_stack_props_tech_stacks';
  info: {
    displayName: 'techStack';
  };
  attributes: {
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface WebsiteDetailsPropsWebsiteDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_website_details_props_website_details';
  info: {
    displayName: 'websiteDetails';
  };
  attributes: {
    websiteDetails: Schema.Attribute.String;
    websiteUsers: Schema.Attribute.String;
    websiteViews: Schema.Attribute.String;
  };
}

export interface WhatIAmWorkingOnPropsWhatIAmWorkingOn
  extends Struct.ComponentSchema {
  collectionName: 'components_what_i_am_working_on_props_what_i_am_working_ons';
  info: {
    displayName: 'whatIAmWorkingOn';
  };
  attributes: {
    description: Schema.Attribute.Text;
    imgSrc: Schema.Attribute.String;
    imgSrcMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-props.about': AboutPropsAbout;
      'content-details-props.content-details': ContentDetailsPropsContentDetails;
      'education-props.education': EducationPropsEducation;
      'experience-props.experience': ExperiencePropsExperience;
      'notion-details-props.notion-details': NotionDetailsPropsNotionDetails;
      'open-source-details-props.open-source-details': OpenSourceDetailsPropsOpenSourceDetails;
      'profile-props.profile': ProfilePropsProfile;
      'project-props.project': ProjectPropsProject;
      'tech-stack-props.tech-stack': TechStackPropsTechStack;
      'website-details-props.website-details': WebsiteDetailsPropsWebsiteDetails;
      'what-i-am-working-on-props.what-i-am-working-on': WhatIAmWorkingOnPropsWhatIAmWorkingOn;
    }
  }
}
