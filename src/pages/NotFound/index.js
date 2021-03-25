import React, { useEffect } from 'react';

import { Container, Title, Link } from './style';

function NotFound() {
  useEffect(() => {
    document.body.style = 'overflow: hidden;'
    document.title = "Not Found"
  }, [])
  
  return (
    <Container>
      <Title>Page Not Found</Title>
      <Title>Página Não encontrada</Title>
      <Link href="/">Home</Link>
    </Container>
  );
}

export default NotFound;