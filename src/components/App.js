import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

import './App.css';
import menuItems from './share/constants/menu'

class App extends Component {
  static propTypes = {
    children : PropTypes.object.isRequired
  }

  render() {
    const {children} = this.props

    return (
      <div className="App">
        <Header title="React Course" menuItems={menuItems}/>
        <Content body={children}/>
        <Footer copy="React Course - 2018. CopyRight."/>
      </div>
    );
  }
}

export default App;
