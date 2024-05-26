const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
const book = getBook(3);


const title = book.title;
title;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
console.log(primaryGenre, secondaryGenre, otherGenre);

//Adding new array
const newGenre = [...genres, "beautiful-day"];
console.log(newGenre);

const updateBook = {
  ...book,
  //creating a new object
  moviePublicationDate: "2004-5-09",

  //overwriting an object
  pages: "3000",
};
console.log(updateBook);

const getYear = (yearn) => yearn.split("-")[0];
console.log(getYear(publicationDate));

const summary = `The book ${title}, was written by the icon ${author}, in the year ${getYear(
  publicationDate
)} the book has ${hasMovieAdaptation ? "" : "not"}been adapted as a movie`;
summary;

const pageRange =
  pages < 1000 ? "it has less than 1000 pages" : "more than a thousand";
console.log(`The book has ${pageRange} pages`);

//short-circuting

console.log(true && "
today is a good");
console.log(false && "tomorrow will be yesterday");
console.log(0 && " ");
console.log("" && 0);

console.log(true || "I am a good person");
 console.log(false || "dont say a thing");
console.log(0 || "happy day");
console.log(book.translations.spanish);
const spanishTranslation =
  book.translations.spanish || "No spanish translation";
console.log(spanishTranslation);

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
console.log(countWrong);

console.log(book.reviews.librarything.reviewsCount);
const countRight = book.reviews.librarything.reviewsCount ?? "no data";
console.log(countRight);

const totalCount = (book) =>
  book.reviews?.librarything?.reviewsCount ??
  0 + book.reviews?.goodreads?.reviewsCount ??
  0;
console.log(totalCount(book));
totalCount;

function getTotalCount(book) {
  getCount =
    book.reviews.librarything.reviewsCount +
    book.reviews.goodreads.reviewsCount;
}
console.log(getTotalCount(book));
getCount;

*/

const books = getBooks();
books;

const title = books.map((book) => book.title);
title;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

const longBookWithMo = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBookWithMo;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const allBookPage = books.reduce((acc, book) => acc + book.pages, 0);
allBookPage;

const arr = [3, 32, 6, 54, 2, 0, 5];
const sorarr = arr.slice().sort((a, b) => a - b);
sorarr;
arr;

const sortPages = books.slice().sort((a, b) => a.pages - b.pages);
sortPages;

const newBook = {
  id: 6,
  title: "Harry Poter and the Chambar of Secrets",
  author: "J. K. Rowling",
};

const addNewBook = [...books, newBook];
addNewBook;

const delBook = addNewBook.filter((book) => book.id !== 3);
delBook;

const updateBook = delBook.map((book) =>
  book.id == 1 ? { ...book, pages: 5087 } : book
);
updateBook;
