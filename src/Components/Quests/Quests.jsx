import "./Quests.css";
import { Fragment, useState } from "react";
import { useCopy } from "../../Context/toggleContext";
import { jobs, sideProjects } from "../../data/quests";

// Which entries each tab shows. Tab labels, headings and footers are in copy.js.
const tabs = [
  { id: "quests", entries: jobs },
  { id: "sideQuests", entries: sideProjects },
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
  const { quests } = useCopy();
  const active = tabs.find((t) => t.id === activeContent);
  const activeCopy = quests[activeContent];

  return (
    <div className="quests-information">
      <h1 className="quests-header">{activeCopy.heading}</h1>
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
                {quests[t.id].tab}
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
      {active.entries.map((entry) => (
        <QuestEntry key={entry.title} entry={entry} />
      ))}
      <div className="learn-more">
        <p className="check-out-linked-in">{activeCopy.footer}</p>
      </div>
    </div>
  );
}
