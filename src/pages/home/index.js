import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import { NavLink as Link } from 'react-router-dom'
import Menu from './components/menu'
import Banner from './components/banner'
import Footer from './components/footer'
import WhatWeOffer from './components/what_we_offer'
import WhoWeAre from './components/who_we_are'
import WhoWeServe from './components/who_we_serve'


class Home extends Component {
  constructor (props) {
    super(props)
    this.sections = ['menu', 'banner', 'whoWeAre', 'whatWeOffer', 'whoWeServe', 'footer']
    this.positionInfo = {}
  }
  componentDidMount () {
    setTimeout(() => {
      this.positionInfo = this.sections.reduce((acc, section) => {
        const sectionNode = findDOMNode(this.refs[section]).getBoundingClientRect()
        return {...acc, last: (+acc.last) + sectionNode.height, [section]: acc.last}
      }, {last: 0})
    }, 1000)
  }
  scrollTo (position) {
    const page = document.getElementsByTagName('body')[0]
    const scrollHeight = position - page.scrollTop
    let tick = 5
    let timer = () => setTimeout(() => {
      if (!tick) return
      tick = tick - 1
      page.scrollTop += scrollHeight / 5
      timer()
    }, 30)
    timer()
  }
  render() {
    return (
      <div className='text-cl'>
       <Menu ref='menu' onMenuClick={(section) => this.scrollTo(this.positionInfo[section])} />
       <Banner ref='banner' />
       <WhoWeAre ref='whoWeAre' />
       <WhatWeOffer ref='whatWeOffer' />
       <WhoWeServe ref='whoWeServe' />
       <Footer onGoTop={() => this.scrollTo(0)} ref='footer' />
      </div>
    );
  }
}

export default Home;