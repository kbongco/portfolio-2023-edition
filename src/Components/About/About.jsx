import "./About.css";

export default function About() {
  return (
    <>
      <section className="about-portfolio-section">
        <div className="about-portfolio-container">
          <div className="about-portfolio-img-container">
            <img
              src="https://i.ibb.co/C7QjWch/Screen-Shot-2024-03-29-at-2-04-09-PM.png"
              alt="Portfolio Pic"
              className="portfolio-pic"
            />
          </div>
          <div className="about-portfolio-text-container">
            <h1 className="portfolio-greeting-text">Hello There!</h1>
            <div className="about-portfolio-description">
              <p className="about-text">
                My name is Kathleen and I am a software Engineer based out of
                the NYC metropolitan area!
              </p>
              <p className="about-text">
                I have experience working in front end development with modern
                Javascript frameworks and have design experience as well!
              </p>
            </div>
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
