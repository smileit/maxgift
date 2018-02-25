import React, { Component } from 'react';
import config from './config'

class Experitise extends Component {
  render() {
    return (
      <div className='experitise-part'>
        <div className='pic rel'>
          <img src={`/img/${config.experitise.pic}`} alt={config.experitise.title} />
          <div className='abs text'>{config.experitise.title}</div>
        </div>
        <div className='experitise frw jcr aic'>
          {
            config.experitise.list.map((e, idx) => <div className='item' key={idx}>
              <img src={`/img/${e.icon}`} alt={e.title} />
              <div className='title'>{e.title}</div>
              <div>{e.detail}</div>
            </div>)
          }
        </div>
      </div>
    );
  }
}

export default Experitise;