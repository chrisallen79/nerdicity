import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import cbbcLogo from '../../images/cbbc-logo-light.svg';

const Navbar = () => {
  return (
    <Grid>
      <Grid.Row id="header">
        <Grid.Column width={12}>
          <div className="logo">
            <Link to="/">
              <img src={cbbcLogo} alt="The Comic Book Book Club" />
            </Link>
          </div>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment vertical />
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
};

export default Navbar;
