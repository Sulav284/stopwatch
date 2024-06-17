const timer = document.querySelector("#timer");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const buttons = document.querySelectorAll("button");
const record = document.querySelector("#record");
const ul = document.querySelector("ul");
const mscontainer = document.querySelector("#mscontainer");
const timecontainer = document.querySelector(".timecontainer");
let a = null;
let milisecond = 00;
let seconds = 00;
let minutes = 00;
let hours = 00;


function settime() {
  milisecond++;
  if (milisecond == 100) {
    milisecond = 0;
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;

      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let ms = milisecond < 10 ? "0" + milisecond : milisecond;
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timecontainer.innerHTML = h + ":" + m + ":" + s;
  mscontainer.innerHTML = ms;
}

function starttimer() {
  if (a !== null) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = "(." + mscontainer.innerHTML + ")";
  li.innerHTML = timecontainer.innerHTML;
    li.appendChild(span)
    ul.appendChild(li) ;
    clearInterval(a);
  }
  a = setInterval(settime, 10);
}

play.addEventListener('click', starttimer);



function pauser() {
  clearInterval(a);
}

pause.addEventListener('click', pauser);



function remover() {
  clearInterval(a);
  timecontainer.innerHTML = "00:00:00";
  mscontainer.innerHTML = "00";
  milisecond = 00;
  seconds = 00;
  minutes = 00;
  hours = 00;
}
reset.addEventListener('click', remover);
