import React from 'react';
import './courses.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { courses } from '../../Resources/courses';

const Courses = () => {

    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  return (

    <div className='courses' id='courses'>

        <div className='about__header'>

            <SectionTitle title='Courses' />


            <div className='line' style={{marginTop: '-1rem', width: '25%', height: '0.25rem', background: '#8CABFF', borderRadius: 15}}></div>

        </div>

        <div className='courses__container'>
        
            <div className='course__title'>
                {courses.map((course, index) => (
                    <div onClick={() => {
                        setSelectedItemIndex(index);
                    }} key={index} className='course'>
                        <h1 className={(selectedItemIndex === index ? 'active' : 'non-active')}>{course.title}</h1>
                    </div>
                ))}
            </div>

            <div>

                <div className='course__details'>

                    <div className='course__details__text'>
                        <h1>{courses[selectedItemIndex].title}</h1>
                        <p>{courses[selectedItemIndex].description}</p>
                    </div>

                    <div className='course__details__image'>
                        <img src={courses[selectedItemIndex].image} alt='course' />
                    </div>

                    
                    </div>

            </div>

        </div>

    </div>

  )
}

export default Courses;