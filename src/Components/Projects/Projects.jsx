import "./Projects.scss";
import samples from "../../assets/samples.png";
import weebjams from '../../assets/weebjams.png'
export default function Projects() {
  return (
    <div className="chbi-projects-container" id="projects">
      <h4 className="chbi-projects-header">Projects and Cool things</h4>
      <p>
        Here are some projects I've worked on in the past and some of the cool
        stuff I am currently working and playing around with! This is just a
        small set of projects I have worked on, if you would like to see some
        source code check out my{" "}
        <a className="chbi-github-link" href="http://github.com/kbongco">
          Github
        </a>
        !{" "}
      </p>
      <div className="chbi-projects-container-details">
        <img
          className="chbi-portfolio-site chbi-portfolio-site-mobile "
          src="https://i.ibb.co/7QCdtM2/portfolio.png"
        />
        <p>
          Portfolio Site
          <br />
          Fun fact: this is the sixth rendition of my portfolio site. I decided
          to keep this very simple and not flashy. My portfolio site is a
          constant work in progress and I'm proud to say that this will be the
          best version yet! Built using: React.js, SCSS, Figma was used for
          prototyping{" "}
        </p>
        <img
          className="chbi-lifting-data"
          src="https://i.ibb.co/xJzc44M/Screen-Shot-2023-11-09-at-10-57-20-AM.png"
        />
        <p>
          Weeb Trades
          <br />
          <a
            className="chbi-project-link"
            href="https://github.com/kbongco/WeebTrade"
          >
            Github Link
          </a>{" "}
          | Deployed Site
          <br />
          An responsive/mobile first e-commerce site created for anime figure
          enthusiasts to trade and keep track of rare anime figures! Built with:
          Backend: NestJs
          <br />
          Frontend: Vite, React.js,Typescript, SCSS, Figma for designs and
          prototyping
        </p>
        <img className="chbi-nookdepot-site" src={samples} />
        <p>
          Sample Submission
          <br />
          <a
            className="chbi-project-link"
            href="https://github.com/kbongco/sample-management-frontend"
          >
            Github Link
          </a>{" "}
          | Deployed Site
          <br />
          A passion project of mine that solves a problem that inspired me to go
          into tech from when I was working in the food industry! A CRUD
          application which replaces the usage of excel sheets which a lot of
          labs like to use to keep track of samples going in and out of testing.
          This will be a full stack application. React/Typescript is used for
          the front-end, Jest/React Testing Library is used to write tests,
          Figma is used for designing and prototyping, Storybook is used for
          components. Backend language is to be determined.
          <br />
        </p>
        <img className="chbi-nookdepot-site" src={weebjams} />
        <p>
          WeebJams <br />
          <a
            className="chbi-project-link"
            href="https://github.com/kbongco/Weeb-Jams"
          >
            Github Link
          </a>{" "}
          | Deployed Site
          <br />
          A project utilizing Spotify's API for search and combines with the Jikan API the unofficial
          My Anime List API which allows users to search for Anime Openings and Closings and see if they
          are licensed and are able to be listened to on Spotify. This project I used Vite instead of create
          react app to start up the project, as well as utilizing some various data structures to help with the
          performance of the project. 
          FrontEnd: React.js, Typescript, Styled Components, Material UI,  Vite, Figma used for prototyping and design
        </p>
      </div>
    </div>
  );
}
