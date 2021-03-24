import React, { useEffect } from "react";

import {
  Container,
  TopicsList,
  BoxTopics,
  Title,
  TopicTitle,
  NavLink
} from "../styles";

import { posts, topics } from "../../posts";

import RenderPosts from '../../components/RenderPosts';

function PostsByTopic() {

  useEffect(() => {
    document.title = "Blog | Posts by topic"
  }, [])

  return (
    <Container style={styles.container}>
      <TopicsList id="top">
        <NavLink href="#javascript">JavaScript</NavLink>
        <NavLink href="#react">ReactJS</NavLink>
        <NavLink href="#html">HTML</NavLink>
        <NavLink href="#css">CSS</NavLink>
      </TopicsList>
      <BoxTopics style={styles.boxTopics}>
        {topics.map((topic, index) => {
          const postByTopic = posts.filter((post) => post.topic === topic);

          return postByTopic.length > 0 && (
            <span key={index} >
              <TopicTitle id={topic}>
                <Title>{topic}</Title>
                <NavLink href="#top">top</NavLink>
              </TopicTitle>
              <RenderPosts posts={postByTopic} byTopic={true}/>
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