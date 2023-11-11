import './Skills.scss'
import { Languages, frameworksAndLibraries, tools, currentLearning } from '../../constants'
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  return ( 
    <div className='chbi-skills-container'>
      <h3 className='chbi-skills-title'>{t('tools-header')}</h3>
      <p className='chbi-skills-paragraph'>{t('tools-description')}</p>
      <div className='chbi-skills-list-container'>
        <p className='chbi-skills-grid-title'>{t('languages')}</p>
        <div className='chbi-skills-language-container'>
          <ul>
            {Languages.map((lang) => <li>{lang}</li>)}
          </ul>
        </div>
        <p className='chbi-skills-grid-title'>
          {t('frameworks')}
        </p>
        <div className='chbi-skills-grid-libraries-content'>
          <ul>
            {frameworksAndLibraries.map((frame) => 
              <li>{frame}</li>)}
          </ul>
        </div>
        <p className='chbi-skills-grid-title'>{t('tools')}</p>
        <div className='chbi-skills-grid-tools-content'>
          <ul>
            {tools.map((tool) => <li>{tool}</li>)}
          </ul>
        </div>
        <p className='chbi-skills-grid-title'>{t('currently-learning')}</p>
        <div className='chbi-skills-grid-currently-learning-content'>
          <ul>
            {currentLearning.map((current) => <li>{current}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}