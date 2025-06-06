const imageEl = document.querySelector('img');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist')
const music = document.querySelector('audio');
const progressContainerEl = document.getElementById('progress-container');
const progressEl = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById('next');
const playPause = document.getElementById('play');


// Music 
const song = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacito Design'
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacito Design'
    },
    {
        name: 'jacinto-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacito Design',
    },
    {
        name: 'metric-1',
        displayName: 'Front Row(Remix)',
        artist: 'Metric/Jacito Design',
    },
]


// Check if playing
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

// Play or Pause Event Listener
playPause.addEventListener('click', () => {
    return isPlaying ?  pauseSong(): playSong(); 
});

// Update DOM
function loadSong(song){
    titleEl.textContent = song.displayName;
    artistEl.textContent = song.artist; 
    music.src = `music/${song.name}.mp3`
    imageEl.src = `img/${song.name}.jpg`
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong(){
    songIndex--;
   if(songIndex<0){
    songIndex= song.length -1
   }
    loadSong(song[songIndex]);
    playSong()
};

// Next Song
function nextSong(){
    songIndex++;
    if(songIndex>song.length -1){
        songIndex = 0; 
    }
    loadSong(song[songIndex]);
    playSong()
};

// On Load - Select First Song
loadSong(song[songIndex]);

// Update Progress Bar and Time
function updateProgressBar(e){
    if(isPlaying){
        const{duration, currentTime} = e.srcElement;
        // Update the progress bar width
        const progressPresent = (currentTime/duration)* 100;
        progressEl.style.width = `${progressPresent}%`;
        // Calculate display for duration
        const durationMinutes = Math.floor(duration/60);
        let durationSeconds = Math.floor(duration%60);
        if(durationSeconds<10){
            durationSeconds =  `0${Math.floor(duration%60)}`;
        }
        // Delay switiching the duration element to avoid NaN
        if(durationSeconds){
            durationEl.textContent =`${durationMinutes}:${durationSeconds}`
        }
        // Calculate display for current time
        const currentMinutes = Math.floor(currentTime/60);
        let currentSeconds = Math.floor(currentTime%60);
        if(currentSeconds<10){
            currentSeconds =  `0${Math.floor(currentTime%60)}`;
            }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`
    }
}

// Event Listerner
prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
music.addEventListener('timeupdate', updateProgressBar)