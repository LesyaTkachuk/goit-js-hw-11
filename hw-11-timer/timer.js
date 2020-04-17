const makePads = value => String(value).padStart(2, '0');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timer = document.querySelector(selector);
    this.refs = {
      days: this.timer.querySelector('span[data-value="days"]'),
      hours: this.timer.querySelector('span[data-value="hours"]'),
      mins: this.timer.querySelector('span[data-value="mins"]'),
      secs: this.timer.querySelector('span[data-value="secs"]'),
    };
    this.targetDate = targetDate.getTime();
  }

  start() {
    this.intervalId = setInterval(() => {
      this.currentDate = Date.now();
      this.time = this.targetDate - this.currentDate;
      if (this.time < 1000) {
        this.stop();
      }
      this.update(this.time);
    }, 1000);
  }

  update(time) {
    this.daysValue = String(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hoursValue = makePads(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.minsValue = makePads(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.secsValue = makePads(Math.floor((time % (1000 * 60)) / 1000));
    this.refs.days.textContent = this.daysValue;
    this.refs.hours.textContent = this.hoursValue;
    this.refs.mins.textContent = this.minsValue;
    this.refs.secs.textContent = this.secsValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17,2020'),
});

document.addEventListener(
  'DOMContentLoaded',
  countdownTimer.start.bind(countdownTimer),
);
