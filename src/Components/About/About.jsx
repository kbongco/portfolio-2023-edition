import './About.scss'
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <summary className='chbi-about-section' id='home'>
      <h1 className='chbi-greeting-about'>{t('hello-there')}</h1>
      <div className='chbi-greeting-about-container'>
        <p className='chbi-greeting-intro'>{t('introduction')} </p>
      </div>
      <div className='chbi-button-container'>
        <a href='https://www.linkedin.com/in/kathleen-bongco-11843197/'><button className='chbi-button-linkedin'>{t('linkedIn')}</button></a>
        <a href='http://github.com/kbongco'><button className='chbi-button-github'>{t('github')}</button></a>
      </div>
    </summary>
  )
}