import React, { Component } from 'react';
import logo from './logo2.svg';
import banner from './banner.svg';
import './App.css';

class App extends Component{
  render() {
    return (
        <div className="Outside">
            <div className="Border">
            </div>
            <div className="Banner">
              <img src={banner} className="App-banner" alt="logo"/>
            </div>
            <div className="Category">
                <div>PROJECTS</div>
                <div>ABOUT</div>
                <div>BOOKS</div>
                <div>CONNECT</div>
            </div>
            <div className="Line">
            </div>
        </div>
    );
  }
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;