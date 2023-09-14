"use client"

import React from 'react';
import Profile from './components/profile';
import Skills from './components/skills';
import Projects from './components/projects';
import KnowMore from './components/knowMore';
import SocialNavbar from './components/socialNavbar';
import FloatingButton from './components/floatingMenu';
import BlogButton from './components/blogButton';

const Home: React.FC = () => {
  return (
    <div className='container'>
      <SocialNavbar />
      <div className='floating_button'>
        <FloatingButton />
      </div>
      <div className='blog_button_1'>
      <BlogButton/>
      </div>
      <section id='profile' className='flex flex-col items-center justify-center'>
        <Profile />
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
