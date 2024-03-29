import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(currentTimeOnPlay, 1000));

function currentTimeOnPlay(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

// player.setCurrentTime(
//     localStorage.getItem('videoplayer-current-time')
//     ? localStorage.getItem('videoplayer-current-time')
//     : 0
//     );

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
