let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // check if clock should stop?
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    // then display
    displayTimeLeft(secondsLeft);
  }, 1000);
}


function displayTimeLeft(seconds) {
  const minutes = parseInt(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${ minutes }:${ remainingSeconds < 10? '0' : ''}${ remainingSeconds }`;

  document.title = display;
  timerDisplay.textContent = display;
  
  console.log({minutes, remainingSeconds});
  
}
