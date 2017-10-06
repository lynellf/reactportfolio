import React from 'react';
import PostLink from './PostLink.js';

//Display the post data as an unordered list

const PostList = (props) => {
    const results = props.data;
    let postResults = results.map(post => 
    <PostLink title={post.title} id={post.id}/>);

    return(
        <div className="post-list-container">
            <h2>Projects</h2>
            <ul>
                {postResults}
            </ul>
        </div>
    );

}

export default PostList;