import './ProjectDisplayCard.scss'

export default function ProjectDisplayCard(props) {
  const { image, title, description, githubLink, figmaLink, deployedLink } = props;
  return ( 
    <>
      <div className='display-card-container'>
        <div className='display-card-picture-container'>
        <img
          className="display-card-photo"
          src={image}
        /> 
        </div>
        <div className='display-card-heading'>
          <h2 className='display-card-heading-text'>{title}</h2>
        </div>
        <div className='display-card-project-description'>
          <p>{description}</p>
        </div>
        <div className='display-card-project-links'>
        <a className='github-link' href={githubLink} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a className='figma-link' href={figmaLink} target="_blank" rel="noopener noreferrer">
          Design
        </a>
        <a className='deployed-link' href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Site
        </a>
        </div>
      </div>
    </>
  )
}