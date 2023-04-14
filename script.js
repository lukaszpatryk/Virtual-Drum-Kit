const container = document.getElementById("container");
const keyIdArray = ["w","s","d","f","g","h","j","t","l"];
const keyNameArray = ["Clap","Hihat","Kick","Openhat","Boom","Ride","Snare","Tom","Link"];
const header = document.createElement("header");
const main =document.createElement("div");
const keyContainer = document.createElement("div");
const additionalButtons = document.createElement("div");
const showAndHideBtn = document.createElement("button");
const cleanButton = document.createElement("button");
const historyOfPressedBtns = document.createElement("div");
   
header.setAttribute("id", "header");
header.innerText = 'Beat! - The Virtual Drum Kit Experience'; 
main.setAttribute("id", "main");
main.innerHTML = '<p>Bringing the power of a full drum set to your fingerprints, anytime, anywhere!</p>';
keyContainer.setAttribute("id", "keyContainer");
showAndHideBtn.setAttribute("id","showAndHideBtn");
showAndHideBtn.innerHTML = "Show history";
historyOfPressedBtns.setAttribute("id", "historyOfPressedBtns");
historyOfPressedBtns.innerHTML = "";
additionalButtons.setAttribute("id"," additionalButtons");
cleanButton.setAttribute("id","cleanButton");
cleanButton.innerHTML = "Clean history";
container.appendChild(header);
container.appendChild(main);
main.appendChild(keyContainer);
main.appendChild(additionalButtons);
additionalButtons.appendChild(showAndHideBtn);
additionalButtons.appendChild(cleanButton);
additionalButtons.appendChild(historyOfPressedBtns);
const showAndHide  =  document.getElementById("showAndHideBtn");
const showHistory = document.getElementById("historyOfPressedBtns");
const clean = document.getElementById("cleanButton");

for (let i=0; i<keyIdArray.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("class","drum");
    button.setAttribute("id",`${keyIdArray[i]}`);
    button.innerHTML = `<p>${keyIdArray[i].toUpperCase()}</p> <p>${keyNameArray[i].toUpperCase()}</p>`;
    keyContainer.appendChild(button);
}

document.addEventListener('keydown', function(event) {
    playSound(event.key);
    getAnimation(event.key);
    if (event.key == keyIdArray[0]) {
    historyOfPressedBtns.innerHTML += ` ${keyIdArray[0].toUpperCase()} (${keyNameArray[0].toUpperCase()})  |`;
    } else if (event.key == keyIdArray[1]) {
    historyOfPressedBtns.innerHTML += ` ${keyIdArray[1].toUpperCase()} (${keyNameArray[1].toUpperCase()})  |`;
    } else if (event.key == keyIdArray[2]) {
    historyOfPressedBtns.innerHTML += ` ${keyIdArray[2].toUpperCase()} (${keyNameArray[2].toUpperCase()})  |`;
    } else if (event.key == keyIdArray[3]) {
    historyOfPressedBtns.innerHTML += ` ${keyIdArray[3].toUpperCase()} (${keyNameArray[3].toUpperCase()})  |`;
    } else if (event.key == keyIdArray[4]) {
    historyOfPressedBtns.innerHTML += ` ${keyIdArray[4].toUpperCase()} (${keyNameArray[4].toUpperCase()})  |`;
    } else if (event.key == keyIdArray[5]) {
    historyOfPressedBtns.innerHTML += ` ${keyIdArray[5].toUpperCase()} (${keyNameArray[5].toUpperCase()})  |`;
    } else if (event.key == keyIdArray[6]) {
    historyOfPressedBtns.innerHTML += ` ${keyIdArray[6].toUpperCase()} (${keyNameArray[6].toUpperCase()})  |`;
    } else if (event.key == keyIdArray[7]) {
    historyOfPressedBtns.innerHTML += ` ${keyIdArray[7].toUpperCase()} (${keyNameArray[7].toUpperCase()})  |`;
    } else if (event.key == keyIdArray[8]) {
    historyOfPressedBtns.innerHTML += ` ${keyIdArray[8].toUpperCase()} (${keyNameArray[8].toUpperCase()})  |`;
    }
  }
);

for (let j = 0; j<keyIdArray.length; j++) {
let chosenBtns = [];
chosenBtns = document.querySelectorAll(".drum");
chosenBtns[j].addEventListener ("click", function (){
let key = this.id;
playSound(key);
getAnimation(key);
historyOfPressedBtns.innerHTML += ` ${keyIdArray[j].toUpperCase()} (${keyNameArray[j].toUpperCase()})  |`;
});
}

function playSound (key) {
switch (key) {
    case "w":
        let clap = new Audio("music/clap.mp3");
        clap.play();
        break;
    case "s":
        let hihat = new Audio("music/hihat.mp3");
        hihat.play();
        break;
    case "d":
        let kick = new Audio("music/kick.mp3");
        kick.play();
        break;
    case "f":
        let openhat = new Audio("music/openhat.mp3");
        openhat.play();
        break;
    case "g":
        let boom = new Audio("music/boom.mp3");
        boom.play();
        break;
    case "h":
        let ride = new Audio("music/ride.mp3");
        ride.play();
        break;
    case "j":
        let snare = new Audio("music/snare.mp3");
        snare.play();
        break;
    case "t":
        let tom = new Audio("music/tom.mp3");
        tom.play();
        break;
    case "l":
        let tink = new Audio("music/tink.mp3");
        tink.play();
        break;
        default: console.log(key);
}
};

function getAnimation (key) {
    let activeButton = document.querySelector(`#${key}`);
    activeButton.classList.add("pressed");
    setTimeout(function(){
    activeButton.classList.remove("pressed")
    }, 200);
};

showHistory.style.display = "none";

showAndHide.addEventListener("click", function (){
        let key = this.id;
        getAnimation(key);
        if (showHistory.style.display !== "none") {
        showHistory.style.display = "none";
        showAndHide.innerHTML = "Show history"
        } else {
        showHistory.style.display = "block"
        showAndHide.innerHTML = "Hide history"
        }
    });

clean.addEventListener("click",function() {
        let key = this.id;
        getAnimation(key);
        showHistory.innerHTML = "";
        showAndHide.innerHTML = "Show history";
        showHistory.style.display = "none";
    } );





