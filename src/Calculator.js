import { Component } from 'react';

class Calculator extends Component {

  render() {

    return(
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="text" />
          <span>+</span>
          <input type="text" />
          <button>=</button>
          <h3>Addition results go here!</h3>
        </div>
      </div>
    )
  }
}

export default Calculator;
