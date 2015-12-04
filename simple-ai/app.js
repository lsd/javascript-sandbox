var c = 0;

function tick() {
  // increment c and write it to stepsDone
  c++;
  document.getElementById('stepsDone').value = c;
}

var tickInterval;

function runSim(state) {
  // run simulation
  if (state == 1) {

    if (c > 100) {
      // force stop
      runSim('0');
    } else {
      tickInterval = setInterval("tick();", 100);
    }

  } else {
    // stop simulation
    clearInterval(tickInterval);
    c = 0;
    document.getElementById('stepsDone').value = c;
  }
}
