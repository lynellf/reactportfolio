import React from 'react';
import ProjectList from './ProjectList.js';

const AsideLeft = (props) => {

    return(
        <aside className="aside--left">
            <h4 className="title--medium">Projects</h4>
            <ProjectList data={props.posts} />
        </aside>
    );
}

export default AsideLeft;