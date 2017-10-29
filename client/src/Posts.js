import React from 'react';
import PostLink from './PostLink.js';

//Display the post data as an unordered list

const PostList = (props) => {
    const results = props.data;
    let postResults = results.map(post =>
    <PostLink title={post.title} key={post.postId} id={post.postId}/>);

    return(
        <div className="post-list-container">
            <ul className="post-results">
                {postResults}
            </ul>
        </div> 
    );

}

export default PostList;
