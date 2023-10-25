import React from "react"

function Skills(){
    const programming_languages=["Python","C++","Javascript","Typescript","Clojure"]
    const render=programming_languages.map((language,index)=>(<h4 key={index}>{language}</h4>))
    return(
        <div>
        <h1 class="header">SKILLS I HAVE:</h1>

        <h2>Programming languages I know:</h2>

        <div>{render}</div>

        </div>

    )

}
export default Skills