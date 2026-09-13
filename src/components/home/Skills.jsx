import React from "react";
const Skills = ({heading,groups}) => (
  <section id="skills" className="portfolio-section container"><h2>{heading}</h2>
    <div className="skills-grid">{groups.map(group => <div key={group.name}><h3>{group.name}</h3><div className="technology-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
  </section>
);
export default Skills;
