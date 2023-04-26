function setBackgroundColor(color) {
  let oneElement = document.getElementById('one');
  let twoElement = document.getElementById('two');
  let threeElement = document.getElementById('three');
  let fourElement = document.getElementById('four');
  let fiveElement = document.getElementById('five');
  let sixElement = document.getElementById('six');
  oneElement.style.backgroundColor = color;
  twoElement.style.backgroundColor = color;
  threeElement.style.backgroundColor = color;
  fourElement.style.backgroundColor = color;
  fiveElement.style.backgroundColor = color;
  sixElement.style.backgroundColor = color;
}

function redButtonClicked() {
  setBackgroundColor("#ff0000");
}
document.getElementById("redbutton").onclick = redButtonClicked;

function orangeButtonClicked() {
  setBackgroundColor("#ffa500");
}
document.getElementById("orangebutton").onclick = orangeButtonClicked;

function yellowButtonClicked() {
  setBackgroundColor("#dcdc04");
}
document.getElementById("yellowbutton").onclick = yellowButtonClicked;

function greenButtonClicked() {
  setBackgroundColor("#008000");
}
document.getElementById("greenbutton").onclick = greenButtonClicked;

function blueButtonClicked() {
  setBackgroundColor("#0000ff");
}
document.getElementById("bluebutton").onclick = blueButtonClicked;

let dice = document.getElementById('dice');
let min = 1;
let max = 24;

dice.onclick = function() {
  let x = getRandom(max, min);
  let y = getRandom(max, min);
  dice.style.transform = 'rotateX('+x+'deg) rotateY('+y+'deg)';
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max-min)) + min) * 90;
}



