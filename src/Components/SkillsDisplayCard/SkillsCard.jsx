import './SkillsCard.scss';

export default function SkillsCard({icon, name}) {
  return (
    <>
      <div className="chbi-skills-card-container">
        <div className='chbi-skills-card-content'>
          {icon}
        </div>
        <div className='chbi-skills-card-name'>
          {name}
        </div>
      </div>
    </>
  )
}