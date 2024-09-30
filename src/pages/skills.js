import React from "react"

function Skills(){
    const programming_tools=["Programming languages: Python,C++,Javascript/Typescript,Clojure,Kotlin,php","Git version control and Github","Frameworks/Libraries: React,Next.js, Express,js, Android Studio, Jetpack Compose ,Arduino"
        ,"Databases: MongoDB Atlas, MySQL , PostgreSQL "]
    const render=programming_tools.map((language,index)=>(<li key={index}>{language}</li>))

    const tech_skills=[
        "Building websites and web applications using React , Next.js or Vue.js",
        "programming back-end services that help maintain databases (Express.js, MongoDB, MySQL)",
        "developing android apps using Android studio and libraries like Jetpack Compose",
        "Creating efficient algorithms to solve data structure problems",
        "Implement Object oriented programs to simulate business logic",
        "Mathematical and logical reasoning to solve problems and creating solutions in the best way possible",
        "Research of brain MRI data using Python libraries for medical image processing, like Numpy, Nibabel and other software tools like Freeview"
]
    const render_tech=tech_skills.map((skill,index)=>(<li key={index}>{skill}</li>))

    
    const certifications=["AP Calculus BC score of 5","Coursera:Python data structures","Coursera:Programming for everybody"]
    const render_certifications=certifications.map((certificate,index)=>(<li key={index}>{certificate}</li>))
    
    const awards=["3rd place in HackMTY 2022 Banorte challenge", "3rd place in ICPC competition simulation in the extracurricular data structure course"]
    const render_awards=awards.map((award,index)=> (<li key={index}>{award}</li>)  )

    return(
        <div>
        <h1 className="header">Skills I have developed so far:</h1>

        <h2>Programming tools I know:</h2>
        <ul>{render}</ul>

        <h2>Technical skills I have:</h2>
        <ul>{render_tech}</ul>

        <h2>Certifications</h2>
        <ul>{render_certifications}</ul>

        <h2>Awards</h2>
        <ul>{render_awards}</ul>


        </div>
    )

}
export default Skills