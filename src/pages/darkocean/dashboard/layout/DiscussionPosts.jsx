import React from 'react';
import CommunityPost from './CommunityPost';
import StandardSelect from '../../../../components/mui-utilities/StandardSelect';

import { communityPosts } from '../../../../tests/mockData';

const like = 'Like';
const comment = 'Comment';

const inputLabel = 'Navigation';
const navItems = {
  item0: 'My Dashboard',
  item1: 'Community Support',
  item2: 'Idea Generation',
  item3: 'Orbitron Live Forums'
}
const inputLabel2 = 'Sort By';
const navItems2 = {
  item0: 'Name',
  item1: 'Likes',
  item2: 'Comments',
  item3: 'Recent Update'
}
// const inputLabel3 = 'Filter By';

const DiscussionPosts = () => {
  const action1 = () => {
    console.log('action1');
  };

  const action2 = () => {
    console.log('action2');
  };

  return (
    <>
      <div className='section-button'>
        <StandardSelect inputLabel={inputLabel} navItems={navItems}/>
        <StandardSelect inputLabel={inputLabel2} navItems={navItems2}/>
        {/* <StandardSelect inputLabel={inputLabel3}/> */}
      </div>
      {communityPosts.map((post) => (
        <CommunityPost
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

export default DiscussionPosts;
