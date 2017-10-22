import React from 'react';
import DirectPost from './DirectPost.js';
import { Link, Route } from 'react-router-dom';

//Display post names as functional links.

const PostLink = props => (
    <div>
        <li key={props.id}>
            <Link to={`/${props.id}`}>{props.title}</Link>
        </li>
        <Route path="/:id" component={DirectPost}/>
    </div>
);

export default PostLink;
