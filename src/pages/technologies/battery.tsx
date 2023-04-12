import Battery from '@/components/Battery'
import Content from '@/components/Content'
import Header from '@/components/Header'
import React from 'react'

const battery = () => {
  return (
    <div>
      <Header showH2={false} showP2={false} p1Text='Battery Energy Storage Systems'  backgroundImage='https://images.unsplash.com/photo-1592318348310-f31b61a931c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'/>
      <Battery />
      <Content button='Find Out More' buttonLink='/engagement/ourwork' title='' subtitle='Work With Us with Funding  On Your Project' backgroundImage='https://images.unsplash.com/photo-1551892589-865f69869476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'/>
    </div>

  )
}

export default battery