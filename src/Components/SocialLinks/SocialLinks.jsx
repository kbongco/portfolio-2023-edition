import "./SocialLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useCopy } from "../../Context/toggleContext";

export default function SocialLinks() {
  const { social } = useCopy();

  return (
    <section className="social-links-portfolio">
      <h1 className="social-header">{social.heading}</h1>
      <p className="contact-text">{social.text}</p>
      <div className="social-links-icon-container">
        <a href="https://www.linkedin.com/in/kathleen-bongco-11843197/">
          <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
        </a>
        <a href="http://github.com/kbongco">
          <FontAwesomeIcon icon={faGithubAlt} className="social-icons" />
        </a>
        <a href="https://forms.gle/1fbUHyajsvyAS9e38">
          <FontAwesomeIcon icon={faEnvelope} className="social-icons" />
        </a>
      </div>
    </section>
  );
}
