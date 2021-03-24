import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Container, Box, Header, Title, Topic, BoxText, Text, Codes } from './styles';

export default function RenderPosts({posts, byTopic}) {

  return (
    <Container>
      {
        posts.map((post, indexPost) => (
          <Box key={indexPost}>
            <Header>
              <Title>{post.title}</Title>
              {!byTopic && <Topic to="/posts-by-topic">{post.topic}</Topic>}
            </Header>
            <BoxText>
              {
                post.texts.map((text, indexText) => (
                  <Text key={indexText}>{text}</Text>
                ))
              }
            </BoxText>
            {
              post.codes !== null && (
                <Codes>
                  {
                    post.codes.map((code, indexCode) => (
                      <SyntaxHighlighter language={code.language} style={dracula} key={indexCode}>
                        {code.code}
                      </SyntaxHighlighter>
                    ))
                  }
                </Codes>
              )
            }
          </Box>
        ))
      }
    </Container>
  );
}
