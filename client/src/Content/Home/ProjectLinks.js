import React from 'react';
import { Link } from 'react-router-dom';

//Display post names as functional links.

const ProjectLinks = props => (
    <li className="project__item" key={props.id}>
        <Link to={`/post/${props.id}`}>{props.title}</Link>
    </li>
);

export default ProjectLinks;
