import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
    return(
        <Menu inverted color="blue" fixed="top" stackable={true}>
            <Menu.Item header href="/">
                Ezell Frazier
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item href="https://github.com/lynellf">
                    GitHub
                </Menu.Item>
                <Menu.Item href="https://www.linkedin.com/in/ezell-frazier-830a50135">
                    LinkedIn
                </Menu.Item>
                <Menu.Item href="https://teamtreehouse.com/ezellfrazier">
                    Team Treehouse
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default Header;
