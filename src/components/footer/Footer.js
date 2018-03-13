import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    const { copy = '&copy; default' } = this.props

    return (
      <div className="Footer">
        <p className="Footer-message">{copy}</p>
      </div>
    );
  }
}

export default Footer;
