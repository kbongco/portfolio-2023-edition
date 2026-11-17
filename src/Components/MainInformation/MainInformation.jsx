import "./MainInformation.css";
import { Progress } from "@chakra-ui/react";
import { useCopy } from "../../Context/toggleContext";
import SkillIcon from "../SkillIcon/SkillIcon";
import { equippedSkills } from "../../data/skills";
import { sharedCopy } from "../../data/copy";

export default function MainInformation() {
  const { stats } = useCopy();

  return (
    <section className="main-information-portfolio panel">
      <h1 className="main-information-header">{stats.heading}</h1>
      <div className="main-information-container">
        {stats.levels?.map((level) => (
          <div className="progress-level-container" key={level.label}>
            <p>{level.label}</p>
            <Progress value={level.value} height="24px" rounded="full" />
            <p className="next-level">{level.toNextLevel}</p>
          </div>
        ))}
        {stats.intro && (
          <div className="years-of-experience-container">
            <h1>{stats.intro.title}</h1>
            <p className="years-of-exp">{stats.intro.text}</p>
          </div>
        )}
      </div>
      <div className="main-information-special-skills-container">
        <div className="special-abilities-container">
          <h1>{stats.summaryHeading}</h1>
          <p className="special-abilities-text">{stats.summary}</p>
        </div>
        <div className="hobbies-and-fun-container">
          <h1>{sharedCopy.hobbiesHeading}</h1>
          <div className="hobbies-list">
            <ul className="hobbies">
              {sharedCopy.hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="currently-equipped-container">
          <h1>{stats.equippedHeading}</h1>
          <div className="learn-more">
            <p className="learn-more-text">{stats.equippedText}</p>
          </div>
          <div className="currently-equipped-icons">
            {equippedSkills.map((name) => (
              <SkillIcon key={name} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
