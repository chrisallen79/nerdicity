import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Image, Header, Segment } from 'semantic-ui-react';

const Main = () => {
  return (
    <div>
      <div className="home-image">
        <img src="/assets/cbbc-logo-light.svg" />
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
