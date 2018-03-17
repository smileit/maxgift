import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import { NavLink as Link } from 'react-router-dom'
import Menu from './components/menu'
import Banner from './components/banner'
import Footer from './components/footer'
import WhatWeOffer from './components/what_we_offer'
import WhoWeAre from './components/who_we_are'
import WhoWeServe from './components/who_we_serve'
import Popup from '../components/popup'
import CONSTS from './consts'
import Details from './components/product-detail'

const { MENU, BANNER, WHO_WE_ARE, WHAT_WE_OFFER, WHO_WE_SERVE, FOOTER } = CONSTS.SECTION


class Home extends Component {
  constructor (props) {
    super(props)
    this.sections = [MENU, BANNER, WHO_WE_ARE, WHAT_WE_OFFER, WHO_WE_SERVE, FOOTER]
    this.positionInfo = {}
    this.state = {currentProductId: null}
  }

  getPositionInfo () {
    return this.sections.reduce((acc, section) => {
      const sectionNode = findDOMNode(this.refs[section]).getBoundingClientRect()
      return {...acc, last: (+acc.last) + sectionNode.height, [section]: acc.last}
    }, {last: 0})
  }
  getSectionPosition = section => this.getPositionInfo()[section]
  scrollTo (position) {
    const page = document.getElementsByTagName('html')[0]
    const body = document.getElementsByTagName('body')[0]
    const scrollHeight = position - (page.scrollTop || body.scrollTop)
    let tick = 5
    let timer = () => setTimeout(() => {
      if (!tick) return
      tick = tick - 1
      body.scrollTop = page.scrollTop = tick ? page.scrollTop + (scrollHeight / 5) : position
      timer()
    }, 30)
    timer()
  }
  showPopup = id => {
    this.setState({currentProductId: id})
    this.popup.show()
  }
  render() {
    return (
      <div className='text-cl'>
       <Menu ref={MENU} onMenuClick={(section) => this.scrollTo(this.getSectionPosition(section))} />
       <Banner ref={BANNER} />
       <WhoWeAre ref={WHO_WE_ARE} />
       <WhatWeOffer ref={WHAT_WE_OFFER} showPopup={this.showPopup} />
       <WhoWeServe ref={WHO_WE_SERVE} />
       <Footer onGoTop={() => this.scrollTo(0)} ref={FOOTER} />
       <Popup ref={el => { this.popup = el }}>
        <Details id={this.state.currentProductId} />
       </Popup>
      </div>
    );
  }
}

export default Home;