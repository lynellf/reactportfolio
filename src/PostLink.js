import React from 'react';

//Display post names as functional links.

const PostLink = props => (
    <li key={props.id}>
        <strong>{props.title}</strong>
    </li>
);

export default PostLink;