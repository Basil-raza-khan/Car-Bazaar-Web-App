import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import Section from './components/Section'
import Footer from './components/Footer'


function Home() {
  return (
    <div>
        <Header />
        <Hero/>
        <Category />
        <MostSearchedCar />
        <Section/>
        <Footer />

    </div>
  )
}

export default Home