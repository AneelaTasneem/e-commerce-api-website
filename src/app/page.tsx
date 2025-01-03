'use client'
import React from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Crausel from './components/Crausel'
import Progressor from './components/Progressor'
import ProductList from './components/ProductList'
import Offer from './components/Offer'
import Card from './components/Card'
import Testimonals from './components/Testimonals'
import Footer from './components/Footer'
import Burgers from './components/Burgers'
import Menuitems from './components/Menuitems'
import Reservation from './components/Reservation'
import Menu from './components/Menuitems'
import Home from './components/Menuitems'

const page = () => {
  return (
    <div className='bg-black min-h-screen'>
      <Navbar />
      <Crausel />
      <Progressor />
      <Burgers />
      <Banner />
      <ProductList />
      <Menu />
      <Offer />
      <Card />
      <Reservation />
      <Testimonals />
      <Footer />
    </div>
  )
}

export default page
