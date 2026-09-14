import React from "react";
const Skills = ({heading,groups}) => (
  <section id="skills" className="portfolio-section container">
    <h2>{heading}</h2>
    <p className="skills-intro">From training and evaluation to inference and the software that makes it useful.</p>
    <div className="skills-grid">{groups.map(group => (
      <article className="skill-area" key={group.name}>
        <h3>{group.name}</h3>
        <p className="skill-summary">{group.summary}</p>
        <ul className="skill-highlights">{group.featured.map(item => <li key={item}>{item}</li>)}</ul>
        <details className="skill-details">
          <summary>More tools and methods <span className="skill-count">({group.items.length})</span></summary>
          <ul className="skill-methods">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
        </details>
      </article>
    ))}</div>
  </section>
);
export default Skills;
