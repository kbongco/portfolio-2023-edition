import './About.scss'
export default function About() {
  return (
    <summary className='chbi-about-section' id='home'>
      <h1 className='chbi-greeting-about'>Hello, there! 👀</h1>
      <div className='chbi-greeting-about-container'>
        <p className='chbi-greeting-intro'>My name is Kathleen and I am a UX Engineer that loves creating new applications that solve creative problems while thinking about design and accessibility for users! </p>
      </div>
      <div className='chbi-button-container'>
        <a href='https://www.linkedin.com/in/kathleen-bongco-11843197/'><button className='chbi-button-linkedin'>LinkedIn</button></a>
        <a href='http://github.com/kbongco'><button className='chbi-button-github'>Github</button></a>
      </div>
    </summary>
  )
}