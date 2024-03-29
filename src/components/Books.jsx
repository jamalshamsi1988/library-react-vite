import { useState } from "react";
import { books as booksData } from "../contants/bookData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox";

const Books = () => {
  const [books, setBooks] = useState(booksData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  const searchHandler = () => {
    if (search) {
      const newBooks = booksData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(booksData);
    }
  };
  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorite</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Books;
