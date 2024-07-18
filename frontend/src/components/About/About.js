import React from 'react';
import './about.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import AboutImage from '../../assets/About.png';

const About = () => {

    const skills = [
        'JavaScript',
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'HTML',
        'CSS',
        'SASS',
        'Material-UI',
        'NPM',
        'Yarn',
        'VS Code',
        'Postman',
        'Git',
        'Figma',
        'Trello'
    ];

  return (
    <div className='about' id='about'>

        <div className='about__header'>

            <SectionTitle title='About Me' />

        
            <div className='line' style={{marginTop: '-1rem', width: '25%', height: '0.25rem', background: '#8CABFF', borderRadius: 15}}></div>

        </div>

        <div className='about__content'>

            <div className='about__left'>
                <img src={AboutImage} alt='about' />
            </div>

            <div className='about__right'>
                <p className='about__text'>
                    Hello! I'm Hashara Pilapitya, a passionate and experienced full stack web developer with a strong background in building dynamic and responsive web applications. With many experiences, I have honed my skills in both front-end and back-end development, allowing me to create seamless and efficient user experiences from start to finish.
                </p>

                <br />

                <p>
                    I began my career with a deep curiosity about how things work on the web. Starting with basic HTML and CSS, I quickly expanded my knowledge to include JavaScript, various front-end frameworks, and server-side technologies. Over the years, I've had the opportunity to work on diverse projects, ranging from small business websites to large-scale web applications.
                </p>

                <br />

                <p>
                    I believe in writing clean, maintainable code and following best practices to ensure the highest quality of work. Collaboration and communication are key to successful projects, and I strive to be a team player who contributes positively to every project I am a part of. I am always eager to learn new technologies and improve my skills to stay current in this ever-evolving field.
                </p>


            </div>
        </div>

        <div className='about__skills'>
            <h1 className='skills__title'>Here are few technologies and tools I've been working with recently.</h1>

            <div className='skills__list'>
                {skills.map((skill, index) => (
                    <div className='skill' key={index}>
                        {skill}
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default About;