const stopWatch = document.getElementById("counter");
let sec = 0;
let min = 0;
let hour = 0;
let Timer = null;

function timerOn() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      hour++;
      min = 0;
    }
  }
  let h = hour < 10 ? "0" + hour : hour;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;

  stopWatch.innerHTML = h + ":" + m + ":" + s;
}

function startTimer() {
  if (Timer != null) {
    clearInterval(Timer);
  }
  Timer = setInterval(timerOn, 1000);
}

function stopTimer() {
  clearInterval(Timer);
}
function resetTimer() {
  clearInterval(Timer);
  sec = 0;
  min = 0;
  hour = 0;
  stopWatch.innerHTML = `00:00:00`;
}

// const hourCon = document.getElementById("hours");
// const minCon = document.getElementById("minute");
// const secondCon = document.getElementById("second");
// const startButton = document.getElementById("start-btn");
// const stopButton = document.getElementById("stop-btn");
// const resetButton = document.getElementById("reset-btn");
// const stopWatch = document.getElementById("counter");
// let sec = 0;
// let min = 0;
// let hour = 0;
// let Timer = null;
// // startButton.addEventListener("click", function () {
// //   if (timerId != null) {
// //     clearInterval(timerId);
// //   }
// //   timerId = setInterval(startTimer, 10);
// // });
// // stopButton.addEventListener("click", function () {
// //   clearInterval(timerId);
// // });
// // resetButton.addEventListener("click", function () {
// //   clearInterval(timerId);
// //   hourCon.innerText = "00:";
// //   minCon.innerText = "00:";
// //   secondCon.innerText = "00";
// // });
// // function startTimer() {
// //   if (stopTime == true) {
// //     stopTime = false;
// //     timerOn();
// //   }
// // }
// // function stopTimer() {
// //   if (stopTime == false) {
// //     stopTime = true;
// //   }
// // }

// function timerOn() {
//   sec++;
//   if ((stopTime = false)) {
//     sec = parseInt(sec);
//     min = parseInt(min);
//     hour = parseInt(hour);
//     sec++;
//     if (sec == 60) {
//       sec = 0;
//       min++;
//       if (min == 60) {
//         hour++;
//         sec = 0;
//         min = 0;
//       }
//     }
//     stopWatch.innerHTML = hour + ":" + min + ":" + sec;
//   }

//   //     if (sec < 10 || sec == 0) {
//   //       sec = `0` + sec;
//   //     }
//   //     if (min < 10 || min == 0) {
//   //       min = `0` + min;
//   //     }
//   //     if (hour < 10 || hour == 0) {
//   //       hour = `0` + hour;
//   //     }
//   //
//   //     setTimeout("timerOn()", 1000);
//   //   }
// }
// // function resetTimer() {
// //   stopWatch.innerHTML = `00:00:00`;
// // }
// function startTimer() {
//   if (Timer != null) {
//     clearInterval(Timer);
//   }
//   Timer = setInterval(timerOn, 1000);
// }
