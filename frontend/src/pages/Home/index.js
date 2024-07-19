import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Intro/Hero';
import About from '../../components/About/About';
import Experiences from '../../components/Experiences/Experiences';
import Projects from '../../components/Projects/Projects';
import Courses from '../../components/Courses/Courses';

function Home() {
  return (
    <div>
      
      <Header />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Courses />

    </div>
  )
}

export default Home;