/** @format */

import React from 'react';
import Book from './book';
//booksArr
import books from './data';

const BookList = () => {
  function handelClick(valve) {
    console.log(valve);
  }
  return (
    <>
      <header>
        <h1>Best Seller Books</h1>
      </header>
      <section className='booklist'>
        {books.map((book, index) => {
          return (
            <Book
              key={index}
              {...book}
              handelClick={handelClick}
            />
          );
        })}
      </section>
    </>
  );
};

export default BookList;
