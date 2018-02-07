import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './BaseLayout.css';

class BaseLayout extends Component {
  render() {
    return (
      <div className="baseLayout">
        <header className="baseLayoutHeader">
          <img src={require('./basic_logo.jpg')}
               className="ctLogo" alt="logo" />
          <Link className='linkStyle' to='/all'>All Machines</Link>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
