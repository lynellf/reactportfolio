import React from 'react';
import Posts from './Posts.js';

const Aside2 = (props) => {

    return(
        <aside className="app-container__aside left">
            <h4>Projects</h4>
            <Posts data={props.posts} />
        </aside>
    );
}

export default Aside2;