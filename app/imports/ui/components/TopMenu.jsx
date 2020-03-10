import React from 'react';
import { Container, Header, Menu, Dropdown, Icon, Image, Segment, Grid, Divider, List, Input, Button, Item } from 'semantic-ui-react';

export default class TopMenu extends React.Component {

  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/> </Menu.Item>
            <Menu.Item position="right">Home</Menu.Item>
            <Dropdown item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>St. Patricks Day</Menu.Item>
            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Bar</Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
          </Container>
        </Menu>
    );
  }
}