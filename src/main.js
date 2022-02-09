const tongue = document.querySelector(".tongue");
const audio = document.querySelector("#audio");
console.log(tongue, audio);
tongue.onmouseover = () => {
  audio.play();
};
