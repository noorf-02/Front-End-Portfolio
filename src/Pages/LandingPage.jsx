import React from 'react'
import Nav from '../components/Shared/Nav'
import Hero from '../components/UI/Hero'
import SectionServices from '../components/UI/SectionServices'
import Projects from '../components/UI/Projects'
import Footer from '../components/Shared/Footer'

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <SectionServices/>
      <Projects/>
    </div>
  )
}
