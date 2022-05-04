import React from 'react'
import Header from '../Header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div className='background-layout '>
    <div className='z-[1] flex flex-grow flex-col'>
      <Header />
      <main className='container mx-auto flex-grow px-4'>{children}</main>
    </div>
  </div>
)
export default Layout
