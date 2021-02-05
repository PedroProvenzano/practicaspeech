const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "es-MX";
recognition.onstart = function () {
  console.log("voice is on");
};

recognition.onresult = function (event) {
  const message = event.results[0][0].transcript;
  const name = document.getElementById("input").value;
  console.log(event.results[0][0].transcript);
  if (message == "Hola") {
    readOutLoud(`buenos dias, ${name}`);
  }
};

const button = document.getElementById("button");

button.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1.1;
  speech.pitch = 0.9;
  speech.lang = "es-MX";
  window.speechSynthesis.speak(speech);
}
