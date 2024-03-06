import { books } from "../contants/bookData"
import BookCard from "./BookCard"

const Books = () => {

  return (
    <div>
     <div>
     {
        books.map(book => (
            <BookCard key={book.id} data={book} />
        ))
      }
     </div>

        <div>
            
        </div>
    </div>
  )
}

export default Books
