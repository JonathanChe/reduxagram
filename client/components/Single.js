import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
  const i = props.posts.findIndex((post) => post.code === props.params.postId);
  const post = props.posts[i];

  
  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props}/>
    </div>
  )
}

export default Single;
