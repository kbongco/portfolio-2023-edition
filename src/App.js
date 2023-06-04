import './App.scss';
import NavBar from './Layout/NavBar';
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';
import Skills from './Components/SkillsTools/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
        <NavBar/>
      <div className="App">
        <About />
        <Intro /> 
        <Skills />
        <Contact/>
      </div>
    </>
  );
}

export default App;
