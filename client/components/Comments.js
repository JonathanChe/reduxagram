import React from 'react';

const Comments = (props) => {
  // render function
  function renderComments(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comments"> &times; </button>
        </p>
      </div>
    )
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { postId } = props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comments.value;

    props.addComment(postId, author, comment);
  }

  return (
    <div className="comments">
      {props.postComments.map(renderComments)}
      <form ref="commentForm" className="comment-form" onSubmit={handleSubmit}>
        <input type="text" ref="author" placeholder="author"></input>
        <input type="text" ref="comment" placeholder="comment"></input>
        <input type="submit" hidden />
      </form>
    </div>
  )
}

export default Comments;