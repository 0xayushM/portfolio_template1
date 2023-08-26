"use client"

import Profile from './components/profile'
import Skills from './components/skills'
import Quote from './components/quote'
import Projects from './components/projects'
import KnowMore from './components/knowMore'
import SocialNavbar from './components/socialNavbar'

export default function Home() {
  return (
    <div className='container min-h-screen' >
      <SocialNavbar/>
      <Profile/>
      <Quote/>
      <Skills/>
      <Projects/>
      <KnowMore/>
    </div>
  )
}
