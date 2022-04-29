import React from 'react';
import { useSelector } from 'react-redux';

import { PostItem } from '../postItem/PostItem';

export const PostList = () => {
  const posts = useSelector(state => state);
  
  return (
    <>
      {posts.map(post => {
        return <PostItem key={post.id} post={post} />
      })}
    </>
  )
}
