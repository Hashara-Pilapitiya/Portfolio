import React from 'react';
import './hero.css';
import HeroImage from '../../assets/Hero.jpg';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const PDF_FILE_URL = 'http://localhost:3000/CV.pdf';

const Hero = () => {

    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }


  return (
    <div className='hero'>
        <div className='hero__text'>

            <h1 className='first'>Hii , I am</h1>

            <h1 className='second'>Hashara Pilapitiya</h1>

            <h1 className='third'>I am a Full Stack Developer</h1>

            <p> I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills. I am currently looking for new opportunities to work on exciting projects and collaborate with other developers. </p>

            <button onClick={() => {downloadFileAtURL(PDF_FILE_URL)}} className='btn' id=''><span>Download CV</span></button>

            <div className='social__icons'>
                <a href='https://github.com/Hashara-Pilapitiya' target='_blank' rel='noreferrer'>
                    <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/hashara-pilapitiya-939186220/'>
                    <FaLinkedin />
                </a>
                <a href='https://www.facebook.com/hashara.nethmi.35/'>
                    <FaFacebook />
                </a>
            </div>

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