import "./Quests.css";
import { Fragment, useState } from "react";
import { useTheme } from "../../Context/toggleContext";
import { jobs, sideProjects } from "../../data/quests";

const tabs = [
  {
    id: "quests",
    tab: { videoGame: "Quests", professional: "Professional" },
    heading: { videoGame: "Quests", professional: "Experience" },
    footer: {
      videoGame:
        "If you are interested in seeing more of my completed quests and the details of it check out my linkedin!",
      professional:
        "If you would like to see more of my professional experience, as well as a more detailed description of it, check out my linkedin!",
    },
    entries: jobs,
  },
  {
    id: "sideQuests",
    tab: { videoGame: "Side Quests", professional: "Side Projects" },
    heading: { videoGame: "Side Quests", professional: "Side Projects" },
    footer: {
      videoGame:
        "These are my top 3 side quests that I am working on, if you are curious to see more of my active side quests and completed side quests, check out my github!",
      professional:
        "These are some of my side projects that I am currently working on. If you would like to see some of my previous projects and work, check out my github!",
    },
    entries: sideProjects,
  },
];

function QuestEntry({ entry }) {
  return (
    <>
      <div className="quests-information-container">
        <div className="quests-picture">
          <img className="quest-company" src={entry.image} alt={entry.imageAlt} />
          <div className="quests-text">
            <h3>{entry.title}</h3>
            {entry.dates && <p>{entry.dates}</p>}
            {entry.links && (
              <ul className="sideproject-link">
                {entry.links.map((link, i) => (
                  <Fragment key={link.label}>
                    {i > 0 && <li aria-hidden="true">|</li>}
                    <li>
                      {link.url ? <a href={link.url}>{link.label}</a> : link.label}
                    </li>
                  </Fragment>
                ))}
              </ul>
            )}
            <p className="quests-text-desc">{entry.description}</p>
          </div>
        </div>
      </div>
      <div className="experience-gained">
        <p>Experience Gained in: {entry.skills}</p>
      </div>
    </>
  );
}

export default function Quests() {
  const [activeContent, setActiveContent] = useState("quests");
  const { theme } = useTheme();
  const active = tabs.find((t) => t.id === activeContent);

  return (
    <div className="quests-information">
      <h1 className="quests-header">{active.heading[theme]}</h1>
      <div className="sideproject-switch">
        <ul className="quest-list">
          {tabs.map((t, i) => (
            <Fragment key={t.id}>
              {i > 0 && <li aria-hidden="true">|</li>}
              <li
                className={`quest-item ${
                  activeContent === t.id ? "active-link" : ""
                }`}
                onClick={() => setActiveContent(t.id)}
              >
                {t.tab[theme]}
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
      {active.entries.map((entry) => (
        <QuestEntry key={entry.title} entry={entry} />
      ))}
      <div className="learn-more">
        <p className="check-out-linked-in">{active.footer[theme]}</p>
      </div>
    </div>
  );
}
