"use client"

import React from 'react';
import Profile from './components/profile';
import Skills from './components/skills';
import Projects from './components/projects';
import KnowMore from './components/knowMore';
import SocialNavbar from './components/socialNavbar';
import FloatingButton from './components/floatingMenu';
import BlogButton from './components/blogButton';
import WorkEx from './components/workEx';
import Link from 'next/link';
import Carousel from './components/carousel'

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
        <div className='h-screen'>
          <div className='flex flex-col items-center justify-center h-screen'>
            <Skills  />
            <Projects />
          </div>
          <div className='bottom-[9vh] relative'><KnowMore/></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
