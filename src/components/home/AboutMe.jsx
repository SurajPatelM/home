import React from "react";
const AboutMe = ({heading,message,link,imgSize,resume}) => (
  <section id="aboutme" className="portfolio-section about-section container">
    <div className="about-copy"><p className="eyebrow">A little background</p><h2>{heading}</h2><p className="section-intro">{message}</p>
      <a className="text-link" href={resume} target="_blank" rel="noopener noreferrer">View my resume ↗</a>
    </div>
    <img className="profile-image" src={link} alt="Suraj Patel Muthe Gowda" width={imgSize} height={imgSize} />
  </section>
);
export default AboutMe;
