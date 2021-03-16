export const timeWithLeadingZero = (t) => `0${t}`.slice(-2);

class TickingTime {
  constructor() {
    this.timer = 0;
    this.cb = null;

    this.loop = this.loop.bind(this);
  }

  start(cb) {
    this.cb = cb;
    this.stop();
    this.timer = setTimeout(this.loop, 1000);
  }

  formatTime(date) {
    return `${timeWithLeadingZero(date.getHours())}:${timeWithLeadingZero(date.getMinutes())}:${timeWithLeadingZero(date.getSeconds())}`;
  }

  loop() {
    const date = new Date();
    const time = this.formatTime(date);
    this.cb && this.cb(time);
    this.timer = setTimeout(this.loop, 1000);
  }

  stop() {
    clearTimeout(this.timer);
  }
}

export default TickingTime;
