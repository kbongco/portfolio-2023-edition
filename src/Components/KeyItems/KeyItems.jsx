import "./KeyItems.css";
import { useCopy } from "../../Context/toggleContext";
import SkillIcon from "../SkillIcon/SkillIcon";
import { skillGroups, otherTools } from "../../data/skills";

export default function KeyItems() {
  const { inventory } = useCopy();

  return (
    <section className="key-items-pocket panel">
      <div className="key-items-heading">
        <h1>{inventory.heading}</h1>
      </div>
      {skillGroups.map((group) => (
        <div className="grouped-languages" key={group.id}>
          <h3 className="items-title">{inventory.groups[group.id]}</h3>
          <div className="equipped-languages">
            {group.items.map((name) => (
              <SkillIcon key={name} name={name} />
            ))}
          </div>
        </div>
      ))}
      <div className="other-tools-no-icons">
        <p>
          {inventory.otherTools} {otherTools.join(", ")}
        </p>
      </div>
    </section>
  );
}
