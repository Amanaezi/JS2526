let arrSrc = [
  "images/landscape-photography-tips-yosemite-valley-feature.webp",
  "images/lanscape.jfif",
  "images/UK_advice-gardening-growing-poppies_header.jpg",
];

let i = 0;
const slider = document.getElementById("slider");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const miniatures = document.getElementsByClassName("mini");

let timer;

function next() {
  i++;
  if (i >= arrSrc.length) {
    i = 0;
  }
  slider.src = arrSrc[i];
}

nextButton.addEventListener("click", next);

startButton.addEventListener("click", start);

function start() {
  stop();
  timer = setInterval(function () {
    next();
  }, 3000);
}

stopButton.addEventListener("click", stop);

function stop() {
  clearInterval(timer);
}

for (let i = 0; i < miniatures.length; i++) {
  miniatures[i].addEventListener("click", showSlide);
}

function showSlide(event) {
  let imageMini = event.target;
}

prevButton.addEventListener("click", previous);

function previous() {
  i--;
  if (i < 0) {
    i = arrSrc.length - 1;
  }
  slider.src = arrSrc[i];
}

for (let i = 0; i < miniatures.length; i++) {
  miniatures[i].addEventListener("click", showSlide);
}

function showSlide(event) {
  let imageMini = event.target;
}

const markers = document.querySelectorAll("#markers .marker");

function updateMarkers() {
  for (let j = 0; j < markers.length; j++) {
    markers[j].classList.remove("active");
  }
  markers[i].classList.add("active");
}

for (let j = 0; j < markers.length; j++) {
  markers[j].addEventListener("click", function () {
    i = j;
    slider.src = arrSrc[i];
    updateMarkers();
  });
}

function next() {
  i++;
  if (i >= arrSrc.length) {
    i = 0;
  }
  slider.src = arrSrc[i];
  updateMarkers();
}

function previous() {
  i--;
  if (i < 0) {
    i = arrSrc.length - 1;
  }
  slider.src = arrSrc[i];
  updateMarkers();
}
