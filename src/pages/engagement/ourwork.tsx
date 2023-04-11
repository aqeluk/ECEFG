import Header from '@/components/Header'
import TwoColumn from '@/components/TwoColumn'
import React from 'react'

const ourwork = () => {
  return (
    <div>
      <Header
        showH2={false}
        p1Text="Working with ECEFG"
        showP2={false}
        backgroundImage="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
      />
      <TwoColumn />
    </div>
  )
}

export default ourwork
