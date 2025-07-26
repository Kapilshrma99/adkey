import AgencyFooter from '@/components/sections/AgencyFooter'
import Header from '@/components/sections/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <AgencyFooter />
    </>
  )
}

export default layout
