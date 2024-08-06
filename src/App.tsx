import './App.css'
import Header from './components/header/Header'
import About from './components/about/about'
import Projects from './components/projects/projects'
import text from "../public/text.json";

function App() {
  return (
    <>
      <Header />
      <About />
      {text.sections.map(x => (
        <Projects
          key={x.name} // Añadir una clave única para cada componente
          name={x.name}
          projects={x.projects}
        />
      ))}  
    </>
  )
}

export default App