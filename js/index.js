//https://cryptii.com/pipes/text-to-base64
// Q3VjdW1iZXI=
//VFX Art Scene - Tiamat Comet


let isPlaying = false;
let isMuted = false;

const value = "Cucumber";

document.querySelector("#title").textContent = btoa(value);

const video = document.querySelector("video");
const audio = document.querySelector("audio");

const soundButton = document.querySelector("#btn-sound");
const playButton = document.querySelector("#btn-play");

playButton.addEventListener("click", event => {
  isPlaying = !isPlaying;

  playButton.className = isPlaying ? "fas fa-pause" : "fas fa-play";

  if (isPlaying) {
    video.play();
    audio.play();
  }
  else {
    video.pause();
    audio.pause();
  }
});

soundButton.addEventListener("click", event => {
  isMuted = !isMuted;
  soundButton.className = isMuted ? "fas fa-volume-mute" : "fas fa-volume-up";
  audio.muted = isMuted;
});