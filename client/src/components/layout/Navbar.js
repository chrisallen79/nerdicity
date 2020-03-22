import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import cbbcLogo from '../../images/cbbc-logo-light.svg';

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
              <Link to="/">
                <img src={cbbcLogo} />
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment vertical></Segment>
            <Segment vertical>
              <Menu position="right bottom" secondary>
                <Menu.Item name="profiles" as={Link} to="/profiles" />
                <Menu.Item name="register" as={Link} to="/register" />
                <Menu.Item name="Login" as={Link} to="/login" />
              </Menu>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
