import "./About.css";
import { sharedCopy } from "../../data/copy";

export default function About() {
  const { about } = sharedCopy;

  return (
    <section className="about-portfolio-section panel">
      <div className="about-portfolio-container">
        <div className="about-portfolio-img-container">
          <img
            src="https://i.ibb.co/C7QjWch/Screen-Shot-2024-03-29-at-2-04-09-PM.png"
            alt="Portfolio Pic"
            className="portfolio-pic"
          />
        </div>
        <div className="about-portfolio-text-container">
          <h1 className="portfolio-greeting-text">{about.greeting}</h1>
          <div className="about-portfolio-description">
            {about.paragraphs.map((text) => (
              <p className="about-text" key={text}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="about-portfolio-announcement">
        <p className="portfolio-announcement-text">{about.announcement}</p>
      </div>
    </section>
  );
}
