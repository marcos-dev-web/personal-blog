import React from 'react';

import { Container, Title, Link } from './style';

function NotFound() {
  document.body.style = 'overflow: hidden;'
  return (
    <Container>
      <Title>Page Not Found</Title>
      <Title>Página Não encontrada</Title>
      <Link href="/">Home</Link>
    </Container>
  );
}

export default NotFound;