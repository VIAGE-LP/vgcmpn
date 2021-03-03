// JavaScript Document
$(document).ready(function() {

  window.setInterval(countDown, 1);

});


function countDown() {
  var now = new Date();
  var future = new Date("05/20/2020 23:59:59");
  var timeLeft = future - now;
  var milli = timeLeft;

  var mills = now.getMilliseconds();
  var seconds = milli / 1000;
  var minutes = seconds / 60;
  var hours = minutes / 60;
  var days = hours / 24;

  var spareMills = mills.toString().substr(0, 2);
  var spareSeconds = seconds % 60;
  var spareMinutes = minutes % 60;
  var spareHours = hours % 24;
  var spareDays = days % 365;


  minutes = parseInt(minutes);
  hours = parseInt(hours);
  days = parseInt(days);
  spareSeconds = parseInt(spareSeconds);
  spareMinutes = parseInt(spareMinutes);
  spareHours = parseInt(spareHours);
  spareDays = parseInt(spareDays);

  days = padNumber(days);
  hours = padNumber(hours);
  minutes = padNumber(minutes);
  spareSeconds = padNumber(spareSeconds);
  spareMinutes = padNumber(spareMinutes);
  spareHours = padNumber(spareHours);
  spareDays = padNumber(spareDays);


  // timeLeft = spareDays  + "天" + spareHours + "時" + spareMinutes + "分" + spareSeconds + "." + spareMills;
  var mySpan = document.getElementById("countdown");
  mySpan.innerHTML = `${spareDays}<span class="unit">天</span> ${spareHours}<span class="unit">時</span> ${spareMinutes}<span class="unit">分</span> ${spareSeconds}.${spareMills}`;

  if (milli <= 0) { //Time's run out! If all values go to zero
      mySpan.innerHTML = "00:00:00";
  }
}

function padNumber(number) {
  if (number < 10) {
      number = "0" + number;
  }
  return number;
}