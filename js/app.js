let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songContainer = document.getElementById("songItemContainer");

let songs = [
  {
    songName: "Parano",
    filePath: "assets/songs/parano.mp3",
    coverPath: "assets/covers/1.jpg",
  },
  {
    songName: "Vatimbora",
    filePath: "assets/songs/vaitimbora.mp3",
    coverPath: "assets/covers/2.jpg",
  },
  {
    songName: "Don't Copy My Flow",
    filePath: "assets/songs/dont-copy-my-flow.mp3",
    coverPath: "assets/covers/3.jpg",
  },
  {
    songName: "Tout Donner",
    filePath: "assets/songs/tout-donner.mp3",
    coverPath: "assets/covers/4.jpg",
  },
  {
    songName: "Ku Lo Sa",
    filePath: "assets/songs/ku-lo-sa.mp3",
    coverPath: "assets/covers/5.jpg",
  },
  {
    songName: "Chuttamalle",
    filePath: "assets/songs/chuttamalle.mp3",
    coverPath: "assets/covers/6.png",
  },
  {
    songName: "Tadow",
    filePath: "assets/songs/tadow.mp3",
    coverPath: "assets/covers/7.jpg",
  },
  {
    songName: "One of the Girls",
    filePath: "assets/songs/one-of-the-girls.mp3",
    coverPath: "assets/covers/8.jpg",
  },
];

// Dynamically generate song list
songs.forEach((song, i) => {
  let html = `
    <div class="songItem">
      <img src="${song.coverPath}" alt="${i}">
      <span class="songName">${song.songName}</span>
      <span class="songListPlay">
        <span class="timestamp">
          <i id="${i}" class="fa-solid songItemPlay fa-circle-play"></i>
        </span>
      </span>
    </div>`;
  songContainer.innerHTML += html;
});

const updatePlayIcons = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    },
  );
};

const playSong = (index) => {
  songIndex = index;
  audioElement.src = songs[songIndex].filePath;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.replace("fa-circle-play", "fa-circle-pause");
  updatePlayIcons();
  document
    .getElementById(songIndex)
    .classList.replace("fa-circle-play", "fa-circle-pause");
};

masterPlay.addEventListener("click", () => {
  if (audioElement.src === "" && songs.length > 0) {
    playSong(0);
  } else if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.replace("fa-circle-play", "fa-circle-pause");
    gif.style.opacity = 1;
    document
      .getElementById(songIndex)
      .classList.replace("fa-circle-play", "fa-circle-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.replace("fa-circle-pause", "fa-circle-play");
    gif.style.opacity = 0;
    updatePlayIcons();
  }
});

audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100,
  );
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("input", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      let clickedIndex = parseInt(e.target.id);
      if (songIndex === clickedIndex && !audioElement.paused) {
        audioElement.pause();
        e.target.classList.replace("fa-circle-pause", "fa-circle-play");
        masterPlay.classList.replace("fa-circle-pause", "fa-circle-play");
        gif.style.opacity = 0;
      } else {
        playSong(clickedIndex);
      }
    });
  },
);

document.getElementById("next").addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  playSong(songIndex);
});

document.getElementById("previous").addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playSong(songIndex);
});
