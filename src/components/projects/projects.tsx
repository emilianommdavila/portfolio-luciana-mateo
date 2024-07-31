//import React from 'react'
import { useState } from "react";
import "./projects.css";
import texts from "../../../public/text.json";

interface Content{
   type: string,
   url: string
}

interface Project {
  name: string;
  description: string;
  frontImage: string;
  content: Content[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(
    texts.projects[0]
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentIndexIntern, setCurrentIndexIntern] = useState(0);

  const alterLanding = (project: Project) => {
    setSelectedProject(project);
  };

  function obtainProjects(project: Project) {
    return (
      <>
        <img
          className="imgGrid"
          src={project.frontImage}
          alt=""
          onClick={() => alterLanding(project)}
        />
      </>
    );
  }
  //Grilla de arriba//
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? texts.projects.length - 1 : prevIndex - 1
    );
    //resetear a 0 el otro indice
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === texts.projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  //carrusel de fotos de la presentacion
  const handleCarouselPrev = () => {
    setCurrentIndexIntern((prevIndex) =>
      prevIndex === 0 ? selectedProject.content.length - 1 : prevIndex - 1
    );
  };

  const handleCarouselNext = () => {
    console.log(currentIndexIntern);
    setCurrentIndexIntern((prevIndex) =>
      prevIndex === selectedProject.content.length - 1 ? 0 : prevIndex + 1
    );
    console.log(currentIndexIntern);
  };


  const renderCarouselItem = (item: { type: string, url: string }) => {
    if (item.type === "image") {
      return <img src={item.url} className="carrouselImage" alt="" />;
    } else if (item.type === "video") {
      return (
        <video  className="carrouselVideo" controls width="360" height="240">
        <source src={item.url} type='video/mp4'/>
     </video>
      );
    }
    return null;
  };





  return (
    <div className="projects">
      <div className="GridContainer">
        <button className="navButton left" onClick={handlePrev}>
          IZQUIERDA
        </button>
        <div
          className="Grid"
          style={{ transform: `translateX(-${currentIndex * 33}%)` }}
        >
          {texts.projects.map((project, index) => (
            <div key={index}>{obtainProjects(project)}</div>
          ))}
        </div>

        <button className="navButton right" onClick={handleNext}>
          DERECHA
        </button>
      </div>
      <div className="landing">
        <div className="carrouselComplete">
          <div className="carrousel">
            <button
              className="navButton small left"
              onClick={handleCarouselPrev}
            >
              {"<"}
            </button>
            {renderCarouselItem(selectedProject.content[currentIndexIntern])}
            <button
              className="navButton small right"
              onClick={handleCarouselNext}
            >
              {">"}
            </button>
          </div>
          <div className="carouselIndicators">
            {selectedProject.content.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentIndexIntern ? "active" : ""}`}
                onClick={() => setCurrentIndexIntern(idx)}
              ></span>
            ))}
          </div>
        </div>
        <div className="Description">
          <h2>{selectedProject.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;