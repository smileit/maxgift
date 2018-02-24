import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom'
import Menu from './components/menu'
import Banner from './components/banner'
import Footer from './components/footer'
import WhatWeOffer from './components/what_we_offer'
import WhoWeAre from './components/who_we_are'
import WhoWeServe from './components/who_we_serve'


class Home extends Component {
  render() {
    return (
      <div className='text-cl'>
       <Menu />
       <Banner />
       <WhoWeAre />
       <WhatWeOffer />
       <WhoWeServe />
       <Footer />
      </div>
    );
  }
}

export default Home;