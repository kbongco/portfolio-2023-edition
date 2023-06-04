import './App.scss';
import NavBar from './Layout/NavBar';
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';
import Skills from './Components/SkillsTools/Skills';

function App() {
  return (
    <>
        <NavBar/>
      <div className="App">
        <About />
        <Intro /> 
        <Skills />
      </div>
    </>
  );
}

export default App;
