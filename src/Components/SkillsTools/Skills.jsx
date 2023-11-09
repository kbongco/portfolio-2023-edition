import './Skills.scss'
import { Languages, frameworksAndLibraries, tools, currentLearning } from '../../constants'

export default function Skills() {
  return ( 
    <div className='chbi-skills-container'>
      <h3 className='chbi-skills-title'>Some tools of the trade 🛡</h3>
      <p className='chbi-skills-paragraph'>It's very dangerous to go alone! Take these! As someone who's gone the self taught route and the coding bootcamp route, I've picked up quite a bit of skills. So these are some things I've learned, used on the job and am currently learning.</p>
      <div className='chbi-skills-list-container'>
      <p className='chbi-skills-grid-title'>Languages</p>
        <div className='chbi-skills-language-container'>
          <ul>
            {Languages.map((lang) => <li>{lang}</li>)}
          </ul>
        </div>
        <p className='chbi-skills-grid-title'>
          Frameworks/Libraries
        </p>
        <div className='chbi-skills-grid-libraries-content'>
          <ul>
            {frameworksAndLibraries.map((frame) => 
              <li>{frame}</li>)}
          </ul>
        </div>
        <p className='chbi-skills-grid-title'>Tools</p>
        <div className='chbi-skills-grid-tools-content'>
          <ul>
            {tools.map((tool) => <li>{tool}</li>)}
          </ul>
        </div>
        <p className='chbi-skills-grid-title'>Currently learning</p>
        <div className='chbi-skills-grid-currently-learning-content'>
          <ul>
            {currentLearning.map((current) => <li>{current}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}