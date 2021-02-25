import { Component } from 'react';

class CalculatorBonus extends Component {
  state = {
    num1: NaN,
    num2: NaN,
    sum: NaN,
    sign: '+'
  }

  // handles num1/num2
  setNum = (e) => {
      this.setState({ [e.target.name]: Number(e.target.value) })
  }

  // handles sign state
  setSign = (e) => {
    console.log(e.target.value)
    this.setState({ sign: e.target.value })
  }

  // determines which math operation to call
  getSolution = ()=> {
    if (this.state.sign === '+') {
      this.getSum()
    } else if (this.state.sign === '-') {
      this.getDifference()
    } else if (this.state.sign === '*') {
      this.getProduct()
    } else if (this.state.sign === '/') {
      this.getQuotient()
    }
  }
  
  // Operations for (+ - * /)
  getSum = ()=> {
    this.setState({ sum: this.state.num1 + this.state.num2 })
  }
  getDifference = ()=> {
    this.setState({ sum: this.state.num1 - this.state.num2 })
  }
  getProduct = ()=> {
    this.setState({ sum: this.state.num1 * this.state.num2 })
  }
  getQuotient = ()=> {
    this.setState({ sum: this.state.num1 / this.state.num2 })
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
          <select
            name="sign"
            id="sign"
            onChange={this.setSign}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input type="number"
            name="num2"
            placeholder="Enter your first number"
            value={this.state.num2}
            onChange={this.setNum}
          />
          <button onClick={this.getSolution}>=</button>
          <h3>Results go here!</h3> 
          <p>{ isNaN(this.state.sum) ? 'Do Some Math' : this.state.sum }</p>
        </div>
      </div>
    )
  }
}

export default CalculatorBonus;
