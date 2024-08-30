// Toggle Dark Mode
const mod = document.querySelector('#mode');

mod.addEventListener('click', () => {
    document.querySelector('.phone').classList.toggle('dark');
    document.querySelector('.bi-brightness-high-fill').classList.toggle('bi-moon');
}); 

// Select Elements
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const playPauseButton = document.getElementById("playPauseButton");

// Initialize progress bar
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Play/Pause Function
function playPause() {
    if (ctrlIcon.classList.contains("fa-play")) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.add("fa-play");
        ctrlIcon.classList.remove("fa-pause");
    }
}

// Update progress bar
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

// Progress bar change
progress.onchange = function() {
    song.currentTime = progress.value;
    if (ctrlIcon.classList.contains("fa-play")) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
};

// Add event listener for play/pause button
playPauseButton.addEventListener('click', playPause);
