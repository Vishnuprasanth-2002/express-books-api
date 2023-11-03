const express = require("express");
const morgan = require("morgan");
const { getAllBooks, addBook } = require("./db");
const { bookSchema } = require("./Validation/book.schema");
const { validate } = require("./Validation/validate.middleware");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get(
  "/books",
  (getAllBooksController = (req, res) => {
    const books = getAllBooks();
    res.send(books);
  })
);
app.post(
  "/books",
  validate(
    (bookSchema = Joi.object({
      title: Joi.string().required(),
      isbn: Joi.string().required(),
    }))
  ),
  (AddBookController = (req, res) => {
    const book = addBook(req.xop);
    res.send(book);
  })
);
app.put("/:id", validate(movieSchema), updateMovieController);

app.use(
  (errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message || ["An unknown error"],
    });
  })
);

app.listen(3000, () => {
  console.log("Server running on 3000");
});
