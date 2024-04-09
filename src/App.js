import "./App.css";
import NavBar from "./Layout/NavBar/NavBar";
import About from "./Components/About/About";
import MainInformation from "./Components/MainInformation/MainInformation";
import Quests from "./Components/Quests/Quests";
import SocialLinks from "./Components/SocialLinks/SocialLinks";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./themes/theme";
import { useState } from "react";
import KeyItems from "./Components/KeyItems/KeyItems";
import { ThemeProvider } from "./Context/toggleContext";

function App() {
  const [showComponent, setShowComponent] = useState("MainInformation");

  const selectedLink = (componentName) => {
    setShowComponent(componentName);
  };
  return (
    <ThemeProvider>
    <ChakraProvider theme={customTheme}>
      <div className="App">
        <NavBar onNavItemClick={selectedLink} />
        <div className="information-overall">
          <div className="left-column-desktop">
            <About />
            <SocialLinks />
          </div>
          {showComponent === "MainInformation" && <MainInformation />}
          {showComponent === "Quests" && <Quests />}
          {showComponent === "Inventory" && <KeyItems />}
        </div>
      </div>
      </ChakraProvider>
      </ThemeProvider>
  );
}

export default App;
