import { CiHeart } from "react-icons/ci";
const BookCard = ({ data: { title, image, pages, author, language } }) => {
  return (
    <div>
        <img src={image} />
    <div>
        <h3>{title}</h3>
        <p>{author}</p>

    </div>
    <div>
        <span>{language}</span>
        <span>{pages} pages</span>

    </div>
    <button><CiHeart /></button>
    </div>
  );
};

export default BookCard;
