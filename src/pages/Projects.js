export default function Projects(){
    const projects=[

        "Banorte rewards program (Hackathon MTY 2022): The idea was given to create a gamified rewards program to promote the usage of the Banorte app , C++ was used to create the logic.",

        "Teamlinks: A web application built using React, Node.js, Bootstrap and Tailwind CSS, to manage employee positions within Nagarro.",
        
        "Q-learning simulation: A multiagent simulation using Python and Unity, about John Deere wheat recollection in a field. Python was used to process the movement logic of all vehicles and Q-learning, while Unity was used to create the visual representation using models of the simulation in real time.",

        "Multi-threading synthax highlighter: Creating a program using Clojure and multithreading to parse a text file and create an html file by itself that acts as a pseudo IDE (It highlights different tokens with different colors, and computes simple operations like sums,multiplications, exponents (and their inverse functions))."

    ]
    const word_lists = projects.map((project) => project.split(":") )
    const render_projects=word_lists.map((word_list,index)=>(
    <li key={index}>
        <h2>{word_list[0]}:    </h2>
        <h5>{word_list[1]}</h5>
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