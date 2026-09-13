import React from "react";
import ExperienceCard from "./ExperienceCard";
const Experience = ({experiences}) => (
  <section id="experiences" className="portfolio-section container">
    <p className="eyebrow">Research to production</p><h2>{experiences.heading}</h2>
    <div className="experience-list">{experiences.data.map(data => <ExperienceCard key={data.company} data={data} />)}</div>
  </section>
);
export default Experience;
