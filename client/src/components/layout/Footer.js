import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment attached="bottom" textAlign="center" vertical style={{ padding: '5em 0em' }}>
      <Container attached="bottom">Footer Text</Container>
    </Segment>
  );
};

export default Footer;
