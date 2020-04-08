import React from 'react';
import { Container } from 'semantic-ui-react';

const Footer = () => {
  const copyYear = new Date().getFullYear();

  return (
    <div id="footer">
      <Container>
        <span>Copyright &copy;&nbsp;</span>
        <span>{copyYear}</span>
        <span>&nbsp;Nerdicity Media</span>
      </Container>
    </div>
  );
};

export default Footer;
