import React from 'react';
import { Container } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        Copyright &copy;
        {new Date().getFullYear()}
        Nerdicity Media
      </Container>
    </div>
  );
};

export default Footer;
