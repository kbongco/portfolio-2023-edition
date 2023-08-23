import './Projects.scss'
import samples from '../../assets/samples.png'
export default function Projects() {
  return (
    <div className='chbi-projects-container' id='projects'>
      <h4 className="chbi-projects-header">Projects and Cool things</h4>
      <p>Here are some projects I've worked on in the past and some of the cool stuff I am currently working and playing around with! This is just a small set of projects I have worked on, if you would like to see some source code check out my <a className='chbi-github-link'href='http://github.com/kbongco'>Github</a>! </p>
      <div className='chbi-projects-container-details'>
        <img className='chbi-portfolio-site chbi-portfolio-site-mobile 'src="https://i.ibb.co/7QCdtM2/portfolio.png"/>
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
        <img className='chbi-nookdepot-site' src={samples} />
        <p>Sample Submission<br />
        <a  className='chbi-project-link' href='https://github.com/kbongco/sample-management-frontend'>Github Link</a> | Deployed Site<br/>
          A passion project of mine that solves a problem that inspired me to go into tech from when I was working in the food industry! A CRUD application which replaces the usage of excel sheets which a lot of labs like to use to keep track of samples going in and out of testing. This will be a full stack application. React/Typescript is used for the front-end, Jest/React Testing Library is used to write tests, Figma is used for designing and prototyping, Storybook is used for components. Backend language is to be determined.<br/>
        </p>
      </div>
    </div>
  )
}