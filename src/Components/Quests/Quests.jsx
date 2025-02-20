import "./Quests.css";
import { useState } from "react";
import { useTheme } from "../../Context/toggleContext";

export default function Quests() {
  const [activeContent, setActiveContent] = useState("quests");
  const { theme } = useTheme();

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <>
      <div className="quests-information">
        <h1 as="h1" size="lg" className="quests-header">
          {activeContent === "quests" && theme === "videoGame"
            ? "Quests"
            : activeContent === "quests" && theme === "professional"
            ? "Experience"
            : activeContent === "sideQuests" && theme === "videoGame"
            ? "Side Quests"
            : activeContent === "sideQuests" && theme === "professional"
            ? "Side Projects"
            : ""}
        </h1>
        <div className="sideproject-switch">
          {theme === "videoGame" ? (
            <ul className="quest-list">
              <li
                className="quest-link"
                onClick={() => handleContentChange("quests")}
                className={`quest-item ${
                  activeContent === "quests" ? "active-link" : ""
                }`}
              >
                Quests
              </li>
              <li>|</li>
              <li
                className="quest-link"
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
                  className="quest-link"
                  onClick={() => handleContentChange("quests")}
                  className={`quest-item ${
                    activeContent === "quests" ? "active-link" : ""
                  }`}
                >
                  Professional
                </li>
                <li>|</li>
                <li
                  className="quest-link"
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
                  <p className='quests-text-desc'>
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
                  <h3 className='vz-text'>Junior Software Developer @ Verizon via Infovision</h3>
                  <p>March 2021 - February 2022</p>
                  <p className='quests-text-desc'>
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
                  <p className='quests-text-desc'>
                    Attended a 12 week immersive bootcamp, learning full stack
                    web development with Javascript. Created several projects, including an Etsy clone themed to Animal Crossing as well as a project collaborating with the UX cohort.
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
                  ? "If you are interested in seeing more of my completed quests and the details of it check out my linkedin!"
                  : "If you would like to see more of my professional experience, as well as a more detailed description of it, check out my linkedin!"}
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
                  src="https://i.ibb.co/1GwjghST/Screen-Shot-2025-02-20-at-11-14-34-AM.png"
                  alt="Screen-Shot-2024-03-31-at-2-34-19-PM"
                  border="0"
                />
                <div className="quests-text">
                  <h3>Chibi Components: A minimal Library</h3>
                  <ul className="sideproject-link">
                    <a href="https://github.com/kbongco/minimal-chibi-components">
                      <li>Github</li>
                    </a>
                    <li>|</li>
                    <a href="https://www.figma.com/design/vtcrSI7QOkmbitexzF42qO/Chibi-Components?node-id=0-1&t=z4PV1kWsPBY4TGyI-1">
                      <li>Figma</li>
                    </a>
                    <li>|</li>
                    <a href="">
                      NPM Library Coming Soon!
                    </a>
                  </ul>
                  <p className='quests-text-desc'>
                    A minimalist component library I'm creating, to use across various projects of mine. With an NPM library coming soon! 
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-gained">
              <p>
                Experience Gained in: React, Figma, Creating components, SCSS, Styled Components
              </p>
            </div>
            <div className="quests-information-container">
              <div className="quests-picture">
                <img
                  className="quest-company"
                  src="https://i.ibb.co/FkFkNHvm/Screen-Shot-2025-02-20-at-11-27-46-AM.png"
                  alt="Screen-Shot-2024-04-02-at-11-39-17-AM"
                  border="0"
                />
                <div className="quests-text">
                  <h3>Japan 2024 Recapped</h3>
                  <ul className="sideproject-link">
                    <a href="https://github.com/kbongco/japan2024trip">
                      <li>Github</li>
                    </a>
                    <li>|</li>
                    <a href="">
                      <li>Figma</li>
                    </a>
                    <li>|</li>
                    <a href=''>
                      Deployed Site Coming Soon!
                    </a>
                  </ul>
                  <p className='quests-text-desc'>
                    A fun project I created that recaps my trip to Japan showing off how much I spent, in the style of a 
                    "Spotify" wrapped page
                  </p>
                </div>
              </div>
            </div>
            <div className="experience-gained">
              <p>
                Experience Gained in: React, Typescript, SCSS, Creating
                Components
              </p>
            </div>
            <div className="quests-information-container">
              <div className="quests-picture">
                <img
                  className="quest-company"
                  src="https://i.ibb.co/khwKG5w/Screen-Shot-2024-04-10-at-12-51-21-PM.png"
                  alt="Portfolio-site"
                  border="0"
                />
                <div className="quests-text">
                  <h3>Portfolio Site</h3>
                  <ul className="sideproject-link">
                    <li>Github</li>
                    <li>|</li>
                    <a href="https://www.figma.com/file/pFH0haDm5oDzAAbdjLETZM/Untitled?type=design&node-id=241%3A44&mode=design&t=p5Y1JQRQjDGHXODa-1">
                      <li>Figma</li>
                    </a>
                  </ul>
                  <p className='quests-text-desc'>
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
