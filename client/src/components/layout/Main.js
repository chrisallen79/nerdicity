import React from 'react';
import { Button, Container, Grid, Image, Header, Segment } from 'semantic-ui-react';

const Main = () => {
  return (
    <section className="bg-halftone">
      <div className="home-inner">
        <div className="home-image">
          <img src="/assets/cbbc-logo-light.svg" />
        </div>
        <Container>
          Join a group and discuss your favorite books, creators, shows, and more!
        </Container>
        <div style={{ paddingTop: '30px' }}>
          <Button secondary>Register</Button>
          <Button primary>Login</Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
