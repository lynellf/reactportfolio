import React from 'react';
import DirectPost from './DirectPost.js';
import { Link } from 'react-router-dom';

//Display post names as functional links.

const PostLink = props => (
    <div>
        <li key={props.id}>
            <Link to={`/post/${props.id}`}>{props.title}</Link>
        </li>
    </div>
);

export default PostLink;
