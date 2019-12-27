

var timerDiv = document.querySelector('.timer')
var startBtn = document.querySelector('.startButton')
var pauseBtn = document.querySelector('.pauseButton')
var resetBtn = document.querySelector('.resetButton')


var seconds = 0;
var timerId = null;

var tick = function () {
  seconds++
  timerDiv.textContent = String(seconds)
}


var handleStart = function () {


  if (timerId !== null) {
    return
  }

  timerId = setInterval(tick, 1000)
}


var handlePause = function () {

  clearInterval(timerId)
  timerId = null
}

var handleReset = function () {
    
    clearInterval(timerId)
    timerId = null
    timerDiv.textContent = '0'
    seconds = 0
  }


startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
resetBtn.addEventListener('click', handleReset)

