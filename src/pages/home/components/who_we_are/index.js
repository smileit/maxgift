import React, { Component } from 'react';
import './style.less'
import TitleBlock from '../title_block'
import config from './config'

class WhoWeare extends Component {
  render() {
    return (
      <div className='who-we-are bg'>
        <TitleBlock title='WHO WE ARE' theme='white' />
        <h1 className='title main-cl'>{config.title}</h1>
        <p className='text' dangerouslySetInnerHTML={{__html: config.detail}} />
      </div>
    );
  }
}

export default WhoWeare;