"use client"

import React from 'react';
import Profile from './components/profile';
import Skills from './components/skills';
import Quote from './components/quote';
import Projects from './components/projects';
import KnowMore from './components/knowMore';
import SocialNavbar from './components/socialNavbar';
import FloatingButton from './components/floatingMenu';

const Home: React.FC = () => {
  return (
    <div className='container min-h-screen'>
      <SocialNavbar />
      <div className='floating_button'>
        <FloatingButton />
      </div>
      <section>
        <Profile />
        <Quote />
      </section>
      <section>
        <Skills  />
        <Projects />
        <KnowMore />
      </section>
    </div>
  );
}

export default Home;
