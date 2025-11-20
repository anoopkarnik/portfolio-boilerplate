import { experienceProps } from "../ts-types/experience";

export const experience:experienceProps[] = [
    {
        id: '1',
        durationDisplay: "May'23 - Mar'24",
        position: 'Senior Software Engineer',
        company: 'Google',
        type: 'Full Time',   
        projects: [
            {
            title: 'Support Bot Service',
            contribution: 'Individual Contribution',
            description: 'Created an Assistant using Assistant API for Company FAQs.',
            id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
            title: 'Support Assistance with Call Support',
            contribution: 'Individual Contribution',
            description: `Build a customer support service for the company using open source tools and
                frontend in our consumer app.`,
                            id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
            title: 'Data Definition Service',
            contribution: 'Individual Contribution',
            description: `Created a Data Definition Excel workbook, where a client can define data and based
                on selected options, the ETL workflow for that client gets created`,
                            id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
            title: 'Fhir Data Validation Service',
            contribution: 'Individual Contribution',
            description: `A Backend Validation Service which provides resource specific analytics on Fhir
                Data received from clients.`,
                            id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
            title: 'Enterprise Matching Patient Index Service',
            contribution: 'Individual Contribution',
            description: `Created a Springboot backend service which triggers when new patient enters from
                any enterprise, we run the matching backend service to find exact and probabilistic
                matches and take actions like adding new data or nudge the consumer to verify, etc.`,
                            id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
            title: 'Cloud Fhir Module',
            contribution: 'Part of 3-man Team',
            description: `Standardize Fhir Data using a defined config and migrate it from one Fhir server
                client to Azure Fhir client with references updating in a schedule.`,
                            id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
            title: 'Soft Related Records Services',
            contribution: 'Individual Contribution',
            description: `Every time a fhir resource is ingested or updated, we find all its related records and
                update nodes in Neo4j`,
                            id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []

            }
        ]
    },
    {
        id: '2',
        durationDisplay: "June'21 - May'23",
        position: 'Software Engineer II',
        company: 'Mpowered Health',
        type: 'Full Time',
        projects: [
            {
                title: 'Data Ingestion Pipelines',
                contribution: 'Individual Contribution',
                description: `Members’ data files with the amount available to them which is weekly taken
                    from 6 insurance companies and ingestion into our Postgres database with
                    success or error notification mails sent to our clients.
                    Based on Client Definitions, 100s of CSV files with healthcare data are first
                    standardized, mapped to fhir fields, converted to fhir json using python fhir
                    client, and ingested to fhir framework using weekly scheduled Airflow Workflows.
                    Created a data ingestion pipeline for ingestion of pricelist files( hundreds of
                    GBS of deeply nested data). The data goes throught ETL and stored in elastic
                    search where it has mapped to provide various levels of aggregations.`,
                                id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
                title: 'Workflow and Rules Engine Service',
                contribution: 'Individual Contribution',
                description: `Created multiple consent workflows using the Camunda workflow engine with a
                    complex combination of user steps (variables are inputted) and backend
                    processes to get consent for data sharing between multiple users.
                    Created a Rules Server in Kie where based on around 1000 rules defined by BAs
                    in a spreadsheet, we use the Camunda workflow engine to find the which of the
                    conditions and their related resources are sensitive (pregnancy, sexual diseases,
                    etc related) and tag them.`,
                                id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            }
        ]
    },
    {
        id: '3',
        durationDisplay: "Sept'15 - June'17",
        position: "Analyst",
        company: "Latent View Analytics",
        type: "Full Time",
        projects:[
            {
                title: 'CRM (Paypal Singapore)',
                contribution: 'Part of 3 person team',
                description: `Structure Marketing Campaigns for the
                    next year based on analysis of campaigns from the previous years
                    and provide insights using tableau dashboards.`,
                                id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
                title: 'CRM (Paypal Chennai)',
                contribution: 'Part of 5 person team',
                description: `Stratiﬁed Random Sampling (Test/Control,
                    Test/Universal Control) and high value merchant model using
                    libraries like sklearn, pandas, numpy, xgboost in python, campaign
                    performance tracking using excel, VBA and several tableau
                    dashboards.`,
                                id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
                title: 'Recommender System Pitch',
                contribution: 'Individual Contribution',
                description: `Single handedly helped in securing a
                    prospective food delivery client by making a sample recommender
                    system using ALS algorithm in pyspark and used ﬂask library for
                    backend and frontend development.`,
                                id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
                title: 'Data Premiere League Competition', 
                contribution: 'Individual Contribution',
                description: `Created a web crawler to fetch all of
                    google play data for organizing a competition for a well-recognized
                    analytics competition using scrapy framework in python.`,
                                id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
                title: 'Sales Prospect Converstion (Daimler)',
                contribution: 'Individual Contribution',
                description: `Created a tool in excel
                    using VBA which arranges the prospects and old customers based on
                    their chances to take a loan for a big automobile client. Used Logistic
                    Regression of previous prospects to ﬁnd the top prospects to call for
                    the sales team.`,
                                id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            }
        ]
    },
    {
        id: '4',
        durationDisplay: "Aug'18 - Dec'22",
        position: 'Graduate Research Assistant',
        company: 'IIIT Hyderabad',
        type: 'Internship',
        projects: [
            {
                title: 'Air Surveillance in Indian Airspace (Bharat Electronics Limited) ',
                contribution: 'Individual Contribution',
                description: `Designed an ensemble learning approach with a neural network and
                    catboost algorithm for each kind of error detected to predict if a
                    particular data point tracked shows this type of error or not which
                    increased tracking accuracy. and is currently in testing in the Air Force in
                    India bases before implementation. We have designed a frontend
                    Simulation application in tkinter Python for air surveillance.`,
                                id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            }
        ]
    },
    {
        id: '5',
        durationDisplay: "Oct'20 - Mar'21",
        position: 'Machine Learning Intern',
        company: 'Nelly',
        type: 'Internship',
        projects: [
            {
                title: 'Emotional Model',
                contribution: 'Part of 3 person team',
                description: `Worked on Sentiment Analysis Model to
                    determine which emotion (anger, peace, sad, happy, etc) a person is
                    feeling based on each of his chat message and a full session.`,
                                id: '1',
            type: ['Full Stack'],
            skills: [],
            demoImages: []
            },
            {
                title: 'Information Retrieval Extraction Model',

                contribution: 'Part of 3 person team',
                description: `Worked on getting the
                    user proﬁle information based on the chat messages in the form of
                    triplets by implementing state of the art algorithms.`,
                id: '1',
                type: ['Full Stack'],
                skills: [],
                demoImages: []
            },
            {
                title: 'Chatbot',
                contribution: 'Part of 3 person team',
                description: `Worked on giving a persona to our chatbot
                    and storing messages of every session and using these messages in a
                    new session so that our chatbot nelly doesn't lose context and
                    worked with CTO on deploying web app in AWS Lightsail.`,
                id: '1234',
                type: ['Full Stack'],
                skills: [],
                demoImages: []
            }
        ]
    }
]