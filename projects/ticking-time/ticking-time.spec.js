import { expect } from 'chai';
import sinon from 'sinon';
import TickingTime from './ticking-time';

describe('ticking-time.js - basic functionality', () => {
  let tickingTime;
  let clock;

  before(() => {
    tickingTime = new TickingTime();
    clock = sinon.useFakeTimers(new Date());
  });

  after(() => {
    tickingTime.stop();
    clock.restore();
  });

  it('has a start() method', () => {
    expect(tickingTime).to.respondTo('start');
  });

  it('has a stop() method', () => {
    expect(tickingTime).to.respondTo('stop');
  });

  it('has a formatTime() method', () => {
    expect(tickingTime).to.respondTo('formatTime');
  });

  it('calls a callback every second with the current hours, minutes and seconds', () => {
    const date = new Date();
    let time = tickingTime.formatTime(date);

    const callback = (_time) => {
      time = _time;
    }

    // Start the callback and check that the time has not been changed
    tickingTime.start(callback);
    expect(time).to.be.equal(tickingTime.formatTime(date));

    // Tick the clock by 1 second
    clock.tick(1010);

    // Increase the current date's seconds by 1 and test that the time has been changed
    date.setSeconds(date.getSeconds() + 1);
    expect(time).to.be.equal(tickingTime.formatTime(date));
  });
});