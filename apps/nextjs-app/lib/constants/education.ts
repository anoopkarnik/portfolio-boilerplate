import { educationProps } from "@repo/ts-types/profile/education";

export const education:educationProps[] = [
    {
       year: "2011-15",
       degree: 'B.E. (Hons) in Mechanical Engineering',
       institution: 'BITS Pilani, Hyderabad Campus',   
       cgpa: '7.28',
       courses: ["Computer Programming", "Probability & Statistics", "Human Resource Development", 
           "Principles of Economics", "Project Appraisal", "Engineering Optimization",
            "Fundamentals of Financial & Account", "Functions & Working of Stock Exchange",
             "Security Analysis & Portfolio Management","Journalism"]
    },
   {
       year: "2018-22",
       degree: 'M.S. in Computer Science (AI Specialization)',
       institution: 'IIIT Hyderabad',   
       cgpa: '8.0',
       courses: ["Statistical Methods in AI", "Topics in Applied Optimization", "Digital Image Processing",
           "Computer Vision", "Deep Learning - Theory & Practise", "Social Computing"
       ]
   }  
]