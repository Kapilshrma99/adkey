import AgencyFooter from '@/components/sections/AgencyFooter'
import Header from '@/components/sections/Header'

import HomeHero from '@/components/sections/HomeHero'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <HomeHero />
      {children}
      <AgencyFooter />
    </div>
  )
}

export default Layout
