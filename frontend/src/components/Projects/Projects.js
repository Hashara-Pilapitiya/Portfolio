import React from 'react';
import './projects.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { projects } from '../../Resources/projects';
import { FaGithub } from "react-icons/fa";

const Projects = () => {

    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (

    <div className='projects' id='projects'>

        <div className='about__header'>

            <SectionTitle title='Projects' />


            <div className='line' style={{marginTop: '-1rem', width: '25%', height: '0.25rem', background: '#8CABFF', borderRadius: 15}}></div>

        </div>

        <div className='projects__container'>
        
            <div className='project__title'>
                {projects.map((project, index) => (
                    <div onClick={() => {
                        setSelectedItemIndex(index);
                    }} key={index} className='project'>
                        <h1 className={(selectedItemIndex === index ? 'active' : 'non-active')}>{project.title}</h1>
                    </div>
                ))}
            </div>

            <div>

                <div className='project__details'>
                    <div className='project__details__image'>
                        <img src={projects[selectedItemIndex].image} alt='project' />
                    </div>

                    <div className='project__details__text'>
                        <h1>{projects[selectedItemIndex].title}</h1>
                        <h2>{projects[selectedItemIndex].technologies.join(', ')}</h2>
                        <p>{projects[selectedItemIndex].description}</p>
                        <div className='project__details__buttons'>
                            <a href={projects[selectedItemIndex].link}>
                                <FaGithub />
                            </a>
                            </div>
                    </div>
                    
                    </div>

            </div>

        </div>

    </div>

  )
}

export default Projects;