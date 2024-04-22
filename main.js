// Functionize Minecraft Fishing Start Code

// HTML variables
let resultingImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

//Fish count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  // determine selected character
  let Character = document.getElementById("character-select").value;
  //steve fish simulator
  if (Character === "steve") {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultingImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.9) {
      resultingImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      resultingImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultingImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    } //Alex fish simulator
  } else if (Character === "alex") {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultingImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultingImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultingImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultingImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else {
    //Vilager fish simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultingImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.5) {
      resultingImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      resultingImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultingImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  }
}
