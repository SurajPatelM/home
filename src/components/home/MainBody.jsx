import React from "react";
const MainBody = React.forwardRef(({ title, message, icons }, ref) => (
  <section id="home" className="hero">
    <div className="container">
      <p className="eyebrow">Machine learning · AI systems · Computer vision</p>
      <h1 ref={ref}>{title}</h1>
      <p className="hero-message">{message}</p>
      <p className="hero-context">Northeastern University · Previously Amazon, Apnimed, Samsung</p>
      <div className="hero-links">
        <a className="btn btn-dark" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
        {icons.map(icon => <a key={icon.label} href={icon.url} target="_blank" rel="noopener noreferrer">{icon.label} <span aria-hidden="true">↗</span></a>)}
      </div>
    </div>
  </section>
));
export default MainBody;
