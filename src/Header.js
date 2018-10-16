import React from 'react'
import { Link } from 'react-router-dom'
import banner from './banner.svg'
import './App.css';
import styled, {css} from 'react-emotion';

// between routes.
class Header extends React.Component {
    render() {
        return(
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
                    <div><Link to='/reading'>READING</Link></div>
                </div>
                <div className="Line">
                </div>
            </div>
        </header>
        );
    }
}

export default Header