import React from "react";
const AboutMe = ({heading,message,link,imgSize,resume}) => (
  <section id="aboutme" className="portfolio-section about-section container">
    <div className="about-copy"><h2>{heading}</h2>{(Array.isArray(message) ? message : [message]).map(paragraph => <p className="section-intro" key={paragraph}>{paragraph}</p>)}
      <a className="text-link" href={resume} target="_blank" rel="noopener noreferrer">View my resume ↗</a>
    </div>
    <img className="profile-image" src={link} alt="Suraj Patel Muthe Gowda" width={imgSize} height={imgSize} />
  </section>
);
export default AboutMe;
