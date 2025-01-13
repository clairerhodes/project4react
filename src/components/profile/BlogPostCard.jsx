// BlogPostCard.jsx
import React from 'react';

const BlogPostCard = ({ post }) => {
  return (
    <div className="blog-post-card">
      <h3>{post.subjectLine}</h3>
      <p>{post.description}</p>
      <small>Posted on: {post.date}</small>
    </div>
  );
}

export default BlogPostCard;