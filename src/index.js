import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './index.style.css';
import img1 from './img/img_jpg.jpeg';

const inlineStyle = {
  flexibility: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backgroundLime: {
    backgroundColor: 'lime',
  }
}
export default class Index extends Component {
  render() {
    return (
      <div className="App" style={inlineStyle.flexibility}>
        <header className="App-header">
          <div className="App-logo" alt="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p>
            Edit <code>src/index.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div style={inlineStyle.backgroundLime}>
          <div>Nice to meet you guys~!</div>
          <img src={img1} className="" alt="image" />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
