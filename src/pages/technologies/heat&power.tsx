import CHP from '@/components/CHP'
import Header from '@/components/Header'
import React from 'react'

const heatandpower = () => {
  return (
    <div>
      <Header showH2={false} showP2={false} p1Text='Heat and Power Systems'  backgroundImage='https://images.unsplash.com/photo-1466629437334-b4f6603563c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1756&q=80'/>
      <CHP/>
      <Header showH2={false} showP2={false} backgroundImage='https://plus.unsplash.com/premium_photo-1675131729474-f0e2ae128539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80' p1Text='Combining Heat and Poower' />
    </div>
  )
}

export default heatandpower