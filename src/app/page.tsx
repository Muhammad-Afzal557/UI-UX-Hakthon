import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Food from '@/components/Food'
import MiddlePage from '@/components/MiddlePage'
import Stats from '@/components/Stats'
import MenuSection from '@/components/MenuSection'

const Home = () => {
  return (
    <div className=''>
    <Navbar />
    <Hero />
     <About />
      <Food />
      <MiddlePage />
      <Stats />
      <MenuSection />


    </div>
  )
}

export default Home

