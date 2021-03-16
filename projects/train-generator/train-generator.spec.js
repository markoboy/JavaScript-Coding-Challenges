import { expect } from 'chai';
import TrainGenerator from './train-generator';

describe('train-generator.js - basic functionality', () => {
  let trainGenerator;

  beforeEach(() => {
    trainGenerator = new TrainGenerator([
      'Poughkeepsie',
      'Newburgh',
      'Peekskill',
      'Yonkers',
      'Bronx',
      'Grand Central',
    ]);
  });

  it('initializes with a list of stations', () => {
    expect(trainGenerator).to.have.property('stationList');
  });

  it('contains a getNextStation() method', () => {
    expect(trainGenerator).to.respondTo('getNextStation');
  });

  it('returns next station when getNextStation() method is called', () => {
    const actual = trainGenerator.getNextStation();
    const expected = trainGenerator.stationList[0];

    expect(actual).to.be.equal(expected);

    const actual2 = trainGenerator.getNextStation();
    const expected2 = trainGenerator.stationList[1];

    expect(actual2).to.be.equal(expected2);
  });

  it('returns "We made it!" when there are no more stops', () => {
    let actual;
    const expected = 'We made it!';

    while(!trainGenerator.done) {
      actual = trainGenerator.getNextStation();
    }

    expect(actual).to.be.equal(expected);
  });
});
