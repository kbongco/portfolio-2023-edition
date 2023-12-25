import './About.scss'
import { useTranslation } from "react-i18next";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  const { t } = useTranslation();
  return (
    <summary className='chbi-about-section' id='home'>
      <h1 className='chbi-greeting-about'>{t('hello-there')}</h1>
      <div className='chbi-greeting-about-container'>
        <p className='chbi-greeting-intro'>{t('introduction')} </p>
      </div>
      <div className='chbi-button-container'>
        <a href='http://github.com/kbongco'>
        <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/kathleen-bongco-11843197'>
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </summary>
  )
}