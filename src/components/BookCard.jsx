import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import styles from "./BookCard.module.css";

const BookCard = ({ data,handleLikedList }) => {
  const { title, image, pages, author, language }=data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedList(data,like);
    setLike((like) => !like);
  };

  return (
    <div className={styles.card}>
      <img src={image} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>

        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.2rem" />
      </button>
    </div>
  );
};

export default BookCard;
