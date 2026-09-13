import React from "react";
import {education, publications} from "../../editable-stuff/config";
export default function Background() {
  return <>
    <section id="education" className="portfolio-section container"><p className="eyebrow">Academic background</p><h2>Education</h2><div className="education-grid">{education.map(item => <article key={item.name}><p className="entry-date">{item.date} · {item.location}</p><h3>{item.name}</h3><p>{item.qualification}<br /><span className="muted">{item.detail}</span></p><p className="education-gpa">GPA {item.gpa}</p></article>)}</div></section>
    <section id="publications" className="portfolio-section container"><p className="eyebrow">Published work</p><h2>Publications and presentations</h2><div>{publications.map(item => <article className="publication-entry" key={item.title}><p className="entry-date">{item.venue} · {item.date}</p><h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title} <span aria-hidden="true">↗</span></a></h3></article>)}</div></section>
  </>;
}
