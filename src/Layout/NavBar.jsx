import './NavBar.scss'

export default function NavBar() {
  return (
    <nav className='chbi-nav-container'>
      <div className='chbi-nav-links'>
        <a className='chbi-links'href='#home'>Home</a>
        <a className='chbi-links'href='#about'>About</a>
        <a className='chbi-links'href='#projects'>Projects</a>
        <a className='chbi-links'href='#contact'>Contact Me</a>
      </div>
    </nav>
  )
}