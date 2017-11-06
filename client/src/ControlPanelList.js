import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//Display the post data as an unordered list

const ControlPanelList = (props) => {
    const results = props.data;
    let postList = results.map(post =>
        <Table.Row>
            <Table.Cell>
                {post.title}
            </Table.Cell>
            <Table.Cell>
                {post.title}
            </Table.Cell>
        </Table.Row>);

    return (
        {postList}
    );

}

export default ControlPanelList;
