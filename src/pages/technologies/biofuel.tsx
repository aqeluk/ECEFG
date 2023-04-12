import Header from '@/components/Header'
import React from 'react'
import Biofuel from '@/components/Biofuel'
import Content from '@/components/Content'

const biofuel = () => {
  return (
    <div>
      <Header showH2={false} showP2={false} p1Text='Biofuel Generator' backgroundImage='https://images.unsplash.com/photo-1680458841592-c3cb045ff0ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'/>
      <Biofuel />
      <Content
  title="At ECEFG we now offer an environmentally and ecologically beneficial process that prevents non-recyclable waste going to landfill. "
  subtitle=""
  button="Find Out More"
  buttonLink="/engagement/funding"
  backgroundImage=""
  backgroundColor="bg-blue-100"
/>
    </div>
  )
}

export default biofuel