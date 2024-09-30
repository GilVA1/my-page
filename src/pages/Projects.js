export default function Projects(){
    const projects=[

        "Banorte rewards program (Hackathon MTY 2022): I gave the idea to create a gamified rewards program to promote the usage of the Banorte app , I used C++ to create the logic and my teammates helped with the design posters for the idea pitch.",

        "Teamlinks: A web application built using React, Node.js, Bootstrap and Tailwind CSS, to manage employee positions within Nagarro and dev team distribution for different projects.",
        
        "Q-learning simulation: A multiagent simulation using Python and Unity, about John Deere wheat recollection in a field. Python was used to process the movement logic of all vehicles and Q-learning, while Unity was used to create the visual representation using models of the simulation in real time. I helped with translating JSON data to movements of Unity models to refelct the correct path",

        "Multi-threading synthax highlighter: Creating a program using Clojure and multithreading to parse a text file and create an html file by itself that acts as a pseudo IDE (It highlights different tokens with different colors, and computes simple operations like sums,multiplications, exponents (and their inverse functions)).",

        "Nuevo amanecer: Android application for the continuous learning of children with learning disabilities, involving image sorting, number games, and a database to store user data. ",

        "NEORA: A chatbot application where a public LLM API was used to train a chatbot capable of answering questions made about the company, I specifically helped with the back end services (Express.js) and the database integration (MongoDB)"

    ]
    const project_split = projects.map((project) => project.split(":") )
    const render_projects=project_split.map((project_split,index)=>(
    <li key={index}>
        <h2>{project_split[0]}:    </h2>
        <h5>{project_split[1]}</h5>
    </li>)
    
    
    )

    return(
        <div>
        
            <div className="header">

                <h1>Projects I have worked on:</h1>

            </div> 

            <ul>{render_projects}</ul>

        </div>


    );
};