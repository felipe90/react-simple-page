import React, { Component } from 'react';
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
        <ul className="Header-menu">
          {menuItems && menuItems.map((item, key) => 
            <li key={key}>{item.title}</li>
          )}
        </ul>
      </header>
    );
  }
}

export default Header;
