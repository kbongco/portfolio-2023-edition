import "./SocialLinks.css";
import { Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function SocialLinks() {
  return (
    <>
      <section className="social-links-portfolio">
        <Heading as="h1" size="lg" className="social-header">
          Social Links
        </Heading>
        <p>
          I am currently looking for my next quest where I can leverage some of
          my skills in web development specifically in full stack development. If you like what you see and you want me to join your party and help your current quest, help in your latest venture or product, or even if you just want to chat. Here are some ways you can contact me!
        </p>
        <div className="social-links-icon-container">
          <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
          <a href='http://github.com/kbongco'>
          <FontAwesomeIcon icon={faGithubAlt} className="social-icons" />
          </a>
          <a href="https://forms.gle/1fbUHyajsvyAS9e38">
            <FontAwesomeIcon icon={faEnvelope} className="social-icons" />
          </a>
        </div>
      </section>
    </>
  );
}
