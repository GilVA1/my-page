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
    <h1>Hello, my name is {props.name}, and I am studying {props.studyField}</h1>
    
      <br></br>
      
      <h5> 

        I have always had a fascination towards mathematics and logic, always challenging myself with advanced
        math classes since elementary school, and I also like working with computers to produce a variety of tools
        and projects that helps solve a particular problem, from performing multiple mathematical operations, to building websites and webapps.
      
        My main goal as a Software engineer is to be able to sit down on a comfortable and stylish lounge of a tech company's offices, and be able to contribute to software products used world wide, all while sipping on a cup of cold brew coffee.
      </h5>

    <br></br>
      
    <h5> 
    Please feel free to navigate the different tabs in this website that show my software engineering journey so far, also check my README.md if you are interested in a more extensive summary of who I am and what my career goals are (check it out on: https://github.com/GilVA1/my_page).
  
    </h5>

    <h5>
      
    </h5>
    

    </div>

  </div> 
  )
}