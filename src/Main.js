import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Reading from './Reading'
import styled, {css} from 'react-emotion';

const MainStyle = styled('div')`
  margin: 14px;
`

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <MainStyle>
    <main>
        <Switch>
            <Route exact path='/' component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/reading' component={Reading}/>
        </Switch>
    </main>
    </MainStyle>
);

export default Main
