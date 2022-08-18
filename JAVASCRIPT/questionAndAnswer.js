function startTimer(duration, display, callback) {
  var timer = duration,
    minutes,
    seconds;

  var myInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;

      // clear the interal
      clearInterval(myInterval);

      // use the callback
      if (callback) {
        callback();
      }
    }
  }, 1000);
}

// function to set the time interval and what to happen when the time runs out
window.onload = function () {
  var time = 60, // this is where you set the timer, it takes seconds as value
    display = document.querySelector("#timer");
  startTimer(
    time,
    display,
    function () {
      alert("TIME UP");
      alert(`Your result for this quiz is: ${result}/10`);
      for (radio of radios) {
        radio.disabled = true;
      }
      window.location.href = "index.html";
    },
    1000
  );
};

//   To select the elements from the html file
let validateAnswer = document.querySelectorAll(".correct");
let validateAnswerWrong = document.querySelectorAll(".wrong");
let validateButton = document.querySelector("button");
let result = 0;

for (let i = 0; i < validateAnswer.length; i++) {
  validateAnswer[i].addEventListener("change", () => {
    validateAnswer[i].style.backgroundColor = "green";
    validateAnswer[i].style.fontWeight = "bold";
    if ((validateAnswer[i].style.backgroundColor = "green")) {
      result = result + 1;
    }
  });
}

for (let i = 0; i < validateAnswerWrong.length; i++) {
  validateAnswerWrong[i].addEventListener("change", () => {
    validateAnswerWrong[i].style.backgroundColor = "red";
    validateAnswerWrong[i].style.fontWeight = "bold";
  });
}

var radios = document.querySelectorAll("input[type=radio]");
for (var i = 0, iLen = radios.length; i < iLen; i++) {
  radios[i].onclick = function () {
    showResult(this.name);
  };
}

validateButton.addEventListener("click", () => {
  alert(`Your result for this quiz is: ${result}/10`);
  for (radio of radios) {
    radio.disabled = true;
  }
  if (result == 10) {
    alert("Good Job");
  }

  window.location.href = "index.html";
});

function showResult(name) {
  var x = document.getElementsByName(name);
  for (var i = 0; i < x.length; i++) {
    x[i].disabled = true;
  }
}
