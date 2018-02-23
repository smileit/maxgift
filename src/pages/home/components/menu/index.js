import React, { Component } from 'react';
import './style.less'
import config from './config'

class Menu extends Component {
  render() {
    return (
      <div className='menu-part df aic'>
        <div className='logo'>Logo</div>
        {
          config.menus.map(m => <div id={m.text} className='item text-cl'>
              {m.text}
            </div>)
        }
        <div className='email main-cl fx1'>Email</div>
      </div>
    );
  }
}

export default Menu;