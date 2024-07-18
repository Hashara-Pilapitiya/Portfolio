import React from 'react';
import './hero.css';
import HeroImage from '../../assets/Hero.jpg';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__text'>

            <h1 className='first'>Hii , I am</h1>

            <h1 className='second'>Hashara Pilapitiya</h1>

            <h1 className='third'>I am a Full Stack Developer</h1>

            <p> I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects and collaborate with other developers. </p>

        </div>

        <div className='hero__image'>
            
            <div className='box01'>
                <div className='box02'>
                    <div className='image__container'>
                        <img src={HeroImage} alt='hero' />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero;