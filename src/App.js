import logo from './logo.svg';
import './App.scss';
import NavBar from './Layout/NavBar';
import About from './Components/About/About';

function App() {
  return (
    <>
        <NavBar/>
      <div className="App">
        <About/>
      </div>
    </>
  );
}

export default App;
