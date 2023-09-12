class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    //set the interval formula
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      //we make sure there is a callback. if yes,with each second that is added we send it to the next function
      //that will update the clock in html.
      if (printTimeCallback) {
        printTimeCallback(this.currentTime);
      } 
    }, 1000);
    
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here. calculate the seconds after a minute has passed.
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    if (!value[1]) {
      const valueString = value.toString();
      return ("0" + valueString).slice(-2);
    } else {
      return value.toString();
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
