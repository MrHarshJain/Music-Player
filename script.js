const prevBtn = document.getElementById("prev");
const music = document.querySelector('audio');
const nextBtn = document.getElementById('next');
const playPause = document.getElementById('play');

let isPlaying = false
// Play
function playSong(){
    isPlaying = true;
    play.classList.replace("fa-play", "fa-pause")
    play.setAttribute('title', 'Pause')
    music.play();
}

// Pause
function pauseSong(){
    isPlaying = false
    play.classList.replace("fa-pause", "fa-play")
    play.setAttribute('title', 'Play')
    music.pause()
};


playPause.addEventListener('click', () => {
    return isPlaying ?  pauseSong(): playSong(); 
});

