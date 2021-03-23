import React from "react";

import {
  Container,
  TopicsList,
  Topic,
  BoxTopics,
  Title,
  Header,
  Text,
  BoxText,
  Box,
  TopicTitle,
} from "../styles";
import { posts, topics } from "../../posts";

function PostsByTopic() {
  return (
    <Container style={styles.container}>
      <TopicsList id="top">
        <Topic href="#javascript">JavaScript</Topic>
        <Topic href="#react">ReactJS</Topic>
        <Topic href="#html">HTML</Topic>
        <Topic href="#css">CSS</Topic>
      </TopicsList>
      <BoxTopics style={styles.boxTopics}>
        {topics.map((topic, index) => {
          const postByTopic = posts.filter((post) => post.topic === topic);

          return postByTopic.length > 0 && (
            <span key={index}>
              <TopicTitle id={topic}>
                <Title>{topic}</Title>
                <Topic href="#top">top</Topic>
              </TopicTitle>
              {postByTopic.map((post, index) => (
                <Box
                  key={index}
                  style={{
                    borderBottom:
                      index !== postByTopic.length - 1
                        ? "1px solid gray"
                        : "none",
                  }}>
                  <Header>
                    <Title>{post.title}</Title>
                  </Header>
                  <BoxText>
                    {post.texts.map((text, index) => (
                      <Text key={index}>{text}</Text>
                    ))}
                  </BoxText>
                </Box>
              ))}
            </span>
          );
        })}
      </BoxTopics>
    </Container>
  );
}

const styles = {
  container: {
    padding: 0,
  },
  boxTopics: {
    padding: "1rem 0 0 0",
    width: "100%",
  },
};

export default PostsByTopic;
