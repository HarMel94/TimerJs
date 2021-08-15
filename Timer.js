
const days = document.querySelector(".days"),
      hours = document.querySelector(".hours"),
      minutes = document.querySelector(".minutes"),
      seconds = document.querySelector(".seconds");


function timer() {
  const dedlineDate = new Date("1 Jan 2022"),
        currentDate = new Date();

  const totalDate =  (dedlineDate - currentDate) / 1000;

  const dayDate = Math.floor(totalDate / 3600 / 24),
        hourDate = Math.floor(totalDate / 3600) % 24,
        minuteDate = Math.floor(totalDate / 60) % 60,
        secondDatee = Math.floor(totalDate) % 60;

  days.innerHTML = dayDate
  hours.innerHTML = addZero(hourDate)
  minutes.innerHTML = addZero(minuteDate)
  seconds.innerHTML = addZero(secondDatee)
};


const addZero = (arg) => arg < 10  ? `0${arg}` : arg;


timer();
setInterval(timer, 1000);