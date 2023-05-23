var timerElement = document.querySelector('.timer');
var countdownDate = new Date('2023-05-28T10:00:00').getTime();

function updateTimer() {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  if (distance <= 0) {
    timerElement.textContent = "00:00:00";
    clearInterval(intervalId);
    return;
  }

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var timerText = hours.toString().padStart(2, '0') + ':' +
                  minutes.toString().padStart(2, '0') + ':' +
                  seconds.toString().padStart(2, '0');
  
  timerElement.textContent = timerText;
}

var intervalId = setInterval(updateTimer, 1000);