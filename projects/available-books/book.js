class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  set title(title) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set author(author) {
    this._author = author;
  }

  get author() {
    return this._author;
  }

  set ISBN(ISBN) {
    this._ISBN = ISBN;
  }

  get ISBN() {
    return this._ISBN;
  }

  set numCopies(numCopies) {
    this._numCopies = numCopies;
  }

  get numCopies() {
    return this._numCopies;
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return 'out of stock';
    } else if (this.numCopies < 10) {
      return 'low stock';
    } else {
      return 'in stock';
    }
  }

  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  restock(numCopies = 5) {
    this.numCopies += numCopies;
  }
}

export default Book;
