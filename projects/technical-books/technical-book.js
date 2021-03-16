import Book from "../available-books/book";

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition() {
    return `The current version of this book is ${this.edition}`;
  }
}

export default TechnicalBook;
