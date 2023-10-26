import React from "react"

function Skills(){
    const programming_languages=["Python","C++","Javascript","Typescript","Clojure"]
    const render=programming_languages.map((language,index)=>(<li key={index}>{language}</li>))
    return(
        <div>
        <h1 className="header">SKILLS I HAVE:</h1>

        <h2>Programming languages I know:</h2>

        <ul>{render}</ul>

        </div>

    )

}
export default Skills