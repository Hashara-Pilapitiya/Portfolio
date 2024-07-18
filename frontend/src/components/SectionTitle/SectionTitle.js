import React from 'react';
import './sectiontitle.css';

const SectionTitle = ({title}) => {
  return (
    <div className='title'>
    
        <h1 className='section__title'>{title}</h1>
    
        <div className='line'>
            
        </div>

    </div>

  )
}

export default SectionTitle;