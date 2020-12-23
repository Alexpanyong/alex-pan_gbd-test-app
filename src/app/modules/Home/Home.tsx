import React from 'react';
import './Home.scss';
import { useSelector } from "react-redux";
import { isEmpty } from 'lodash';
import Book from '../../components/Book/Book';

interface Props {
  
}

const Home = (props: Props) => {
  const [ bookList, setBookList ] = React.useState([]);

  const data = useSelector((state: any) => state.data);
  const { booksData = {} } = data;
  const { books = [] } = booksData;

  React.useEffect(() => {
    setBookList(books);
    console.log("bookList:", bookList);
    return () => {};
  }, [books]);

  return (
    <div className="homeWrap">
      <div className="containWrap">
        {!isEmpty(bookList) && <div className="bookListWrap">
          {bookList.map((book: any, index: number) => <Book id={`bw${index+1}`} key={book.isbn13} book={book}/>)}
        </div>}
      </div>
    </div>
  )
};

export default Home;
