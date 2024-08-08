/** @format */

import React from 'react';

const Book = (props) => {
  const { title, author, img, handelClick } = props;
  return (
    <article className='book'>
      <img
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <button
        onClick={() => {
          handelClick(title);
        }}
      >
        alert title
      </button>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
