import "./MainInformation.css";
import { Progress } from "@chakra-ui/react";
import { useTheme } from "../../Context/toggleContext";
import SkillIcon from "../SkillIcon/SkillIcon";
import { equippedSkills } from "../../data/skills";

export default function MainInformation() {
  const { theme } = useTheme();
  return (
    <>
      <section className="main-information-portfolio">
        <h1 className="main-information-header">
          {theme === "videoGame" ? "Basic Stats" : "About"}
        </h1>
        <div className="main-information-container">
          {theme === "videoGame" ? (
            <>
              {" "}
              <div className="progress-level-container">
                <p>
                  Main Class - Software Engineer Lvl 3
                </p>
                <Progress value={80} height="24px" rounded="full" />
                <p className="next-level">
                  To Next Level - 1
                </p>
              </div>
              <div className="progress-level-container">
                <p>
                  Secondary Class - Front End Enginer Lvl 3
                </p>
                <Progress value={80} height="24px" rounded="full" />
                <p className="next-level">
                  To Next Level - 1
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="years-of-experience-container">
                <h1>Software Engineer</h1>
                <p className='years-of-exp'>
                  3 years of experience working with Javascript and its
                  frameworks. I have experience working with React, Angular, and am currently expanding my knowledge in the front end by learning Next.js and am also dabbling with Vue. I also have knowledge with Python and its microframework, Flask as well as Ruby and Rails.
                </p>
              </div>
            </>
          )}
        </div>
        <div className="main-information-special-skills-container">
          <div className="special-abilities-container">
            <h1 as="h2" size="lg">
              {theme === "videoGame" ? "Summary" : "General Information"}
            </h1>
            <p className='special-abilities-text'>
              {theme === "videoGame"
                ? " Former food scientist developing new products, prior to switching classes through a training camp to software Engineer class. Able to learn things extremely quickly and loves expanding their skill set, and has basic knowledge of UI/UX and is currently leveling up that skill tree. Speciality is front end, but is capable of working the back end and full stack.  "
                : " I'm a former food scientist who worked in R&D before I attended a coding bootcamp during the height of the COVID pandemic. I pride myself in the ability to learn things very quickly and my curiosity and desire to learn new things. Most of my experience is in front end development, but I am capable of working the backend and working across the stack in full stack. In addition to this, I am improving my UI/UX design skills and have basic knowledge in that field."}
            </p>
          </div>
          <div className="hobbies-and-fun-container">
            <h1 as="h2" size="lg">
              Hobbies and Fun Things
            </h1>
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
            <h1 as="h2" size="lg">
              {theme === "videoGame"
                ? "Currently Equipped Items"
                : "Current Stack "}
            </h1>
            <div classname="learn-more">
              <p className='learn-more-text'>
                {theme === "videoGame"
                  ? "This is what I have currently equipped when I go on my quests. If you are interested in seeing more of whats in my kit, click the inventory link above!"
                  : "This is my current go-to stack when I am building projects. Most of the things I am working on right now is front end, but i am capable of back end development as well. Click the tools link to check out what else I know!"}
              </p>
            </div>
            <div className="currently-equipped-icons">
              {equippedSkills.map((name) => (
                <SkillIcon key={name} name={name} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
