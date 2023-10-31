import React from "react";
import "../style.css";


//Fast export
export default function AboutMe(props) {
  return(
   <div>




  <div className="header">
  <h1>About myself...</h1>
  </div>


  <div id="about_me_text">
  <h4>Hello, my name is {props.name}.</h4>
  <h4>I study {props.studyField}.</h4>

  <h4> 
    I have always had a fascination towards mathematics and logic, always challenging myself with advanced
    math classes since elementary school, and I also like working with computers to produce a variety of tools
    and projects that helps solve a particular problem, from performing multiple mathematical operations, to building websites and webapps.
  </h4>
  
  </div>
  
  

  </div> 
  )
}