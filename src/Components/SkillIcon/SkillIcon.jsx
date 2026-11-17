import skillIcons from "../../data/skillIcons";

// Renders one skill icon with its label. `name` is a key in skillIcons.js.
export default function SkillIcon({ name }) {
  const icon = skillIcons[name];
  if (!icon) return null;

  return (
    <div className="icon-container">
      <svg
        className="code-icon"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
      <div className="code-text">
        <p>{name}</p>
      </div>
    </div>
  );
}
