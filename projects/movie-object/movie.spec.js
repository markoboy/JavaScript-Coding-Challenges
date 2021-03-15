import { expect } from 'chai';
import Movie from './movie';

describe('Movie Prototype', () => {
  describe('Basic functionality', () => {
    let movie;

    before(() => {
      movie = new Movie();
    });

    it('contains title, director, genre, releaseYear, rating properties', () => {
      expect(movie).to.have.property('title');
      expect(movie).to.have.property('director');
      expect(movie).to.have.property('genre');
      expect(movie).to.have.property('releaseYear');
      expect(movie).to.have.property('rating');
    });

    it('has a getOverview() method', () => {
      expect(movie).to.have.property('getOverview');
      expect(movie.getOverview).to.be.a('function');
    });
  });

  describe('getOverview()', () => {
    it('returns the overview of the movie', () => {
      const movie = new Movie('Transformer 7', 'Transformer', 'Science Fiction', 2019, 7.6);

      const actual = movie.getOverview();
      const expected = 'Transformer 7, a Science Fiction film directed by Transformer was released in 2019. It received a rating of 7.6';

      expect(actual).to.be.equal(expected);
    });
  });
});