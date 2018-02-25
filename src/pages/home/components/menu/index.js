import React, { Component } from 'react';
import config from './config'

class Menu extends Component {
  render() {
    return (
      <div className='menu-part df aic'>
        <div className='logo fx1'>Logo</div>
        {
          config.menus.map(m => <div
            id={m.text}
            key={m.text}
            onClick={() => this.props.onMenuClick(m.name)}
            className='item text-cl'
            >
              {m.text}
            </div>)
        }
        <div className='email main-cl'>Email</div>
      </div>
    );
  }
}

export default Menu;