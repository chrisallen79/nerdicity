import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Image, Header, Segment } from 'semantic-ui-react';
import cbbcLogo from '../../images/cbbc-logo-light.svg';

const Main = () => {
  return (
    <div>
      <div className="home-image">
        <img src={cbbcLogo} />
      </div>
      <Container>
        Join a group and discuss your favorite books, creators, shows, and more!!!
      </Container>
      <div style={{ paddingTop: '30px' }}>
        <Button as={Link} to="/register" secondary>
          Register
        </Button>
        <Button as={Link} to="/login" primary>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Main;
