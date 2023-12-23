import './App.scss';
import NavBar from './Layout/NavBar';
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';
import Skills from './Components/SkillsTools/Skills';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import axios from 'axios';
import { projects } from './constants';

function App() {

  
  return (
    <>
      <NavBar />
      <div className='App'>
        <About />
        <Intro />
        <Skills />
        <Projects projects={projects} />
        <Contact/>
      </div>
    </>
  );
}

export default App;
