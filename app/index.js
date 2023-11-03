const express = require("express");
const morgan = require("morgan");
const { getAllBooks, addBook, addRating } = require("./db");
const { bookSchema } = require("./Validation/book.schema");
const { validate } = require("./Validation/validate.middleware");
const Joi = require("joi");

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
app.post("/books", (req, res) => {
  const AddbookSchema = Joi.object({
    title: Joi.string().required(),
    isbn: Joi.string().required(),
  });
  const { value, error } = AddbookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details.map((d) => d.message),
    });
  }
  const book = addBook(value);
  return res.send(book);
});

app.post("/books/:id/rating", (req, res) => {
  const ratingSchema = Joi.object({
    rating: Joi.number().min(0).max(5).required(),
  });

  const { value, error } = ratingSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details.map((d) => d.message),
    });
  }

  const rating = addRating({
    rating: req.body.rating,
    bookId: req.params.id,
  });
  return res.json(rating);
});
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
