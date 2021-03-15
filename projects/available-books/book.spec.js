import { expect } from 'chai';
import Book from './book';

describe('Book Class', () => {
  describe('basic functionality', () => {
    let book;

    before(() => {
      book = new Book();
    });

    it('contains title, author, ISBN, numCopies fields', () => {
      expect(book).to.have.property('title');
      expect(book).to.have.property('author');
      expect(book).to.have.property('ISBN');
      expect(book).to.have.property('numCopies');
    });

    it('has getAvailability() method', () => {
      expect(book).to.have.property('getAvailability');
      expect(book.getAvailability).to.be.a('function');
    });

    it('has sell(numSold) method', () => {
      expect(book).to.have.property('sell');
      expect(book.sell).to.be.a('function');
    });

    it('has restock(numCopies) method', () => {
      expect(book).to.have.property('restock');
      expect(book.restock).to.be.a('function');
    });
  });

  describe('getAvailability()', () => {
    it('returns "out of stock" if there are 0 available copies', () => {
      const book = new Book('', '', '', 0);
      const actual = book.getAvailability();
      const expected = 'out of stock';

      expect(actual).to.be.equal(expected);
    });

    it('returns "low stock" if available copies < 10', () => {
      const book = new Book('', '', '', 9);
      const actual = book.getAvailability();
      const expected = 'low stock';

      expect(actual).to.be.equal(expected);
    });

    it('returns "in stock" if available copies >= 10', () => {
      const book = new Book('', '', '', 10);
      const actual = book.getAvailability();
      const expected = 'in stock';

      expect(actual).to.be.equal(expected);
    });
  });

  describe('sell(numSold)', () => {
    it('subtract the total copies in stock', () => {
      const TOTAL_COPIES = 10;
      const NUM_SOLD = 5;
      const book = new Book('', '', '', TOTAL_COPIES);

      book.sell(NUM_SOLD);

      const actual = book.numCopies;
      const expected = TOTAL_COPIES - NUM_SOLD;

      expect(actual).to.be.equal(expected);
    });

    it('defaults to 1 book to be sold when no argument is passed', () => {
      const TOTAL_COPIES = 5;
      const book = new Book('', '', '', TOTAL_COPIES);

      book.sell();

      const actual = book.numCopies;
      const expected = TOTAL_COPIES - 1;

      expect(actual).to.be.equal(expected);
    });
  });

  describe('restock(numCopies)', () => {
    it('increase the total book copies', () => {
      const TOTAL_COPIES = 5;
      const COPIES_TO_ADD = 5;
      const book = new Book('', '', '', TOTAL_COPIES);

      book.restock(COPIES_TO_ADD);

      const actual = book.numCopies;
      const expected = TOTAL_COPIES + COPIES_TO_ADD;

      expect(actual).to.be.equal(expected);
    });

    it('increase the total book copies by 5 when no argument is provided', () => {
      const TOTAL_COPIES = 5;
      const book = new Book('', '', '', TOTAL_COPIES);

      book.restock();

      const actual = book.numCopies;
      const expected = TOTAL_COPIES + 5;

      expect(actual).to.be.equal(expected);
    });
  });

});
