import "./MainInformation.css";
import { Heading } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faAngular,
  faReact,
  faSass,
  faGitAlt,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

export default function MainInformation() {
  return (
    <>
      <section className="main-information-portfolio">
        <Heading as="h1" size="lg" className="main-information-header">
          Basic Stats
        </Heading>
        <div className="main-information-container">
          <div className="progress-level-container">
            <p>Main Class - Software Engineer Lvl 3</p>
            <Progress value={80} height="24px" rounded="full" />
            <p className="next-level">To Next Level - 1</p>
          </div>
          <div className="progress-level-container">
            <p>Secondary Class - Front End Engineer Lvl 3</p>
            <Progress value={80} height="24px" rounded="full" />
            <p className="next-level">To Next Level - 1</p>
          </div>
        </div>
        <div className="main-information-special-skills-container">
          <div className="special-abilities-container">
            <Heading as="h2" size="lg">
              Special Abilities
            </Heading>
            <p>
              Coding bootcamp graduate. Able to learn things extremely quickly.
              Also has knowledge of design and UX, and is capable of doing full
              stack and back end development.
            </p>
          </div>
          <div className="hobbies-and-fun-container">
            <Heading as="h2" size="lg">
              Hobbies and Fun Things
            </Heading>
            <div className='hobbies-list'>
              <ul>
                <li>I'm a competitive powerlifter in the USAPL and I also am a state referee</li>
                <li>I love watching anime and I also attend anime conventions where I sometimes present panels on traveling</li>
                <li>I'm a huge video game enthusiast (as you can see from my portfolio site!)</li>
                <li>I have an orange cat named Little Orange</li>
              </ul>
            </div>
          </div>
          <div className="currently-equipped-container">
            <Heading as="h2" size="lg">
              Currently Equipped
            </Heading>
            <div className="currently-equipped-icons">
              <FontAwesomeIcon icon={faHtml5} className="equipped-icon" />
              <FontAwesomeIcon icon={faCss3Alt} className="equipped-icon" />
              <FontAwesomeIcon icon={faJs} className="equipped-icon" />
              <FontAwesomeIcon icon={faAngular} className="equipped-icon" />
              <FontAwesomeIcon icon={faReact} className="equipped-icon" />
              <FontAwesomeIcon icon={faSass} className="equipped-icon" />
              <FontAwesomeIcon icon={faGitAlt} className="equipped-icon" />
              <FontAwesomeIcon icon={faFigma} className="equipped-icon" />
            </div>
            <div classname="learn-more">
              <p>
                Curious about the other languages I know? Click here to learn
                more!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
