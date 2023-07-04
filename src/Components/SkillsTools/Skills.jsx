import './Skills.scss'

export default function Skills() {
  return ( 
    <div className='chbi-skills-container'>
      <h3 className='chbi-skills-title'>Some tools of the trade 🛡</h3>
      <p className='chbi-skills-paragraph'>It's very dangerous to go alone! Take these! As someone who's gone the self taught route and the coding bootcamp route, I've picked up quite a bit of skills. So these are some things I've learned, used on the job and am currently learning.</p>
      <div className='chbi-skills-list-container'>
      <p className='chbi-skills-grid-title'>Languages</p>
        <div className='chbi-skills-language-container'>
          <ul>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>SQL/PSQL</li>
            <li>Node.js</li>
          </ul>
        </div>
        <p className='chbi-skills-grid-title'>
          Frameworks/Libraries
        </p>
        <div className='chbi-skills-grid-libraries-content'>
          <ul>
            <li>React.js</li>
            <li>Angular</li>
            <li>Flask</li>
            <li>Rails</li>
            <li>RxJS</li>
            <li>Redux</li>
            <li>Express</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <p className='chbi-skills-grid-title'>Tools</p>
        <div className='chbi-skills-grid-tools-content'>
          <ul>
            <li>VSCode</li>
            <li>Git/Github</li>
            <li>Jira</li>
            <li>Figma</li>
            <li>Postman</li>
            <li>Linux</li>
          </ul>
        </div>
        <p className='chbi-skills-grid-title'>Currently learning</p>
        <div className='chbi-skills-grid-currently-learning-content'>
          <ul>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Improving my other listed skills!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}