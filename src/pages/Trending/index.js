import React from 'react';

import Footer from '../../components/Footer';

import {posts, trendings} from '../../posts';

import { Container, Box, Header, Title, Topic, BoxText, Text } from '../styles';

function Trending() {
  let ps = [];
  
  if (trendings.length > 0) {
    for (let p of posts) {
      for (let trending of trendings) {
        if (p.id === trending) {
          ps.push(p);
        }
      }
    }
  }

  return ps.length > 0 ? (
    <Container>
      <Title>Trendings</Title>
      {ps.map((post, index) => (
        <Box key={index}>
          <Header>
            <Title>{post.title}</Title>
            <Topic href="/posts-by-topic">{post.topic}</Topic>
          </Header>
          <BoxText>
            {post.texts.map((text, index) => (
              <Text key={index}>{text}</Text>
            ))}
          </BoxText>
        </Box>
      ))}
      <Footer />
    </Container>
  ) : (
    <Container style={styles.container}>
      <h1 style={styles.h1}>No Trendings visit <a href="/all-posts">All Posts</a></h1>
    </Container>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
  },
  h1: {
    textAlign: 'center'
  }
}

export default Trending;