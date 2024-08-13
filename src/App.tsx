// import './App.css'
// import Header from './components/header/Header'
// import About from './components/about/about'
// import Projects from './components/projects/projects'
// import text from "../public/text.json";

// function App() {
//   return (
//     <>
//       <Header />
//       <About />
//       {text.sections.map(x => (
//         <Projects
//           key={x.name} // Añadir una clave única para cada componente
//           name={x.name}
//           projects={x.projects}
//         />
//       ))}  
//     </>
//   )
// }

// export default App

import './App.css';
import Header from './components/header/Header';
import About from './components/about/about';
import Projects from './components/projects/projects';
import text from "../public/text.json";



function App() {
  return (
    <>
      <Header />
      <div className="scroll-container" >
        <div id="about" className="scroll-section">
          <About />
        </div>
        {text.sections.map((x, index) => (
          <div id={x.name} key={index} className="scroll-section">
            <Projects name={x.name} projects={x.projects} />
          </div>
        ))}

        <nav>
          <ul className="indicator">
            <li><a href="#about"><span className="sr-only">About</span></a></li>
            {text.sections.map((x, index) => (
              <li key={index}><a href={`#${x.name}`}><span className="sr-only">{x.name}</span></a></li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;