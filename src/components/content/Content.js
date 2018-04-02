import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }

    this.handleIncreseCounter = this.handleIncreseCounter.bind(this);
    this.handleDecreaseCounter = this.handleDecreaseCounter.bind(this);
    this.handleResetCounter = this.handleResetCounter.bind(this);
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

  handleIncreseCounter() {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecreaseCounter() {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleResetCounter() {
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
        <button id="add" onClick={this.handleIncreseCounter}>+</button>
        <button id="subtract" onClick={this.handleDecreaseCounter}>-</button>
        <button id="reset" onClick={this.handleResetCounter}>Reset</button>
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
