# Portfolio Website 

## Table of Contents
[Portfolio Website](#PortfolioWebsite)
- [Portfolio Website](#portfolio-website)
  - [Table of Contents](#table-of-contents)
  - [About this project](#about-this-project)
  - [Technologies and Libraries used](#technologies-and-libraries-used)
  - [Some Code Samples](#some-code-samples)
  - [Future Enhancements](#future-enhancements)

## About this project
Every developer needs a portfolio website to show off some stuff they have made and what they can do. While my site is very simple it gets the message across. This is the fifth version of my portfolio site made mobile first and I can say that I am extremely satisfied with this one, and more improvements will be added as needed! 

## Technologies and Libraries used
<ul>
<li> Create React App</li>
<li> React</li>
<li> SCSS</li>
<li> i18n</li>
<ul>

## Some Code Samples
I took some advice from one of my mentors from my previous roles and he suggested using a translation library for all the content on my site. Some examples of this: 

```
export default function About() {
  const { t } = useTranslation();
  return (
    <summary className='chbi-about-section' id='home'>
      <h1 className='chbi-greeting-about'>{t('hello-there')}</h1>
      <div className='chbi-greeting-about-container'>
        <p className='chbi-greeting-intro'>{t('introduction')} </p>
      </div>
      <div className='chbi-button-container'>
        <a href='https://www.linkedin.com/in/kathleen-bongco-11843197/'><button className='chbi-button-linkedin'>{t('linkedIn')}</button></a>
        <a href='http://github.com/kbongco'><button className='chbi-button-github'>{t('github')}</button></a>
      </div>
    </summary>
  )
}
```

In the About component, I used the useTranslation hook which would get the data from a .json file: 

```
{
  "home":"Home",
  "about": "About",
  "projects": "Projects",
  "contact": "Contact me",
  "hello-there": "Hello, there! 👀",
  "introduction": "My name is Kathleen and I am a Front end engineer with experience creating responsive, user-friendly, and modern UIs with modern Javascript frameworks!",
  "linkedIn": "LinkedIn",
  "github": "Github",
```

I used a translation library to mimic how it would be in a production app, similar to one of the projects I've worked on previously in my career. 

## Future Enhancements

My portfolio site is constantly evolving with new projects that I am working on that I want to show off. That being said I know the projects section is hard-coded in instead of using the translation file above. I have something that I want to do with that, that may involve airtable :) 
