import React, { useEffect } from 'react';

import RenderPosts from '../../components/RenderPosts';
import {posts} from '../../posts';

function AllPosts() {
  useEffect(() => {
    document.title = "Blog | All posts"
  }, [])
  return posts.length > 0 && <RenderPosts posts={posts} /> 
}

export default AllPosts;