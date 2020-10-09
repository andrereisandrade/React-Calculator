import React, { Component } from 'react';

import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/display/Display';

const initialState = {
  displayValue: '',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {
  number = 0;
  state = { ...initialState }

  constructor(props) {
    super(props)
    this.addDigit = this.addDigit.bind(this)
    this.clearDisplay = this.clearDisplay.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.calculate = this.calculate.bind(this)
    this.turnON = this.turnON.bind(this)
    this.turnOFF = this.turnOFF.bind(this)
  }

  addDigit(numb) {
    if (numb === '.' && this.state.displayValue.includes('.')) {
      return
    }

    let currentValue = '';
    if (numb === '.' && this.state.displayValue === '0') {
      currentValue = this.state.displayValue
    } else {
      const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
      currentValue = clearDisplay ? '' : this.state.displayValue
    }
    const displayValue = currentValue + numb
    this.setState({ displayValue, clearDisplay: false })
  }

  clearDisplay() {
    this.setState({ displayValue: '0', operation: null, values: [0, 0], current: 0, clearDisplay: false })
  }

  setOperation(operation) {
    this.setState({ operation: operation, clearDisplay: true, values: [this.state.displayValue] })
  }

  turnON() {
    this.setState({ displayValue: '0' })
  }

  turnOFF() {
    this.setState({ ...initialState })
  }

  calculate() {
    if (!this.state.operation) {
      return
    }

    let result = 0
    switch (this.state.operation) {
      case 'X':
        result = parseFloat(this.state.values[0]) * parseFloat(this.state.displayValue)
        break;
      case '/':
        result = parseFloat(this.state.values[0]) / parseFloat(this.state.displayValue)
        break;
      case '+':
        result = parseFloat(this.state.values[0]) + parseFloat(this.state.displayValue)
        break;
      case '-':
        result = parseFloat(this.state.values[0]) - parseFloat(this.state.displayValue)
        break;
      default:
    }
    this.setState({ displayValue: result })
  }

  render() {

    return (
      <div className="calculator">
        <Display value={this.state.displayValue}></Display>
        <div className="buttons">
          <Button label="ON" click={this.turnON}></Button>
          <Button label="OFF" click={this.turnOFF}></Button>
          <Button label="%"></Button>
          <Button label="/" click={this.setOperation}></Button>
          <Button label="7" click={this.addDigit}></Button>
          <Button label="8" click={this.addDigit}></Button>
          <Button label="9" click={this.addDigit}></Button>
          <Button label="X" click={this.setOperation}></Button>
          <Button label="4" click={this.addDigit}></Button>
          <Button label="5" click={this.addDigit}></Button>
          <Button label="6" click={this.addDigit}></Button>
          <Button label="-" click={this.setOperation}></Button>
          <Button label="1" click={this.addDigit}></Button>
          <Button label="2" click={this.addDigit}></Button>
          <Button label="3" click={this.addDigit}></Button>
          <Button label="+" click={this.setOperation}></Button>
          <Button label="0" click={this.addDigit}></Button>
          <Button label="." click={this.addDigit}></Button>
          <Button label="=" click={this.calculate}></Button>
          <Button label="C" click={this.clearDisplay}></Button>
        </div>
      </div>
    )
  }
}