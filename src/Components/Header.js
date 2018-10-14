import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../banner.svg'
import '../App.css';
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>

                 <div className="Outside">
                     <div className="Border">
                     </div>
                     <div className="Banner">
                       <img src={banner} className="App-banner" alt="logo"/>
                     </div>
                     <div className="Category">
                             <div><Link to='/'>ABOUT</Link></div>
                             <div><Link to='/projects'>PROJECTS</Link></div>
                             <div><Link to='/books'>BOOKS</Link></div>
                     </div>
                     <div className="Line">
                     </div>
                 </div>
    </header>
);

export default Header