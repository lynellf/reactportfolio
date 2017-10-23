import React from 'react';
import { Menu } from 'semantic-ui-react';

const centeredStyle = {
  margin: "auto"
}

const Footer = () => {
  return (
    <Menu inverted color="blue" fixed="bottom">
      <Menu.Item header href="/">
        Ezell Frazier
      </Menu.Item>
      <Menu.Item style={centeredStyle}>
          Copyright (c) 2017 Ezell Frazier All Rights Reserved.
      </Menu.Item>
    </Menu>
  );
}

export default Footer;