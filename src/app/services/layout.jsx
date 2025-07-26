import AgencyFooter from '@/components/sections/AgencyFooter'
import Header from '@/components/sections/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <AgencyFooter />
    </div>
  )
}

export default layout
