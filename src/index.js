import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './index.style.css';

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
    // return (
    //   <>
    //     <div style={inlineStyle.flexibility}>
    //       <div>
    //         This is react page by codingidiots!!
    //       </div>
    //       <div style={inlineStyle.backgroundLime}>
    //         Nice to meet you guys~!
    //       </div>
    //     </div>
    //   </>
    // )
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo" alt="logo">
            {logo}
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <div>
          {/* <img src={images['img_jpg.jpeg']} alt="alt"/> */}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
