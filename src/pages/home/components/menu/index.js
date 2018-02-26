import React, { Component } from 'react';
import config from './config'

class Menu extends Component {
  render() {
    return (
      <div className='menu-part df aic'>
        <div className='logo fx1'>
        <img src={`./img/logo.png`} alt='Maxgiftexporter logo' />
        </div>
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
        <a className='email main-cl df aic' href="mailto:sales@maxgiftexporter.com?subject=I have a Enquery">
          <img src='/img/email.svg' className='email-icon' alt='email icon' />
          <span className='main-cl'>Email us</span>
        </a>
      </div>
    );
  }
}

export default Menu;