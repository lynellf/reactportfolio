import React from 'react';
import ProjectLinks from './ProjectLinks.js';

//Display the post data as an unordered list

const ProjectList = (props) => {
    const results = props.data;
    let postResults = results.map(post =>
    <ProjectLinks title={post.title} key={post.postId} id={post.postId}/>);

    return(
    <ul className="project__list">
        {postResults}
    </ul>
    );

}

export default ProjectList;
