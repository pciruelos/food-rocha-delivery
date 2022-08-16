import React from 'react'
import Foods from './components/Foods'
import HeadlineCards from './components/HeadlineCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Foods/>
    </div>
  )
}

export default App