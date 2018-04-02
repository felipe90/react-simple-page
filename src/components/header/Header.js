import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired,
  };

  render() {
    const { title, menuItems } = this.props

    return (
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Header-title">{title}</h1>
        <nav>
          <ul className="Header-menu">
            {menuItems && menuItems.map((item, key) =>
              <li><Link to={item.url} key={key}>{item.title}</Link></li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
