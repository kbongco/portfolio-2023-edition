import "./KeyItems.css";
import { useTheme } from "../../Context/toggleContext";
import SkillIcon from "../SkillIcon/SkillIcon";
import { skillGroups, otherTools } from "../../data/skills";

export default function KeyItems() {
  const { theme } = useTheme();

  return (
    <div className="key-items-pocket">
      <div className="key-items-heading">
        <h1>{theme === "videoGame" ? "Inventory" : "Skills"}</h1>
      </div>
      {skillGroups.map((group) => (
        <div className="grouped-languages" key={group.title.professional}>
          <h3 className="items-title">{group.title[theme]}</h3>
          <div className="equipped-languages">
            {group.items.map((name) => (
              <SkillIcon key={name} name={name} />
            ))}
          </div>
        </div>
      ))}
      <div className="other-tools-no-icons">
        <p>
          Some other tools I am familiar with include: {otherTools.join(", ")}
        </p>
      </div>
    </div>
  );
}
