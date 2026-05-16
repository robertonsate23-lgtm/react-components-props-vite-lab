import React from "react";

function About ({image, about}) {
    return (
        <div className="about">
            <img src={image} alt="blog logo" className="about-image"/>
            <p>{about}</p>
        </div>
    )
}
  export default About; 
  //renders a div with the class "about" that contains an image and a paragraph. 