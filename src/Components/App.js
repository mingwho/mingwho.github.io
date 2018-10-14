import React from 'react'
import Header from './Header'
import Main from './Main'

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
);

export default App


// import React, { Component } from 'react';
// import logo from '../logo2.svg';
// import banner from '../banner.svg';
// import '../App.css';
//
// class App extends Component{
//   render() {
//     return (
//         <div>
//         <Header />
//         <div className="Outside">
//             <div className="Border">
//             </div>
//             <div className="Banner">
//               <img src={banner} className="App-banner" alt="logo"/>
//             </div>
//             <div className="Category">
//                 <div>PROJECTS</div>
//                 <div>ABOUT</div>
//                 <div>BOOKS</div>
//                 <div>CONNECT</div>
//             </div>
//             <div className="Line">
//             </div>
//         </div>
//             <Main />
//         </div>
//     );
//   }
// }
//
// export default App;