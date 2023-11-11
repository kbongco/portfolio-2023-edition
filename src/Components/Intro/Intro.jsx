import './Intro.scss'
import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation();
  return (
    <div className='chbi-intro-container' id='about'>
      <h2 className='chbi-intro-text'>{t('about')}</h2>
      <div className='chbi-intro-information'>
        <p>{t('intro-one')}</p>
        <p> {t('intro-two')} </p>
        <p>{t('intro-three')}</p>
      </div>
    </div>
  )
}