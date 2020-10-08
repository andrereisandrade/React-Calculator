import React, { Component } from 'react';

import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/display/Display';

export default class Calculator extends Component {
  number = 0;

  addDigit(e) {
    this.number = e
  }

  render() {
    const addDigit = n => this.addDigit(n)


    return (
      <div className="calculator">
        <Display value={this.number}></Display>
        <div className="buttons">
          <Button label="ON" ></Button>
          <Button label="OFF"></Button>
          <Button label="%"></Button>
          <Button label="/"></Button>
          <Button label="7" click={addDigit}></Button>
          <Button label="8" click={addDigit}></Button>
          <Button label="9" click={addDigit}></Button>
          <Button label="X"></Button>
          <Button label="4" click={addDigit}></Button>
          <Button label="5" click={addDigit}></Button>
          <Button label="6" click={addDigit}></Button>
          <Button label="-"></Button>
          <Button label="1" click={addDigit}></Button>
          <Button label="2" click={addDigit}></Button>
          <Button label="3" click={addDigit}></Button>
          <Button label="+"></Button>
          <Button label="0" click={addDigit}></Button>
          <Button label="."></Button>
          <Button label="="></Button>
          <Button label="C"></Button>
        </div>
      </div>
    )
  }
}