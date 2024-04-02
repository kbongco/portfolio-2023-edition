import "./Quests.css";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";

export default function Quests() {
  const [activeContent, setActiveContent] = useState("quests");

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <>
      <div className="quests-information">
        <Heading as="h1" size="lg" className="quests-header">
          {activeContent === "quests" ? "Quests" : "Side Quests"}
        </Heading>
        <div className="sideproject-switch">
          <ul className="quest-list">
            <li onClick={() => handleContentChange("quests")}>Quests</li>
            <li onClick={() => handleContentChange("sideQuests")}>
              Side Quests
            </li>
          </ul>
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
                  <p>UX Engineer @ EY Design Studio</p>
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
                  <p>Junior Software Developer @ Verizon via Infovision</p>
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
                  <p>Software Engineer Fellow @ General Assembly</p>
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
                  <p>Creatine Reminder 4 U</p>
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
                  src="https://i.ibb.co/FgWNtPs/Screen-Shot-2024-04-02-at-11-39-17-AM.png" alt="Screen-Shot-2024-04-02-at-11-39-17-AM" border="0"
                />
                <div className="quests-text">
                  <p>WeebTrade</p>
                  <p>Github | Figma</p>
                  <p>
                    A mobile first e-commerce web application with a modern UI look where users can trade anime figures. 
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-gained">
              <p>
                Experience Gained in: React, Typescript, SCSS, Creating Component, Ruby, Rails, Supabase
              </p>
            </div>
            <div className="quests-information-container">
              <div className="quests-picture">
                <img
                  className="quest-company"
                  src="https://i.ibb.co/LnB5q68/Screen-Shot-2024-04-02-at-11-39-49-AM.png" alt="Screen-Shot-2024-04-02-at-11-39-49-AM" border="0"
                />
                <div className="quests-text">
                  <p>Portfolio Site</p>
                  <p>Github | Figma</p>
                  <p>
                    My portfolio site is also an ongoing side project. This rendition is my 7th edition of my portfolio site. Updated to have a little bit more of a unique look compared to others.
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-gained">
              <p>
                Experience Gained in: CSS, Javascript, React.
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
