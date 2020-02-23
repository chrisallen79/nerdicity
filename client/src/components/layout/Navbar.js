import React, { Component } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'home'
    };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Grid>
        <Grid.Row id="header">
          <Grid.Column width={12}>
            <div className="logo">
              <img src="/assets/cbbc-logo-light.svg" />
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment vertical></Segment>
            <Segment vertical>
              <Menu position="right bottom" secondary>
                <Menu.Item
                  name="profiles"
                  as="a"
                  active={activeItem === 'profiles'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="register"
                  as="a"
                  active={activeItem === 'register'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="Login"
                  as="a"
                  active={activeItem === 'logout'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
