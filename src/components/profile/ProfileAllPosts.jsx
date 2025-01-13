import React from 'react';
import BlogPostCard from './BlogPostCard.jsx';

const ProfileAllPosts = ({ posts }) => {
  return (
    <div>
      <h2>User's Posts</h2>
      {posts.map(post => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ProfileAllPosts;