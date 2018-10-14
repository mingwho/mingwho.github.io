import React from 'react'
import ProjectsAPI from '../ProjectsAPI'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const Projects = () => (
    <div>
        <ul>
            {
                ProjectsAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/project/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default Projects
