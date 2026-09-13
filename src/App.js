import React from "react";
import {navBar, mainBody, about, projectsData, skills, getInTouch, experiences} from "./editable-stuff/config";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch";
import Experience from "./components/home/Experience";
import Background from "./components/home/Background";
export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a>{navBar.show && <Navbar />}
    <main id="main">
      <MainBody title={`${mainBody.firstName} ${mainBody.lastName}`} message={mainBody.message} icons={mainBody.icons} />
      {about.show && <AboutMe {...about} link={about.imageLink} imgSize={about.imageSize} />}
      {experiences.show && <Experience experiences={experiences} />}
      {projectsData.show && <Project heading={projectsData.heading} projectsData={projectsData.data} />}
      {skills.show && <Skills {...skills} />}
      <Background />
    </main>
    <Footer>{getInTouch.show && <GetInTouch {...getInTouch} />}</Footer>
  </>;
}
