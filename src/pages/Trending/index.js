import React, { useEffect } from 'react';

import Footer from '../../components/Footer';
import RenderPosts from '../../components/RenderPosts';

import {posts, trendings} from '../../posts';

import { Container, Title } from '../styles';

import { Link } from 'react-router-dom';

function Trending() {

  useEffect(() => {
    document.title = "Blog | Trending top"
  }, [])

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
      <Title style={styles.title}>Trendings</Title>
      <RenderPosts posts={ps}/>
      <Footer />
    </Container>
  ) : (
    <Container style={styles.container}>
      <h1 style={styles.h1}>No Trendings visit <Link to="/all-posts">All Posts</Link></h1>
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
  },
  title: {
    paddingBottom: "1rem",
    borderBottom: '1px solid gray'
  }
}

export default Trending;