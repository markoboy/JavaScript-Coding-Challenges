class TrainGenerator {
  constructor(stationList) {
    this.stationList = stationList;
    this.iterator = this.nextStationGenerator(stationList);
    this.done = false;
  }

  *nextStationGenerator(list) {
    for (const stationKey in list) {
      yield list[stationKey];
    }
  }

  getNextStation() {
    const { done, value } = this.iterator.next();
    this.done = done;

    if (this.done) {
      return 'We made it!';
    }

    return value;
  }
}

export default TrainGenerator;
