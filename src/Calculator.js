import { Component } from 'react';

class Calculator extends Component {
  state = {
    num1: NaN,
    num2: NaN,
    sum: NaN
  }

  setNum = (e) => {
      this.setState({ [e.target.name]: Number(e.target.value) })
  }

  getSum = ()=> {
    this.setState({ sum: this.state.num1 + this.state.num2 })
  }

  render() {
    return(
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="number"
            name="num1"
            placeholder="Enter your first number"
            value={this.state.num1}
            onChange={this.setNum}
          />
          <span>+</span>
          <input type="number"
            name="num2"
            placeholder="Enter your first number"
            value={this.state.num2}
            onChange={this.setNum}
          />
          <button onClick={this.getSum}>=</button>
          <h3>Addition results go here!</h3> 
          <p>{ isNaN(this.state.sum) ? 'Add two numbers' : this.state.sum }</p>
        </div>
      </div>
    )
  }
}

export default Calculator;
