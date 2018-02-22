import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        Home page
        <Link className='link-btn btn'
          to='/p1'
        >
          To p1
        </Link>
      </div>
    );
  }
}

export default Home;