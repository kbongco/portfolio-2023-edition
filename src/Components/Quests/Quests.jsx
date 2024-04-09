import "./Quests.css";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useTheme } from "../../Context/toggleContext";
import { useContext } from "react";

export default function Quests() {
  const [activeContent, setActiveContent] = useState("quests");
  const { theme } = useTheme();

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <>
      <div className="quests-information">
        <Heading as="h1" size="lg" className="quests-header">
          {activeContent === "quests" && theme === "videoGame"
            ? "Quests"
            : activeContent === "quests" && theme === "professional"
            ? "Experience"
            : activeContent === "sideQuests" && theme === "videoGame"
            ? "Side Quests"
            : activeContent === "sideQuests" && theme === "professional"
            ? "Side Projects"
            : ""}
        </Heading>
        <div className="sideproject-switch">
          {theme === "videoGame" ? (
            <ul className="quest-list">
              <li
                onClick={() => handleContentChange("quests")}
                className={`quest-item ${
                  activeContent === "quests" ? "active-link" : ""
                }`}
              >
                Quests
              </li>
              <li>|</li>
              <li
                onClick={() => handleContentChange("sideQuests")}
                className={`quest-item ${
                  activeContent === "sideQuests" ? "active-link" : ""
                }`}
              >
                Side Quests
              </li>
            </ul>
          ) : (
            <>
              <ul className="quest-list">
                <li
                  onClick={() => handleContentChange("quests")}
                  className={`quest-item ${
                    activeContent === "quests" ? "active-link" : ""
                  }`}
                >
                  Professional
                </li>
                <li>|</li>
                <li
                  onClick={() => handleContentChange("sideQuests")}
                  className={`quest-item ${
                    activeContent === "sideQuests" ? "active-link" : ""
                  }`}
                >
                  Side Projects
                </li>
              </ul>
            </>
          )}
        </div>
        {activeContent === "quests" && (
          <>
            <div className="quests-information-container">
              <div className="quests-picture">
                <img
                  className="quest-company"
                  src="https://i.ibb.co/CJ99y1Z/Screen-Shot-2024-03-31-at-2-34-19-PM.png"
                  alt="Screen-Shot-2024-03-31-at-2-34-19-PM"
                  border="0"
                />
                <div className="quests-text">
                  <h3>UX Engineer @ EY Design Studio</h3>
                  <p>February 2022 - March 2023</p>
                  <p>
                    Supported the redesign of client's internal site to Angular
                    sites. Ensuring accessibility, user friendliness, and
                    responsiveness.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-gained">
              <p>
                Experience Gained in: Angular, Javascript, SCSS, Figma, and
                design
              </p>
            </div>
            <div className="quests-information-container">
              <div className="quests-picture">
                <img
                  className="quest-company"
                  src="https://i.ibb.co/GPQzswd/Screen-Shot-2024-04-01-at-6-07-56-PM.png"
                  alt="Screen-Shot-2024-04-01-at-6-07-56-PM"
                  border="0"
                />
                <div className="quests-text">
                  <h3>Junior Software Developer @ Verizon via Infovision</h3>
                  <p>March 2021 - February 2022</p>
                  <p>
                    Supported the redesign of current customer features
                    converting legacy react code to hooks. Supported QA with
                    ensuring all tickets were ready for deployment prior to
                    release.
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-gained">
              <p>
                Experience Gained in: React, Javascript, QA Testing,
                Accessibility
              </p>
            </div>
            <div className="quests-information-container">
              <div className="quests-picture">
                <img
                  className="quest-company"
                  src="https://i.ibb.co/z4Nm6c3/Screen-Shot-2024-04-02-at-9-57-32-AM.png"
                  alt="Screen-Shot-2024-04-02-at-9-57-32-AM"
                  border="0"
                />
                <div className="quests-text">
                  <h3>Software Engineer Fellow @ General Assembly</h3>
                  <p>June 2020 - September 2020</p>
                  <p>
                    Attended a 12 week immersive bootcamp, learning full stack
                    web development with Javascript. Created several projects
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-gained">
              <p>
                Experience Gained in: HTML, CSS, Javascript, React, Ruby, Rails,
                Express.js, MongoDB, SQL
              </p>
            </div>
            <div className="learn-more">
              <p className="check-out-linked-in">
                {theme === "videoGame"
                  ? "If you are interested in seeing more of my completed quests, check out my linkedin!"
                  : "If you would like to see more of my professional experience, check out my linkedin!"}
                {/* If you are interested in seeing more of my completed Quests,
                check out my linkedIn! */}
              </p>
            </div>
          </>
        )}
        {activeContent === "sideQuests" && (
          <>
            <div className="quests-information-container">
              <div className="quests-picture">
                <img
                  className="quest-company"
                  src="https://i.ibb.co/3y0vQPD/Screen-Shot-2023-12-25-at-3-21-16-PM.png"
                  alt="Screen-Shot-2024-03-31-at-2-34-19-PM"
                  border="0"
                />
                <div className="quests-text">
                  <h3>Creatine Reminder 4 U</h3>
                  <p>Github | Figma Design</p>
                  <p>
                    A mobile first Progressive Web application which users can
                    track their Creatine Intake, get reminders to take their
                    Creatine and track how much Creatine they have left before
                    having to order
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-gained">
              <p>
                Experience Gained in: React, Figma, Creating components, SCSS,
                Firebase, Progressive Web applications
              </p>
            </div>
            <div className="quests-information-container">
              <div className="quests-picture">
                <img
                  className="quest-company"
                  src="https://i.ibb.co/FgWNtPs/Screen-Shot-2024-04-02-at-11-39-17-AM.png"
                  alt="Screen-Shot-2024-04-02-at-11-39-17-AM"
                  border="0"
                />
                <div className="quests-text">
                  <h3>WeebTrade</h3>
                  <p>Github | Figma</p>
                  <p>
                    A mobile first e-commerce web application with a modern UI
                    look where users can trade anime figures.
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-gained">
              <p>
                Experience Gained in: React, Typescript, SCSS, Creating
                Component, Ruby, Rails, Supabase
              </p>
            </div>
            <div className="quests-information-container">
              <div className="quests-picture">
                <img
                  className="quest-company"
                  src="https://i.ibb.co/LnB5q68/Screen-Shot-2024-04-02-at-11-39-49-AM.png"
                  alt="Screen-Shot-2024-04-02-at-11-39-49-AM"
                  border="0"
                />
                <div className="quests-text">
                  <h3>Portfolio Site</h3>
                  <p>Github | Figma</p>
                  <p>
                    My portfolio site is also an ongoing side project. This
                    rendition is my 7th edition of my portfolio site. Updated to
                    have a little bit more of a unique look compared to others.
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-gained">
              <p>Experience Gained in: CSS, Javascript, React.</p>
            </div>
            <div className="learn-more">
              <p className="check-out-linked-in">
                {theme === "videoGame"
                  ? "These are my top 3 side quests that I am working on, if you are curious to see more of my active side quests and completed side quests, check out my github!"
                  : "These are some of my side projects that I am currently working on. If you would like to see some of my previous projects and work, check out my github!"}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
