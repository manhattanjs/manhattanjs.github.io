function isComplete(time) {
  return time <= 0;
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': isComplete(t) ? 0 : days,
    'hours': isComplete(t) ? 0 : hours,
    'minutes': isComplete(t) ? 0 : minutes,
    'seconds': isComplete(t) ? 0 : seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  if (!clock) {
    return;
  }

  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (isComplete(t.total)) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = 'January 10 2018 17:59:59 GMT-05:00';
initializeClock('clockdiv', deadline);
