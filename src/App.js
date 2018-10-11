import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  thingOne = () => {
    console.log("Hi")
  }

  thingTwo = (data) => {
    console.log(data)
  }

    thingThree = async (data1, data2, data3) => {
    console.log(data1 * data2 / data3)
  }

  render() {
    return (
      <div className="App">
        <p onClick={this.thingOne}>one thing</p>
        {/* use arrow function to pass argument to a function */}
        <p onClick={() => this.thingTwo(5)}>two thing</p>
        <p onClick={() => this.thingThree(2, 59, 99)}>three thing</p>
        <p onClick={this.doManyThings}> Many things</p>
      </div>
    );
  }
}

export default App;
