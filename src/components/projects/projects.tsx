//import React from 'react'
import { useState } from "react";
import "./projects.css";
import texts from "../../../public/text.json";

interface Project {
  name: string;
  description: string;
  frontImage: string;
  content: string[];
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
            <img
              src={selectedProject.content[currentIndexIntern]}
              className="carrouselImage"
            />
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
      <iframe src="https://1drv.ms/v/c/eeb3ee7102904988/IQN-wbFhaf4sSa8__8ARybBZAQBZacadAtaMZ8JHTa1Qixw" width="1920" height="1080" ></iframe>
    </div>
  );
};

export default Projects;
