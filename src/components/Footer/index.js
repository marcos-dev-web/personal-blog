import React from 'react';

import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import { Container, Left, Title, Ul, Li, A, Right } from './styles';

function Footer() {
  return (
    <Container>
      <Left>
        <Title>Contato</Title>
        <Ul>
          <Li><A href="mailto:<nowiki>marcospuglliesyprogramer@gmail.com?subject=Contact From Blog&body=FeedBack or to hire" target="_blank"><EmailIcon/> email</A></Li>
          <Li><A href="https://www.instagra.com/marcos.dev.web" target="_blank"><InstagramIcon/> Instagram</A></Li>
          <Li><A href="https://github.com/marcos-dev-web" target="_blank"><GitHubIcon/> GitHub</A></Li>
          <Li><A href="https://marcos-dev-web.netlify.app" target="_blank"><LanguageIcon/> Web Site</A></Li>
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