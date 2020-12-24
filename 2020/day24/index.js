//HINT: NOT ONLY EDITED THE SPIN() AND STOP() FUNCTIONS ;)

//globals
let stopped = false; //Has the stop button been pushed - false is default
let started = false;
let spinNumber = 0;
let targetInt; //The target number to stop the wheel on
const spinningElem = document.getElementById("spinning"); //The spinning number
let result = document.getElementById("result"); //display your result message here

//event listener
document
  .getElementById("stopButtonPressed")
  .addEventListener("click", stopButtonPressed);
document
  .getElementById("startButtonPressed")
  .addEventListener("click", startButtonPressed);

//When buttons are pushed
function stopButtonPressed() {
  stop();
  stopped = true;
}

function startButtonPressed() {
  spin();
  started = true;
}

//set the target Int
function setTargetInt() {
  const targetElem = document.getElementById("targetNum");
  targetInt = Math.floor(Math.random() * 101);
  targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

//EDIT THIS FUNCTION
const spin = async () => {
  if (!started) {
    spinNumber = 0;
    stopped = false;
    result.innerText = "";
    for (let i = 0; i <= 99; i++) {
      spinNumber++;
      await sleep(75); //Paste this wherever you need to sleep the incrimentor
      spinning.innerText = spinNumber;
      if (stopped) {
        break;
      } else if (i === 99) {
        stop();
      }
    }
  }
};

//EDIT THIS FUNCTION
async function stop(i) {
  stopped = true;
  started = false;
  //WRITE YOUR CODE HERE
  let offBy = spinNumber - targetInt;
  if (offBy === 0) {
    result.innerText = `Yeaaah buddy! You've won!\nWanna try again?\nI gonna reset the target number for you in 5 seconds`;
    await sleep(5000);
    setTargetInt();
    result.innerText = ``;
    spinning.innerText = ``;
  } else {
    result.innerText = `Ohhhhh! You've lost. You're off by ${offBy}. Try again!`;
  }
}

//main
setTargetInt();
