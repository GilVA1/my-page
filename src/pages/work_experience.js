export default function WorkExperience(){
    const jobs=[

        "BOSTON CHILDREN’S HOSPITAL / HARVARD MEDICAL SCHOOL RESEARCH INTERN (July 2024 – January 2025 (expected)): • Full-time intern at Dr. Kiho’s lab, helping develop Python scripts for machine learning algorithms for processing and analyzing brain MRI scans in medical file formats. \n •	Increased performance of processes using multi-threading, reducing image alignment wait times by 80% \n •	Conducted research on open-source projects to improve the data processing pipeline.",

        "CLEVER CLOUD MX INTERNSHIP (December 2023 – June 2024): •	Half-time intern as a full-stack developer, using Vue.js for the front end, PHP for the back end, and MySQL for the database. •	Enhanced skills in agile development, completing multiple user stories for daily catch-up meetings, and writing proper documentation and updates on project tracking services like Jira.",

        "GEO STATS (January 2024 – June 2024): •	Social service about being part of a dev team to create a web application using Next.js, Typescript, and PostgreSQL. •	I not only developed app functions but also performed unitary testing of said functions and managed to adhere to strict code standards like linting, full code coverage testing, and layered deployment. ",

        

    ]

const render_jobs = jobs.map((job, index) => {
        
        const [jobTitle, jobDescription] = job.split(":");
        // Split the job description into bullet points
        const bulletPoints = jobDescription.split("•").map(point => point.trim()).filter(point => point !== "");
    
        return (
            <li key={index}>
                <h2>{jobTitle}:</h2>
                <ul>
                    {bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                    ))}
                </ul>
            </li>
        );
    });



    return(
        <div>
        
            <div className="header">

                <h1>My current Internships / social service experience / work experience:</h1>

            </div> 

            <ul>{render_jobs}</ul>

        </div>


    );
};