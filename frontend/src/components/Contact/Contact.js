import React from 'react';
import './contact.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Lottie from 'lottie-react';
import ContactImage from '../../assets/Contact.json';

const Contact = () => {

    const user = {
        name: 'Hashara Pilapitiya',
        email: 'hasharanethmi2020@gmail.com',
        phone: '+9471 759 5301',
        address: 'Gampaha, Sri Lanka',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        country: 'Sri Lanka'
    }

    
  return (
    <div className='contact' id='contact'>

        <div className='about__header'>

            <SectionTitle title='Say Hello' />


            <div className='line' style={{marginTop: '-1rem', width: '25%', height: '0.25rem', background: '#8CABFF', borderRadius: 15}}></div>

        </div>

        <div className='contact__container'>

            <div className='contact__info'>

                <div className='contact__item'>
                    <div className='contact__icon'>
                        <span><FaUser /></span>
                    </div>
                    <div className='contact__text'>
                        <h3>{user.name}</h3>
                    </div>
                </div>

                <div className='contact__item'>
                    <div className='contact__icon'>
                        <span><MdEmail /></span>
                    </div>
                    <div className='contact__text'>
                        <h3>{user.email}</h3>
                    </div>
                </div>

                <div className='contact__item'>
                    <div className='contact__icon'>
                        <span><FaLocationDot /></span>
                    </div>
                    <div className='contact__text'>
                        <h3>{user.address}</h3>
                    </div>
                </div>

                <div className='contact__item'>
                    <div className='contact__icon'>
                        <span><FaPhone /></span>
                    </div>
                    <div className='contact__text'>
                        <h3>{user.phone}</h3>
                    </div>
                </div>

                <div className='contact__item'>
                    <div className='contact__icon'>
                        <span><FaLinkedin /></span>
                    </div>
                    <div className='contact__text'>
                        <a href='https://www.linkedin.com/in/hashara-pilapitiya-939186220/'><h3>{user.linkedin}</h3></a>
                    </div>
                </div>

                <div className='contact__item'>
                    <div className='contact__icon'>
                        <span><FaGithub /></span>
                    </div>
                    <div className='contact__text'>
                        <a href='https://github.com/Hashara-Pilapitiya'><h3>{user.github}</h3></a>
                    </div>
                </div>

            </div>

            <div className='contact__image'>

                <Lottie animationData={ContactImage} style={{width: '500px', height: '500px'}} />

            </div>

        </div>

    </div>
  )
}

export default Contact;