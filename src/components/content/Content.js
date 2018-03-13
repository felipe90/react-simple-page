import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      // userName: '',
      // userLastname: ''
    }

    this.increseCounter = this.increseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {
    let counter = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
      if (this.state.count === 10) { clearInterval(counter) }
    }, 1000)
  }

  increseCounter() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decreaseCounter() {
    this.setState({
      count: this.state.count - 1
    })
  }

  resetCounter() {
    this.setState({
      count: 0
    })
  }

  handleInputChange(e) {
    if (e.target.id === 'userName') {
      this.setState({
        userName: e.target.value
      })
    } else {
      this.setState({
        userLastname: e.target.value
      })
    }
  }

  render() {
    return (
      <div className="Content">
        <h2 className="Content-title">Content</h2>
        <p className="Content-intro">Counter : {this.state.count}</p>
        <button id="add" onClick={this.increseCounter}>+</button>
        <button id="subtract" onClick={this.decreaseCounter}>-</button>
        <button id="reset" onClick={this.resetCounter}>Reset</button>
        <h2 className="Content-title">Form</h2>
        <label>Name:</label>
        <input id="userName" type="text" value={this.state.userName} onChange={this.handleInputChange} />
        <label>Last Name:</label>        
        <input id="userLastname" type="text" value={this.state.userLastname} onChange={this.handleInputChange} />
        <p>Hello {this.state.userName} {this.state.userLastname}</p> 
      </div>
    );
  }
}

export default Content;
