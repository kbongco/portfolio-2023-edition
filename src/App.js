import './App.scss';
import NavBar from './Layout/NavBar';
import About from './Components/About/About';
import Intro from './Components/Intro/Intro';

function App() {
  return (
    <>
        <NavBar/>
      <div className="App">
        <About />
        <Intro /> 
      </div>
    </>
  );
}

export default App;
