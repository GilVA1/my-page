import React from "react";
import "../style.css";


//Fast export
export default function AboutMe(props) {
  return(
   <div>
  <div class="header">
  <h1>Hello, my name is {props.name}</h1>
  <h2>I study {props.studyField}</h2>
  
  </div>
  
  

  </div> 
  )
}