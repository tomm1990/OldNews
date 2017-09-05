var audio,volumeRange,seekbar;

window.onload = function () {
  // get the audio, volume and seekbar elements
   audio = document.getElementById("audio1");
   volumeRange = document.getElementById('volume');
   seekbar = document.getElementById('seekbar');
    audio.addEventListener('timeupdate', UpdateTheTime, false);
    audio.addEventListener('durationchange', SetSeekBar, false);
    volumeRange.value = audio.volume;
};

// fires when volume element is changed
function ChangeVolume() {
    var myVol = volumeRange.value;
    audio.volume = myVol;
    if (myVol == 0) {
        audio.muted = true;
    } else {
        audio.muted = false;
    }
}

// fires when page loads, it sets the min and max range of the video
function SetSeekBar() {
    seekbar.min = 0;
    seekbar.max = audio.duration;
}

// fires when seekbar is changed
function ChangeTheTime() {
    audio.currentTime = seekbar.value;
}

function UpdateTheTime() {
    var sec = audio.currentTime;
    var h = Math.floor(sec / 3600);
    sec = sec % 3600;
    var min = Math.floor(sec / 60);
    sec = Math.floor(sec % 60);
    if (sec.toString().length < 2) sec = "0" + sec;
    if (min.toString().length < 2) min = "0" + min;
    document.getElementById('lblTime').innerHTML = h + ":" + min + ":" + sec;
    seekbar.min = audio.startTime;
    seekbar.max = audio.duration;
    seekbar.value = audio.currentTime;
}

// fires when Play button is clicked
function PlayNow() {
    if (audio.paused) {
        audio.play();
    } else if (audio.ended) {
        audio.currentTime = 0;
        audio.play();
    }
}
// fires when Pause button is clicked
function PauseNow() {
    if (audio.play) {
        audio.pause();
    }
}
// fires when Mute button is clicked
function MuteNow() {
    if (audio.muted) {
        audio.muted = false;
        volumeRange.value = audio.volume;
    }
    else {
        audio.muted = true;
        volumeRange.value = 0;
    }
}
