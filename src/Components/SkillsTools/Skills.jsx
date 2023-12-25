import './Skills.scss'
import { skills } from '../../constants'
import { useTranslation } from "react-i18next";
import SkillsCard from '../SkillsDisplayCard/SkillsCard';

export default function Skills() {
  const { t } = useTranslation();
  return ( 
    <div className='chbi-skills-container'>
      <h3 className='chbi-skills-title'>{t('tools-header')}</h3>
      <p className='chbi-skills-paragraph'>{t('tools-description')}</p>
      <div className='chbi-skills-card-container-flex'>
      {skills.map((skill) => (
          <SkillsCard 
            name={skill.name}
          icon={skill.icon}
          />
      ))}
        </div>
    </div>
  )
}