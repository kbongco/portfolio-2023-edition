import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Layout/NavBar/NavBar";
import About from "./Components/About/About";
import MainInformation from "./Components/MainInformation/MainInformation";
import SocialLinks from "./Components/SocialLinks/SocialLinks";
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from "./themes/theme";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
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
    </ChakraProvider>
  );
}

export default App;
