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
  <h4>Hello, my name is {props.name}, and I am studying {props.studyField}</h4>
  
    <br></br>
    
  <h4> 

    I have always had a fascination towards mathematics and logic, always challenging myself with advanced
    math classes since elementary school, and I also like working with computers to produce a variety of tools
    and projects that helps solve a particular problem, from performing multiple mathematical operations, to building websites and webapps.
  
    
  </h4>
  <br></br>
  <h4>  
    I have had some work experience in web development with a company called Clever Cloud MX in the creation and maintenance of web applications, and I have also worked with a civil association called Geostats in the 
    analysis of data and data visualization of different problems in the city using the React framework, I have also worked in many diverse programming projects at school in a format similar to
    that of a work environment, having a client company give us the requirements of a product that meets their needs, and work alongside a team to build software over a specified time window.
    Applying concepts of the newest technology trends.
  </h4>
  
  </div>

  </div> 
  )
}