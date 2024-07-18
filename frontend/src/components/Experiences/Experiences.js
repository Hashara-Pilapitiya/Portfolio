import React from 'react';
import './experiences.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { experiences } from '../../Resources/experiences';

const Experiences = () => {

    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (

    <div className='experiences' id='experiences'>

        <div className='about__header'>

            <SectionTitle title='Experiences' />


            <div className='line' style={{marginTop: '-1rem', width: '25%', height: '0.25rem', background: '#8CABFF', borderRadius: 15}}></div>

        </div>

        <div className='experiences__container'>
        
            <div className='experience__period'>
                {experiences.map((experience, index) => (
                    <div onClick={() => {
                        setSelectedItemIndex(index);
                    }} key={index} className='experience'>
                        <h1 className={(selectedItemIndex === index ? 'active' : 'non-active')}>{experience.period}</h1>
                    </div>
                ))}
            </div>

            <div>

                <div className='experience__details'>
                    <h1>{experiences[selectedItemIndex].title}</h1>
                    <h2>{experiences[selectedItemIndex].company}</h2>
                    <p>{experiences[selectedItemIndex].description}</p>
                    </div>

            </div>

        </div>

    </div>

  )
}

export default Experiences;