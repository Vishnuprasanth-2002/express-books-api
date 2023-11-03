const { v4: uuidv4 } = require("uuid");
const { isValidISBN } = require("./Validation/ISBN_validation");

// const users = [
//   {
//     id: 100,
//     name: "Ram",
//   },
// ];

// const bookid = uuidv4();

// const newBook = {
//   id: bookid,
// };
// const bookRating = {
//   bookId: bookid,
// };

const books = [
  {
    id: 1234,
    title: "wings of fire",
    isbn: "007462542X",
  },
];

// const booksRatings = [
//   {
//     id: 200,
//     ratings: 4,
//     bookId: 1234,
//     // userId: 100,
//   },
// ];

const getAllBooks = () => books;
const addBook = ({ title, isbn }) => {
  if (isValidISBN(isbn)) {
    const id = uuidv4();
    const b = {
      id,
      title,
      isbn,
    };
    books.push(b);
    return b;
  } else console.log("Invalid");
};
module.exports = {
  getAllBooks,
  addBook,
};
