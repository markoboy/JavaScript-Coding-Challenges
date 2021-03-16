import { expect } from 'chai';
import Book from '../available-books/book';
import TechnicalBook from './technical-book';

describe('technical-book.js', () => {
  describe('Basic functionality', () => {
    let technicalBook;

    before(() => {
      technicalBook = new TechnicalBook();
    });

    it('inherits from Book class', () => {
      expect(technicalBook).to.be.an.instanceOf(Book);
    });

    it('contains edition as an extra argument', () => {
      expect(technicalBook).to.have.property('edition');
    });

    it('contains getEdition() method', () => {
      expect(technicalBook).to.respondTo('getEdition');
    });
  });

  describe('getEdition() method', () => {
    it('returns the expected string', () => {
      const EDITION = 'v2021-2.28';
      const technicalBook = new TechnicalBook('Dive Into Design Patterns', 'Alexander Shvets', '', 5, EDITION);

      const actual = technicalBook.getEdition();
      const expected = `The current version of this book is ${EDITION}`;

      expect(actual).to.be.equal(expected);
    });
  });
})
