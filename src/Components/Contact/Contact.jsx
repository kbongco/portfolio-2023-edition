import './Contact.scss'

export default function Contact() {

  const isEmployed = false;

  return (
    <div className='chbi-contact-container' id='contact'>
      <h5 className='chbi-contact-header'>Contact me!</h5>
      {isEmployed ? 
        <div className='chbi-currently-employed-message'><p className='chbi-employed-text'>I am currently not looking for any new roles at the moment, but I am down to help out in some way or form and to chat! Send me a message below when filling out this form!</p></div> : <div className='chbi-unemployed-message'><p className='chbi-unemployed-text'>I am currently looking for new roles in front end development, UX Engineering, and full stack roles. If you like what you see or maybe just want to chat, send me a message below when filling out this form!</p> </div>}
      <div className='chbi-button-container chbi-button-container-contact'>
      <a href='https://forms.gle/Lw5nBzXojL4SGLzA7'><button className='chbi-button-contact'>Contact Me!</button></a>
      </div>
    </div>
  )
}