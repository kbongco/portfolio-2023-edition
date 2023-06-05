import './Skills.scss'

export default function Skills() {
  return ( 
    <div className='chbi-skills-container'>
      <h3 className='chbi-skills-title'>Some tools of the trade 🛡</h3>
      <p className='chbi-skills-paragraph'>It's very dangerous to go alone! Take these! As someone who's gone the self taught route and the coding bootcamp route, I've picked up quite a bit of skills. So these are some things I've learned, used on the job and am currently learning.</p>
      <div className='chbi-skills-list-container'>
      <p className='chbi-skills-grid-title'>Languages</p>
        <div className='chbi-skills-language-container'>
        <p>HTML</p>
          <p>CSS/SCSS</p>
          <p>Javascript</p>
          <p>Typescript</p>
          <p>Python</p>
          <p>Ruby</p>
          <p>SQL/PSQL</p>
        </div>
        <p className='chbi-skills-grid-title'>
          Frameworks/Libraries
        </p>
        <div className='chbi-skills-grid-libraries-content'>
        <p>React.js</p>
          <p>Angular</p>
          <p>Flask</p>
          <p>Rails</p>
          <p>RxJS</p>
          <p>Redux</p>
        </div>
        <p className='chbi-skills-grid-title'>Tools</p>
        <div className='chbi-skills-grid-tools-content'>
        <p>VSCode</p>
          <p>Git/Github</p>
          <p>Jira</p>
          <p>Figma</p>
          <p>Postman</p>
          <p>Linux</p>
        </div>
        <p className='chbi-skills-grid-title'>Currently learning</p>
        <div className='chbi-skills-grid-currently-learning-content'>
        <p>Next.js</p>
          <p>GraphQL</p>
          <p>Improving my other listed skills!</p>
        </div>
      </div>
    </div>
  )
}