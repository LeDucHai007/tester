const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const nextBtn = document.querySelector('.play-forward');
const prevBtn = document.querySelector('.play-back');
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const musicName = document.querySelector(".music-name");
const musicImage = document.querySelector(".music-thumb img");
const musicThumbnail = document.querySelector(".music-thumb");
const playRepeat = document.querySelector(".play-repeat");
const volumeControl = document.querySelector(".controls");
const volumePanel = document.querySelector(".volume-panel");
const volumeRange = document.querySelector(".input");
const volumeProgress = document.querySelector(".volume-progress");
const volumeButton = document.querySelector(".volume-btn");




let songStatus = 0;
let isRepeat = false;
let isPlaying = true;
let indexSong = 0;
// const musics = ["Dango-Daikazoku.mp3", "NuocNgoai.mp3"];
const musics = [{
        id: 1,
        title: "Dango Daikazoku",
        file: "Dango-Daikazoku.mp3",
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    },
    {
        id: 2,
        title: "Nước ngoài",
        file: "NuocNgoai.mp3",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 3,
        title: "Cha già rồi đúng không?",
        file: "Cha gia roi dung khong.mp3",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 4,
        title: "Cha và con gái",
        file: "Cha va con gai.mp3",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 5,
        title: "Thưa mẹ con đi",
        file: "Thua me con di.mp3",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 6,
        title: "Lớn rồi mà còn khóc nhè",
        file: "Lon roi con khoc nhe.mp3",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 7,
        title: "Đi về nhà",
        file: "Di ve nha.mp3",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 8,
        title: "Remember me",
        file: "Remember me.mp3",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 8,
        title: "Chuyện nhà bé thôi, con đừng về",
        file: "Chuyen nha be thoi con dung ve.mp3",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 9,
        title: "Nứt",
        file: "Nut.mp3",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
        id: 10,
        title: "Believer",
        file: "Believer.mp3",
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    }
]


let timer;
let repeatCount = 0;
playRepeat.addEventListener("click", function() {

    if (isRepeat) {

        isRepeat = false;
        playRepeat.removeAttribute("style");
    } else {

        isRepeat = true;
        playRepeat.style.color = "#ffb86c";
    }
});

nextBtn.addEventListener("click", function() {
    changeSong(1)
});
prevBtn.addEventListener("click", function() {
    changeSong(-1)
});
song.addEventListener("ended", handleEndedSong);

function handleEndedSong() {
    repeatCount++;
    if (isRepeat && repeatCount === 1) {
        isPlaying = true;
        playPause();
    } else {
        changeSong(1);
    }
}

function changeSong(dir) {
    if (dir == 1) {
        indexSong++
        if (indexSong >= musics.length) {
            indexSong = 0;
        }
        isPlaying = true;
    } else if (dir == -1) {
        indexSong--
        if (indexSong < 0) {
            indexSong = musics.length - 1;
        }
        isPlaying = true;

    }
    init(indexSong);
    // song.setAttribute("src", `./music/${musics[indexSong].file}`);
    playPause();
}
playBtn.addEventListener("click", playPause);

function playPause() {
    if (isPlaying) {
        musicThumbnail.classList.add("is-playing");
        song.play();
        isPlaying = false;
        document.querySelector(".play-icon").className = "fa fa-pause play-icon";
        timer = setInterval(displayTimer, 500);
    } else {
        musicThumbnail.classList.remove("is-playing");
        song.pause();
        isPlaying = true;
        document.querySelector(".play-icon").className = "fa fa-play play-icon";
        clearInterval(timer);
    }
}

function displayTimer() {


    const { duration, currentTime } = song;
    rangeBar.max = duration;
    rangeBar.value = currentTime;
    console.log =
        remainingTime.textContent = formatTimer(currentTime)
    if (!duration) {
        durationTime.textContent = "00:00";
    } else {
        durationTime.textContent = formatTimer(duration);
    }
}

function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes < 10 ? '0' + minutes: minutes}:${seconds < 10 ? '0' + seconds: seconds}`;
}

rangeBar.addEventListener("change", handleChangeBar);

function handleChangeBar() {
    song.currentTime = rangeBar.value;
}

function init(indexSong) {

    song.setAttribute("src", `./music/${musics[indexSong].file}`);
    musicImage.setAttribute("src", musics[indexSong].image);
    musicName.textContent = musics[indexSong].title;
}
displayTimer();
init(indexSong);

volumeRange.addEventListener("input", function(e) {
    volumeProgress.style.width = volumeRange.value + '%';
}, false);

volumeButton.addEventListener("mouseenter", function() {

    volumePanel.style.width = "52px";
    volumePanel.style.overflow = "none";
})