import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullProjects from './FullProjects'
import Project from './Project'

// The Roster component matches one of two different routes
// depending on the full pathname
const Projects = () => (
    <Switch>
        <Route exact path='/projects' component={FullProjects}/>
        <Route path='/projects/:number' component={Project}/>
    </Switch>
);


export default Projects
