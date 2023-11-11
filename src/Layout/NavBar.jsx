import './NavBar.scss'
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { t } = useTranslation();

  return (
    <nav className='chbi-nav-container'>
      <div className='chbi-nav-links'>
        <a className='chbi-links' href='#home'>{t('home')}</a>
        <a className='chbi-links' href='#about'>{t('About')}</a>
        <a className='chbi-links'href='#projects'>{t('Projects')}</a>
        <a className='chbi-links'href='#contact'>{t('contact')}</a>
      </div>
    </nav>
  )
}