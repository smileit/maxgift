import React, { Component } from 'react';
import './style.less'
import config from './config'

class WhoWeare extends Component {
  render() {
    return (
      <div className='who-we-are bg'>
        <div className='top-text df aic jcc'>
            <span className='line'/>
            <span className='text'>WHO WE ARE</span>
            <span className='line'/>            
          </div>
        <h1 className='title main-cl'>{config.title}</h1>
        <p className='text'>{config.detail}</p>
      </div>
    );
  }
}

export default WhoWeare;