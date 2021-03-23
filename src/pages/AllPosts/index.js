import React from "react";

import { Container, Box, Header, Title, Topic, BoxText, Text } from "../styles";

import { posts } from "../../posts";
import Footer from "../../components/Footer";

function AllPosts() {
  return (
    <Container>
      {posts.map((post, index) => (
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
  );
}

export default AllPosts;
