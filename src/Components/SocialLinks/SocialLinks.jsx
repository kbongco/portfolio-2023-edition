import "./SocialLinks.css";
import { Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,faGithubAlt} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <>
      <section className="social-links-portfolio">
        <Heading as="h1" size="lg" className="social-header">
          Social Links
        </Heading>
        <div className="social-links-icon-container">
          <FontAwesomeIcon icon={faLinkedin} className='social-icons' />
          <FontAwesomeIcon icon={faGithubAlt}  className='social-icons'/>
        </div>
      </section>
    </>
  );
}
