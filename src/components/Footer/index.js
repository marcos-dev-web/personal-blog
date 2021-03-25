import React from 'react';

import { Email, Instagram, GitHub, Language } from '@material-ui/icons';

import { Container, Left, Title, Ul, Li, A, Right } from './styles';

function Footer() {
  return (
    <Container>
      <Left>
        <Title>Contato</Title>
        <Ul>
          <Li><A href="mailto:<nowiki>marcospuglliesyprogramer@gmail.com?subject=Contact From Blog&body=FeedBack or to hire" target="_blank"><Email/> email</A></Li>
          <Li><A href="https://www.instagra.com/marcos.dev.web" target="_blank"><Instagram/> Instagram</A></Li>
          <Li><A href="https://github.com/marcos-dev-web" target="_blank"><GitHub/> GitHub</A></Li>
          <Li><A href="https://marcos-dev-web.netlify.app" target="_blank"><Language/> Web Site</A></Li>
        </Ul>
      </Left>
      <Right>
        <Title>Direitos</Title>
        <p>Todos os direitos reservados a <strong><A href="https://www.instagra.com/marcos.dev.web" target="_blank">Marcos Dev Web</A></strong></p>
      </Right>
    </Container>
  );
}

export default Footer;