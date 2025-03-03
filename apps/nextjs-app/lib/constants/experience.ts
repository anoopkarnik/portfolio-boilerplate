import { experienceProps } from "@repo/ts-types/profile/experience";

export const experience:experienceProps[] = [
    {
        year: "May'23 - Mar'24",
        position: 'Senior Software Engineer',
        company: 'Google',
        type: 'Full Time',   
        projects: [
            {
            title: 'Support Bot Service',
            techStack: [
                {title:'Python'}, {title:'Flask'}, {title:'ReactJs'}, {title:'Spreadsheet'}, 
                {title:'OpenAI'}
            ],
            contribution: 'Individual Contribution',
            description: 'Created an Assistant using Assistant API for Company FAQs.'
            },
            {
            title: 'Support Assistance with Call Support',
            techStack: [{title:'Rocket.Chat'}, {title:'ReactJs'}, {title:'Jitsi'}],
            contribution: 'Individual Contribution',
            description: `Build a customer support service for the company using open source tools and
                frontend in our consumer app.`
            },
            {
            title: 'Data Definition Service',
            techStack: [{title:'Advanced Excel'}, {title:'Google Spreadhseet'}, {title:'VBA'},
                {title: 'Google App Script'}, {title:'Airflow'}],
            contribution: 'Individual Contribution',
            description: `Created a Data Definition Excel workbook, where a client can define data and based
                on selected options, the ETL workflow for that client gets created`
            },
            {
            title: 'Fhir Data Validation Service',
            techStack: [{title:'Python'}, {title:'Flask'}, {title:'Fhir'},{title:'Kafka'},
                {title:'Github actions'},{title:'Google Spreadsheet'}],
            contribution: 'Individual Contribution',
            description: `A Backend Validation Service which provides resource specific analytics on Fhir
                Data received from clients.`
            },
            {
            title: 'Enterprise Matching Patient Index Service',
            techStack: [{title:'Java'}, {title:'Springboot'}],
            contribution: 'Individual Contribution',
            description: `Created a Springboot backend service which triggers when new patient enters from
                any enterprise, we run the matching backend service to find exact and probabilistic
                matches and take actions like adding new data or nudge the consumer to verify, etc.`
            },
            {
            title: 'Cloud Fhir Module',
            techStack: [{title:'Java'}, {title:'Springboot'}, {title:'Kafka'}],
            contribution: 'Part of 3-man Team',
            description: `Standardize Fhir Data using a defined config and migrate it from one Fhir server
                client to Azure Fhir client with references updating in a schedule.`
            },
            {
            title: 'Soft Related Records Services',
            techStack: [{title:'Java'}, {title:'Springboot'}, {title:'Kafka'},{title: 'Python'},
                {title: 'Flask'}, {title:'Neo4j'}],
            contribution: 'Individual Contribution',
            description: `Every time a fhir resource is ingested or updated, we find all its related records and
                update nodes in Neo4j`

            }
        ]
    },
    {
        year: "June'21 - May'23",
        position: 'Software Engineer II',
        company: 'Mpowered Health',
        type: 'Full Time',
        projects: [
            {
                title: 'Data Ingestion Pipelines',
                techStack: [{title:'Python'}, {title:'SQL'}, {title:'Elastic Search'}, 
                    {title:'Airflow'}, {title:'RDS'}, {title:'S3'}, {title:'Ec2'}],
                contribution: 'Individual Contribution',
                description: `Members’ data files with the amount available to them which is weekly taken
                    from 6 insurance companies and ingestion into our Postgres database with
                    success or error notification mails sent to our clients.
                    Based on Client Definitions, 100s of CSV files with healthcare data are first
                    standardized, mapped to fhir fields, converted to fhir json using python fhir
                    client, and ingested to fhir framework using weekly scheduled Airflow Workflows.
                    Created a data ingestion pipeline for ingestion of pricelist files( hundreds of
                    GBS of deeply nested data). The data goes throught ETL and stored in elastic
                    search where it has mapped to provide various levels of aggregations.`
            },
            {
                title: 'Workflow and Rules Engine Service',
                techStack: [{title:'Java'}, {title:'Springboot'}, {title:'SES'}, {title:'Rds'},
                    {title: 'Camunda Workflow Engine'}, {title:'Kie Rules Server'}],
                contribution: 'Individual Contribution',
                description: `Created multiple consent workflows using the Camunda workflow engine with a
                    complex combination of user steps (variables are inputted) and backend
                    processes to get consent for data sharing between multiple users.
                    Created a Rules Server in Kie where based on around 1000 rules defined by BAs
                    in a spreadsheet, we use the Camunda workflow engine to find the which of the
                    conditions and their related resources are sensitive (pregnancy, sexual diseases,
                    etc related) and tag them.`
            }
        ]
    },
    {
        year: "Sept'15 - June'17",
        position: "Analyst",
        company: "Latent View Analytics",
        type: "Full Time",
        projects:[
            {
                title: 'CRM (Paypal Singapore)',
                techStack: [{title:'SQL'}, {title:'Tableau'}, {title:'Advanced Excel'}],
                contribution: 'Part of 3 person team',
                description: `Structure Marketing Campaigns for the
                    next year based on analysis of campaigns from the previous years
                    and provide insights using tableau dashboards.`
            },
            {
                title: 'CRM (Paypal Chennai)',
                techStack: [{title:'SQL'}, {title:'Tableau'}, {title:'Advanced Excel'}, 
                    {title:'Python'},{title:'VBA'}],
                contribution: 'Part of 5 person team',
                description: `Stratiﬁed Random Sampling (Test/Control,
                    Test/Universal Control) and high value merchant model using
                    libraries like sklearn, pandas, numpy, xgboost in python, campaign
                    performance tracking using excel, VBA and several tableau
                    dashboards.`
            },
            {
                title: 'Recommender System Pitch',
                techStack: [{title:'Python'},{title:'Pyspark'},{title:'Flask'}],
                contribution: 'Individual Contribution',
                description: `Single handedly helped in securing a
                    prospective food delivery client by making a sample recommender
                    system using ALS algorithm in pyspark and used ﬂask library for
                    backend and frontend development.`
            },
            {
                title: 'Data Premiere League Competition', 
                techStack: [{title:'Python'},{title:'Scrapy'}],
                contribution: 'Individual Contribution',
                description: `Created a web crawler to fetch all of
                    google play data for organizing a competition for a well-recognized
                    analytics competition using scrapy framework in python.`
            },
            {
                title: 'Sales Prospect Converstion (Daimler)',
                techStack: [{title:'Advanced Excel'},{title: 'VBA'}],
                contribution: 'Individual Contribution',
                description: `Created a tool in excel
                    using VBA which arranges the prospects and old customers based on
                    their chances to take a loan for a big automobile client. Used Logistic
                    Regression of previous prospects to ﬁnd the top prospects to call for
                    the sales team.`
            }
        ]
    },
    {
        year: "Aug'18 - Dec'22",
        position: 'Graduate Research Assistant',
        company: 'IIIT Hyderabad',
        type: 'Internship',
        projects: [
            {
                title: 'Air Surveillance in Indian Airspace (Bharat Electronics Limited) ',
                techStack: [{title:'Python'},{title: 'Flask'},{title:'Tkinter'},
                    {title:'Socket.io'}],
                contribution: 'Individual Contribution',
                description: `Designed an ensemble learning approach with a neural network and
                    catboost algorithm for each kind of error detected to predict if a
                    particular data point tracked shows this type of error or not which
                    increased tracking accuracy. and is currently in testing in the Air Force in
                    India bases before implementation. We have designed a frontend
                    Simulation application in tkinter Python for air surveillance.`
            }
        ]
    },
    {
        year: "Oct'20 - Mar'21",
        position: 'Machine Learning Intern',
        company: 'Nelly',
        type: 'Internship',
        projects: [
            {
                title: 'Emotional Model',
                techStack: [{title:'hugging face'}, {title:'transformers'}, {title:'python'}],
                contribution: 'Part of 3 person team',
                description: `Worked on Sentiment Analysis Model to
                    determine which emotion (anger, peace, sad, happy, etc) a person is
                    feeling based on each of his chat message and a full session.`
            },
            {
                title: 'Information Retrieval Extraction Model',
                techStack: [{title:'hugging face'}, {title:'transformers'}, {title:'python'}],
                contribution: 'Part of 3 person team',
                description: `Worked on getting the
                    user proﬁle information based on the chat messages in the form of
                    triplets by implementing state of the art algorithms.`
            },
            {
                title: 'Chatbot',
                techStack: [{title:'aws lightsail'}, {title:'flask'}, {title:'python'}],
                contribution: 'Part of 3 person team',
                description: `Worked on giving a persona to our chatbot
                    and storing messages of every session and using these messages in a
                    new session so that our chatbot nelly doesn't lose context and
                    worked with CTO on deploying web app in AWS Lightsail.`
            }
        ]
    }
]