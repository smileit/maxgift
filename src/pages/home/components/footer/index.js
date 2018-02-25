import React, { Component } from 'react';
import config from './config';

class Footer extends Component {
  render() {
    return (
      <div className='bg footer-part'>
        <div className='info df'>
          <div className='contact fx1 df col'>
            {
              config.addresss.map((a, idx) => <div className='item' key={idx}>
                <div className='title'>{a.title}</div>
                <div className='text'>{a.add}</div>
                <div className='text'>{a.email}</div>
                <div className='text'>{a.phone}</div>
              </div>)
            }
          </div>
          <div className='link col'>
            <div className='title'>CONNECT</div>
          </div>
          <div className='go-top' onClick={this.props.onGoTop}>TOP<span className='arrow-top' /></div>
        </div>
        <div className='copy-right'>© 2018 Formation, Inc. All rights reserved.</div>
      </div>
    );
  }
}

export default Footer;