import React from 'react';
import CommunityPost from './CommunityPost';

import { blogPosts } from '../../../../tests/mockData';

const like = 'Like';
const share = 'Share';

const DiscussionPosts = () => {
  const action1 = () => {
    console.log('action1');
  };

  const action2 = () => {
    console.log('action2');
  };

  return (
    <>
      {blogPosts.map((post) => (
        <CommunityPost
          key={post.id}
          title={post.title}
          subheader={post.subheader}
          image={post.image}
          summary={post.summary}
          url={post.url}
          body={post.body}
          action1={action1}
          action2={action2}
          button1Title1={like}
          button1Title2={share}
        />
      ))}
    </>
  );
};

export default DiscussionPosts;
