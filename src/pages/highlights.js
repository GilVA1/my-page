
import bchImage from '../img/bch.jpeg';
import hackHarvardImage from '../img/hack_harvard.png';
import hackMTYBanorteImage from '../img/hackMTY_banorte.png';

export default function Highlights(){
    const highlight_moments = [
        {
          title: "Researcher at Boston Children's Hospital with Harvard Medical School",
          description: "A full-time student internship, where I work with Brain MRI Image analysis using Python and medical imaging libraries like Scipy, Numpy, Nibabel, and more, working on a Linux OS.",
          image: bchImage,
          dimensions:[450,250]
        },
        {
          title: "Hack Harvard 2024",
          description: "I have been accepted to the upcoming hackathon from Harvard University in october 2024.",
          image: hackHarvardImage,
          dimensions:[250,350]
        },
        {
          title: "Banorte Hackathon Prize",
          description: "With the help of my team, we managed to get the 3rd place prize in the Banorte challenge of HackMTY 2022.",
          image: hackMTYBanorteImage,
          dimensions:[350,250] 
        }
      ];

     

        const render_highlights = highlight_moments.map((highlight_item, index) => (
            <li key={index} style={{ padding: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <div style={{ flex: 1 }}> 
                <h2>{highlight_item.title}</h2>
                <h5>{highlight_item.description}</h5>
              </div>
              <img
                src={highlight_item.image}
                alt={highlight_item.title}
                style={{
                  width: `${highlight_item.dimensions[0]}px`,
                  height: `${highlight_item.dimensions[1]}px`,
                  marginLeft: "20px" ,
                  marginRight: "55px"
                }}
              />
            </li>
          ));
          
    
    return(

        <div>

            <div className="header">

                <h1>Some of my most memorable experiences in my career so far:</h1>

            </div> 

            <ul>{render_highlights}</ul>
            
        </div>

    )
};