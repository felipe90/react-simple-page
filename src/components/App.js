import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';
import menuItems from './share/constants/menu'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="React Course" menuItems={menuItems}/>
        <Content />
        <Footer copy="React Course - 2018. CopyRight."/>
      </div>
    );
  }
}

export default App;