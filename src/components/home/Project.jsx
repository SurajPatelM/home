import React from "react";
const Project = ({heading,projectsData}) => (
  <section id="projects" className="portfolio-section project-section">
    <div className="container"><div className="section-heading"><div><p className="eyebrow">Things I’ve built</p><h2>{heading}</h2></div><a className="text-link" href="https://github.com/SurajPatelM?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories ↗</a></div>
    <div className="project-grid">{projectsData.map((project,index) => (
      <article className="project-card" key={project.name}>
        <div className="project-meta"><span>{project.category}</span><span aria-hidden="true">{String(index+1).padStart(2,'0')}</span></div>
        <h3>{project.name}</h3><p>{project.summary}</p>
        <ul>{project.description.map(point => <li key={point}>{point}</li>)}</ul>
        <div className="technology-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
        <a className="text-link project-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}>View project ↗</a>
      </article>
    ))}</div></div>
  </section>
);
export default Project;
