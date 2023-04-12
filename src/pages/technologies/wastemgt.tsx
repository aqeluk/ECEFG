import Header from '@/components/Header'
import React from 'react'
import WasteMGT from '@/components/WasteMGT'
import Content from '@/components/Content'

const wastemgt = () => {
  return (
    <div>
      <Header showH2={false} showP2={false} p1Text='Managing Waste' backgroundImage='https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'/>
      <WasteMGT />
      <Content
  title="We provide a process that is both eco-friendly and environmentally responsible, preventing non-recyclable waste from ending up in landfills."
  subtitle="We deliver a completely financed, end-to-end solution that not only diminishes waste exports but also curtails the disposal of plastics in our oceans. Simultaneously, we generate raw materials with an expanding array of applications."
  button="Learn More Today"
  buttonLink="/engagement/funding"
  backgroundImage=""
  backgroundColor="bg-blue-100"
/>
    </div>
  )
}

export default wastemgt