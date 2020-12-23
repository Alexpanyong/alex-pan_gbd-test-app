import React from 'react';
import './Book.scss';

interface Props {
  id: string
  book: any
}

const Book = (props: Props) => {
  const { id, book } = props;

  return (
    <div className="bookWrap" id={id}>
      <div className="book">
        <div className="background">
          <div className="bookCover">
            <img src={book.image} alt="book cover"/>
          </div>
          
        </div>
        <div className="title">{book.title}</div>
      </div>
    </div>
  )
};

export default Book;
