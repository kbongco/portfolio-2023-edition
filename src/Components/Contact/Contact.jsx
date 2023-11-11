import './Contact.scss'
import { useTranslation } from "react-i18next";

export default function Contact() {

  const isEmployed = false;
  const { t } = useTranslation();

  return (
    <div className='chbi-contact-container' id='contact'>
      <h5 className='chbi-contact-header'>Contact me!</h5>
      {isEmployed ? 
        <div className='chbi-currently-employed-message'><p className='chbi-employed-text'>{t('contact-description-employed')}</p></div> : <div className='chbi-unemployed-message'><p className='chbi-unemployed-text'>{t('contact-description-unemployed')}</p> </div>}
      <div className='chbi-button-container chbi-button-container-contact'>
        <a href='https://forms.gle/ZsSQgBXtoL2XKHwN8'><button className='chbi-button-contact'>{t('contact')}!</button></a>
     </div>
    </div>
  )
}