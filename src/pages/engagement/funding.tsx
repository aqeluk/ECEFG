import Content from '@/components/Content'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import React from 'react'

const funding = () => {
  return (
    <div>
      <Header showH2={false} showP2={false} p1Text='Project Funding' backgroundImage='https://images.unsplash.com/photo-1551836022-aadb801c60ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
      <MainContent />
      <Content title='' subtitle='' button='Learn More About Us' buttonLink='/aboutus' backgroundImage='https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'/>
    </div>
  )
}

export default funding