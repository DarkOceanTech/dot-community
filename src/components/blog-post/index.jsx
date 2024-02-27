import React from 'react';
import './BlogPost.css'; // Import the CSS file for styling

const BlogPost = ({ title, subtitle, author, createDate, updateDate, content }) => {
  return (
    <div className="blog-post">
      <h1 className="blog-post-title">{title}</h1>
      <h2 className="blog-post-subtitle">{subtitle}</h2>
      <p className="blog-post-info">
        By {author} | Created: {createDate} | Updated: {updateDate}
      </p>
      <div className="blog-post-content">
        {content}
      </div>
    </div>
  );
};

export default BlogPost;