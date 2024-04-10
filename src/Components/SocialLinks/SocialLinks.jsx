import "./SocialLinks.css";
import { Heading } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../Context/toggleContext";

export default function SocialLinks() {
  const { theme } = useTheme();
  
  return (
    <>
      <section className="social-links-portfolio">
        <Heading as="h1" size="lg" className="social-header">
          {theme === "videoGame" ? 'Social Links' : 'Contact'}
        </Heading>
        <p className='contact-text'>
          {theme === "videoGame" ? "I am currently looking for my next quest where I can leverage some of my skills in web development. Specifically in full stack. If you like what you see and want me to join your party and help your current quest, help in your latest venture, or even if you just want to chat. Here are some links you can use to contact me! " : 'I am currently looking for my next role where I can use my skills in web development, specifically in full stack! If you like what you see and you would like to speak to me about any new roles, want some help in design or development, or if you just want to chat here are some links you can use to contact me!'}
        </p>
        <div className="social-links-icon-container">
          <a href='https://www.linkedin.com/in/kathleen-bongco-11843197/'>
          <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
          </a>
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
