import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Layout/NavBar/NavBar";
import About from "./Components/About/About";
import MainInformation from "./Components/MainInformation/MainInformation";
import SocialLinks from "./Components/SocialLinks/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="information-overall">
        <div className="left-column-desktop">
          <About />
          <SocialLinks />
        </div>
        <MainInformation />
      </div>
    </div>
  );
}

export default App;
