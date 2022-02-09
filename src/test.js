import string from "./css.js";

const player = {
  n: 1,
  time: 100,
  id: undefined,
  ui: {
    cssDiv: document.querySelector("#cssDiv"),
    textDiv: document.querySelector("#textDiv"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    player.ui.textDiv.innerText = string.substring(0, player.n);
    player.ui.cssDiv.innerHTml = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.textDiv.innerText = string.substring(0, player.n);
    player.ui.cssDiv.innerHTML = string.substring(0, player.n);
    player.ui.textDiv.scrollTop = player.ui.textDiv.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
