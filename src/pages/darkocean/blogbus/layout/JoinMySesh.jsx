import React from 'react';
import JoinSeshPost from './JoinSeshPost';

import { communityPosts } from '../../../../tests/mockData';

const like = 'Like';
const comment = 'Comment';

const JoinMySesh = () => {
  const action1 = () => {
    console.log('action1');
  };

  const action2 = () => {
    console.log('action2');
  };

  return (
    <>
      {communityPosts.map((post) => (
        <JoinSeshPost
          key={post.id}
          title={post.title}
          subheader={post.subheader}
          summary={post.summary}
          body={post.body}
          action1={action1}
          action2={action2}
          button1Title1={like}
          button1Title2={comment}
        />
      ))}
    </>
  );
};

export default JoinMySesh;
