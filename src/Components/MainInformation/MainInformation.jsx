import "./MainInformation.css";
import { Heading } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../../Context/toggleContext";

export default function MainInformation() {
  const { theme } = useTheme();
  return (
    <>
      <section className="main-information-portfolio">
        <Heading as="h1" size="lg" className="main-information-header">
          {theme === "videoGame" ? "Basic Stats" : "About"}
        </Heading>
        <div className="main-information-container">
          <div className="progress-level-container">
            <p>
              {theme === "videoGame"
                ? "Main Class - Software Engineer Lvl 3"
                : "Software Engineer 3yrs Exp"}
            </p>
            <Progress value={80} height="24px" rounded="full" />
            <p className="next-level">{theme === 'videoGame' ? 'To Next Level - 1' : ''}</p>
          </div>
          <div className="progress-level-container">
            <p>
              {theme === "videoGame"
                ? "Secondary Class - Front End Engineer Lvl 3"
                : "Front End Engineer 3yrs Exp"}
            </p>
            <Progress value={80} height="24px" rounded="full" />
            <p className="next-level">{theme === 'videoGame' ? 'To Next Level - 1' : ''}</p>
          </div>
        </div>
        <div className="main-information-special-skills-container">
          <div className="special-abilities-container">
            <Heading as="h2" size="lg">
              {theme === "videoGame" ? "Summary" : "About"}
            </Heading>
            <p>
              {theme === "videoGame"
                ? " Former class was food scientist later became a coding bootcamp graduate. Able to learn things extremely quickly. Also has knowledge of design and UX and is capable of doing full stack and backend development."
                : " I am a coding bootcamp graduate. Prior to this I was a food scientist that worked in R&D.  During my time at coding bootcamp I learned full stack javascript! I also have knowledge of design and UX as it is something that I hope to gain more experience in. In addition to this, despite front end being more of my speciality I am also capable of doing full stack and back end development!"}
            </p>
          </div>
          <div className="hobbies-and-fun-container">
            <Heading as="h2" size="lg">
              Hobbies and Fun Things
            </Heading>
            <div className="hobbies-list">
              <ul className="hobbies">
                <li>
                  I'm a competitive powerlifter in the USAPL and I also am a
                  state referee
                </li>
                <li>
                  I love watching anime and I also attend anime conventions
                  where I sometimes present panels on traveling
                </li>
                <li>
                  I'm a huge video game enthusiast (as you can see from my
                  portfolio site!)
                </li>
                <li>I have an orange cat named Little Orange</li>
              </ul>
            </div>
          </div>
          <div className="currently-equipped-container">
            <Heading as="h2" size="lg">
              {theme === "videoGame"
                ? "Currently Equipped Items"
                : "Current Stack "}
            </Heading>
            <div classname="learn-more">
              <p>
                {theme === "videoGame"
                  ? "This is what I have currently equipped when I go on my quests. If you are interested in seeing more of whats in my kit, click the inventory link above!"
                  : "This is my current go-to stack when I am building projects. Most of the things I am working on right now is front end, but i am capable of back end development as well. Click the tools link to check out what else I know!"}
              </p>
            </div>
            <div className="currently-equipped-icons">
              <div className="equipped-icon-container">
                <FontAwesomeIcon icon={faHtml5} className="equipped-icon" />
                <p>HTML</p>
              </div>
              <div className='equipped-icon-container'>
                <FontAwesomeIcon icon={faCss3Alt} className="equipped-icon" />
                <p>CSS</p>
              </div>
              <div className='equipped-icon-container'>
              <FontAwesomeIcon icon={faJs} className="equipped-icon" />
                <p>Javascript</p>
              </div>
              <div className='equipped-icon-container'>
              <svg
                className="code-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>TypeScript</title>
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
              </svg>
              <p>Typescript</p>
              </div>
              <div className='equipped-icon-container'>
              <FontAwesomeIcon icon={faReact} className="equipped-icon" />
                <p>React</p>
              </div>
              <div className='equipped-icon-container'>
              <FontAwesomeIcon icon={faSass} className="equipped-icon" />
                <p>SASS</p>
              </div>
              <div className='equipped-icon-container'>
              <FontAwesomeIcon icon={faGitAlt} className="equipped-icon" />
                <p>Git</p>
              </div>
              <div className='equipped-icon-container'>
                <FontAwesomeIcon icon={faFigma} className="equipped-icon" />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
