import "./About.css";

export default function About() {
  return (
    <>
      <section className="about-portfolio-section">
        <h1>Hello There!</h1>
        <div className="about-portfolio-container">
          <div className="about-portfolio-profile-pic">
            <img
              src="https://i.ibb.co/C7QjWch/Screen-Shot-2024-03-29-at-2-04-09-PM.png"
              alt="Screen-Shot-2024-03-29-at-2-04-09-PM"
              className="portfolio-pic"
              border="0"
            />
          </div>
          <div className="about-portfolio-description">
            <p>
              My name is Kathleen and I am a software Engineer based out of the
              NYC metropolitan area!
            </p>
            <p>
              I have experience working in front end development with modern
              Javascript frameworks and have design experience as well!
            </p>
          </div>
        </div>
        <div className="about-portfolio-announcement">
          <p className="portfolio-announcement-text">
            My portfolio site is inspired by video games such as Final Fantasy
            and DnD. If this looks confusing and you would prefer a more
            traditional view of my experience, feel free to use the toggle
            button above!
          </p>
        </div>
      </section>
    </>
  );
}
