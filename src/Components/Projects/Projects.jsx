import './Projects.scss'
export default function Projects() {
  return (
    <div className='chbi-projects-container' id='projects'>
      <h4 className="chbi-projects-header">Projects and Cool things</h4>
      <p>Here are some projects I've worked on in the past and some of the cool stuff I am currently working and playing around with!</p>
      <div className='chbi-projects-container-details'>
        <img className='chbi-portfolio-site'src="https://i.ibb.co/7QCdtM2/portfolio.png"/>
        <p>Portfolio Site<br />
        Fun fact: this is the sixth rendition of my portfolio site. I decided to keep this very simple and not flashy. My portfolio site is a constant work in progress and I'm proud to say that this will be the best version yet! 
Built using: 
React.js, SCSS, 
Figma was used for prototyping </p>
        <img className='chbi-lifting-data'src='https://i.ibb.co/qncfn6F/lifting.png'/>
        <p>My Powerlifting Trends 2022<br />
        Last December, I competed at a powerlifting meet where I thought I would have the chance at qualifying for nationals. Prior to the meet, I would send the numbers I would hit for heavy singles to my coach so he would determine what numbers I would hit come meet day. I decided to do a little analysis with the numbers I had and created a “mini-full stack” application using this data I had. This is a responsive mobile first app I created.
Built with: 
Ruby/Rails for back end 
React.js, Chart.js, SCSS, </p>
        <img className='chbi-nookdepot-site'src='https://i.ibb.co/0fsxCr4/Screen-Shot-2023-06-04-at-2-53-20-PM.png'/>
        <p>NookDepot<br />
          The final project from my time at Coding Bootcamp. An Etsy clone themed to the game of animal crossing where users can set up shops, trade items, and look for seasonal goodies!
          Built with: Ruby/Rails for back end
        React.js and CSS</p>
      </div>
    </div>
  )
}