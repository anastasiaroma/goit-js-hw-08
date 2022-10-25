import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = document.querySelector('#vimeo-player');
const playerVimeo = new Player(player);
const CURRENT_TIME_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(CURRENT_TIME_KEY);

if (currentTime) {
  playerVimeo.setCurrentTime(currentTime);
}

playerVimeo.on('timeupdate', throttle(setCurrentTime, 1000));

function setCurrentTime({ seconds }) {
  localStorage.setItem(CURRENT_TIME_KEY, seconds);
}