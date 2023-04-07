const btnPlay = document.querySelector("#play-btn");
const btnSwitch = document.querySelector(".switch");
const pag1 = document.querySelector(".pag1");
const pag2 = document.querySelector(".pag2");
const pag3 = document.querySelector(".pag3");
const image = document.querySelector("#img");
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");
const iconPlay = document.querySelector("#icon-play");
const btnFullscreen = document.querySelector("#fullscreen-btn");


//Boton Modo Oscuro

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

//local storage Modo Oscuro

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}


//Boton de reproduccion

iconPlay.addEventListener("click", () => {
  iconPlay.classList.toggle("fa-circle-pause");
});

//Reproductor de musica

let audio = new Audio("./Arcane.mp3");

btnPlay.addEventListener("click", togglePlay());

var isPlaying = false; // Nose porque solo funciona con var
audio.pause(); //si no lo pongo la musica inicia cuando abro al pagina

function togglePlay() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
}

audio.onplaying = function () {
  isPlaying = true;
};
audio.onpause = function () {
  isPlaying = false;
};

//Selector de paginas

pag1.onclick = function () {
  image.src = "./img/comic-lol1.jfif";
};
pag2.onclick = function () {
  image.src = "./img/comic-lol2.jfif";
};
pag3.onclick = function () {
  image.src = "./img/comic-lol3.jfif";
};

// Selector de pagina con las flechas

let img = new Array(
  "./img/comic-lol1.jfif",
  "./img/comic-lol2.jfif",
  "./img/comic-lol3.jfif"
);

let i = 0;

function nextImg() {
  if (i < img.length - 1) {
    i++;
  } else {
    i = 0;
  }
  image.src = img[i];
}

function previousImg() {
  if (i > 0) {
    i--;
  } else {
    i = img.length - 1;
  }
  image.src = img[i];
}

// Pantalla completa

let myDocument = document.documentElement;

function openFullscreen() {
  if (myDocument.requestFullscreen) {
      myDocument.requestFullscreen(); 
      footer.style.display = 'none';
  }else{
    myDocument.exitFullscreen();
      footer.style.display = 'flex';
  }
}





