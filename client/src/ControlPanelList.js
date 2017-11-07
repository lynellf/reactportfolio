import React from 'react';

//Display the post data as an unordered list

const ControlPanelList = (props) => {
    const results = props.data;
    let postList = results.map(post =>
        <tr>
            <td>
                {post.title}
            </td>
            <td>
                {post.title}
            </td>
        </tr>);

    return (
        {postList}
    );

}

export default ControlPanelList;
