import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', onPlay);
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onPlay(data) {
    const videoplayerCurrentTime = localStorage.getItem("videoplayer-current-time");

    if (!videoplayerCurrentTime) {
        return;
    }

    if (videoplayerCurrentTime < data.duration) {
        player.setCurrentTime(videoplayerCurrentTime);
        return;
    } 
    
    localStorage.removeItem("videoplayer-current-time");

};

function  onTimeUpdate (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}
