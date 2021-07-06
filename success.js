var timeleft = 10;
var redirecttimer = setInterval(function () {
  if (timeleft == 0) {
    clearInterval(redirecttimer);
  }
  document.getElementById("redirectbar").value = 10 - timeleft;
  timeleft -= 1;
  document.getElementById("count").innerHTML = timeleft + 1;
}, 1000);
