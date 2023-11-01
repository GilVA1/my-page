import React from "react"

function Skills(){
    const programming_languages=["Programming languages: Python,C++,Javascript,Typescript,Clojure","Git version control and Github","Frameworks/Libraries: React,Jetpack Compose ,Arduino"]
    const render=programming_languages.map((language,index)=>(<li key={index}>{language}</li>))

    const tech_skills=[
        "Creating websites and web applications using React",
        "Creating android apps using Android studio and libraries like Jetpack Compose",
        "Creating efficient algorythms to solve data structure problems",
        "Creatign Object oriented programs to simulate system logic",
        "Mathematical and logical reasoning to solve problems and creating solutions in the best way possible"
        
        
]
    const render_tech=tech_skills.map((skill,index)=>(<li key={index}>{skill}</li>))

    
    const certifications=["AP Calculus BC score of 5","Coursera:Python data structures","Coursera:Programming for everybody"]
    const render_certifications=certifications.map((certificate,index)=>(<li key={index}>{certificate}</li>))
    
    
    return(
        <div>
        <h1 className="header">Skills I have developed so far:</h1>

        <h2>Programming tools I know:</h2>
        <ul>{render}</ul>

        <h2>Technical skills I have:</h2>
        <ul>{render_tech}</ul>

        <h2>Certifications</h2>
        <ul>{render_certifications}</ul>

        </div>
    )

}
export default Skills