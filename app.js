function clock() {
  var fullDate = new Date();
  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();
  var seconds = fullDate.getSeconds();
  var time = "am";

  if (hours > 12) {
    hours = hours - 12;
    time = "pm";
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = ":" + minutes;
  document.getElementById("second").innerHTML = ":" + seconds;
  document.getElementById("time").innerHTML = time;
}

setInterval(clock, 100);
