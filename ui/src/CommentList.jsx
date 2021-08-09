import React from 'react';

export default function CommentList({ comments }) {
  const commentRows = comments.map(comment => (
    <div key={comment.id}>
      <p>
        {comment.rating}
        {'   '}
        {comment.author}
        {' '}
        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
          .format(new Date(Date.parse(comment.date)))}
      </p>
      <p>{comment.comment}</p>
      <hr />
    </div>
  ));

  return (
    <div>
      <h3>Reviews</h3>
      {commentRows}
    </div>
  );
}
