import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import RenderPosts from '../../components/RenderPosts';

function AllPosts() {
  const posts = useSelector(state => state.dataPosts.posts);

  useEffect(() => {
    document.title = "Blog | All posts"
  }, []);

  return posts.length > 0 && <RenderPosts posts={posts} /> 
}

export default AllPosts;