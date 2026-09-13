import React from "react";
const ExperienceCard = ({data}) => (
  <article className="experience-entry">
    <div><div className={`organization-logo ${data.company === "Apnimed" ? "logo-dark" : ""}`}><img src={data.logo} alt={`${data.company} logo`} /></div><p className="entry-date">{data.date}</p><p className="muted">{data.location}</p></div>
    <div><h3>{data.company}</h3><p className="role">{data.role}</p><ul>{data.description.map(point => <li key={point}>{point}</li>)}</ul></div>
  </article>
);
export default ExperienceCard;
