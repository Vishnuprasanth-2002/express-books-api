## 1. GET /books

Response:

```
[
    {
        id: 213,
        title: '',
        isbn: '',
    },
    {
        id: 215,
        title: '',
        isbn: '',
    },
    {
        id: 216,
        title: '',
        isbn: '',
    },
]

```

## 2. POST /books

isbn validation: https://www.geeksforgeeks.org/program-check-isbn/

Request:

```
{
    title: '',
    isbn: '', // validation
}
```

## 3. POST /books/:book_id/rating

```
{
    rating: 0 and 5,
}
```

## 4. GET /books/:book_id

```
{
    id: 216,
    title: '',
    isbn: '',
    rating: 4,
}
```

return 0 if no rating is set for a book

## 5. PUT /books/:book_id

```
{
    title: ''
}
```

no isbn should be passed

## 6. DEL /books/:book_id

```
show that deleted object
```

## 7. PUT /books/:book_id/rating

```
{
    rating: 0 and 5,
}
```

if rating is not found for a book, return error saying so

## 8. GET /rating/:rating_id

```
{
    id: 100,
    rating: 3,
    book: {
        id: 216,
        title: '',
        isbn: '',
    }
}
```

## 9. DEL /rating/:rating_id

```
show that deleted object
```
