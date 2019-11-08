import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setNumberIncrease, setNumberDecrease } from './redux/actions';

const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    numIncrease: (num) => dispatch(setNumberIncrease(num)),
    numDecrease: (num) => dispatch(setNumberDecrease(num))
  }
}

class App extends Component {
  render() {
    const { number, numIncrease, numDecrease } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h2>{number}</h2>
          <button onClick={numIncrease}>Plus</button>
          <button onClick={numDecrease}>Minus</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
