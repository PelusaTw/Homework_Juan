let wordsDayList = ["RATON", "PERRO","NEGRO", "JORGE", "PAPAS"]

const wordUser = document.querySelector("#word-user");
const btnAdd = document.querySelector("#btn-add");
const gridWords = document.querySelector("#grid-words");
const wordsUserList = [];
// contador de la fila actual
let currentRow = 0;
let wordDay = "RATON";
let toggle = document.getElementById("switch");
let body = document.body;

toggle.addEventListener("click", function () {
  body.classList.toggle("dark")
});

// creamos la matriz dinamicamente con js en vez de usar html
//function randomIntBetween(min, max) {
   // return Math.floor(Math.random(random) * (max - min + 1)) + min
//}

function createGrid() {
    for (let f = 0; f < 5; f++) {
        for (let c = 0; c < 5; c++) {
            gridWords.innerHTML += `
            <div id="row-${f}-${c}"></div>
            `;
        }
    }
}

function addWord() {
    const word = wordUser.value;
    const letters = Array.from(word); // Array.from este comando transforma un string en un array de letras
    for (let c = 0; c < 5; c++) {
        const box = document.querySelector(`#row-${currentRow}-${c}`);
        box.textContent = letters[c];
    }
    wordsUserList.push(word);
}

function compareWords(wordUser, wordDay) {
    const letterWordUser = Array.from(wordUser.toUpperCase());
    const letterWordDay = Array.from(wordDay);
    console.log(letterWordUser);
    console.log(letterWordDay);
    for (let c = 0; c < 5; c++) {
        const box = document.querySelector(`#row-${currentRow}-${c}`);
        let letterA = letterWordUser[c];
        let letterB = letterWordDay[c];
        if (letterA === letterB) {
            box.classList.add("green-letter");
        } else if (letterWordDay.some(e => e == letterA)) {
            box.classList.add("yellow-letter")
        } else {
            box.classList.add("grey-letter")
        }
    }
    if (wordUser === wordDay) {
        alert("You win!")
    }
}

function init() {
    //let index = randomIntBetween(0, wordsDayList.length - 1);
    //wordDay = wordsDayList[i];

    
    createGrid();
    btnAdd.addEventListener("click", function () {
        addWord();
        compareWords(wordUser.value, wordDay);
        currentRow = currentRow + 1;
    });
}


init();
