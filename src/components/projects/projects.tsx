//import React from 'react'
import { useState } from "react";
import "./projects.css";
import text from "../../../public/text.json";
import LEFTARROW from "../../assets/icons/leftArrow.png";
import RIGHTARROW from "../../assets/icons/rigthArrow.png";


const texts = text.sections[0];
interface Content {
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
    setCurrentIndexIntern(0)
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
      console.log("cambie" + item.url)
      return (
        <video key={item.url} className="carrouselVideo" controls width="360" height="240">
        <source src={item.url} type='video/mp4' />
      </video>
      );
    }
    return null;
  };





  return (
    <div className="projects">
      <div className="title">{texts.name}</div>
      <div className="GridContainer">
        <button className="navButton left" onClick={handlePrev}>
          <img className="navArrow" src={LEFTARROW} alt="" />
        </button>
        <div
          className="Grid"
          style={{ transform: `translateX(-${currentIndex * 33}%)` /*aca tengo que cambiar el desplazamiento de la balla*/ }}
        >
          {texts.projects.map((project, index) => (
            <div key={index}>{obtainProjects(project)}</div>
          ))}
        </div>

        <button className="navButton right" onClick={handleNext}>
          <img className="navArrow" src={RIGHTARROW} alt="" />
        </button>
      </div>
      <div className="landing">
        <div className="carrouselComplete">
          <div className="carrousel">
            <div className="carrousel-background"
              style={{
                backgroundImage: 'url('+selectedProject.frontImage+')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'blur(5px)'
              }}></div>
            <div className="carrousel-content">
              <button
                className="navButton small left"
                onClick={handleCarouselPrev}
              >
                <img className="navArrow" src={LEFTARROW} alt="" />
              </button>
              {renderCarouselItem(selectedProject.content[currentIndexIntern])}

              <button
                className="navButton small right"
                onClick={handleCarouselNext}
              >
                <img className="navArrow" src={RIGHTARROW} alt="" />
              </button>
            </div>
          </div>
          <div className="carouselIndicators">

            {selectedProject.content.map((_, idx) => (
              <span key={idx} onClick={() => setCurrentIndexIntern(idx)}>{`${idx === currentIndexIntern ? '🔴' : '⚪'}`}</span>
            ))}
          </div>
        </div>
        <div className="Description">
          <h2 className="DescriptionTitle">{selectedProject.name}</h2>
          <p className="DescrioptionDescription">{selectedProject.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
