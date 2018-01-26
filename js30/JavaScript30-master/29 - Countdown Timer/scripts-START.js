let countdown;

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
  console.log(minutes);
  
}
