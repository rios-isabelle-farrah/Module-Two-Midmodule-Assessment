let oneD = "⚀";
let twoD = "⚁";
let threeD = "⚂";
let fourD = "⚃";
let fiveD = "⚄";
let sixD = "⚅";
let conditional = 0;
let allItems = document.createElement("ul");
allItems.id = "history-dice";

let arrayOfDice = [oneD, twoD, threeD, fourD, fiveD, sixD];
let arrayOfDiceRolls = [1, 2, 3, 4, 5, 6];

let button = document.querySelector("button");
button.addEventListener("click", addDice);

function addDice(e) {
  e.preventDefault();

  let newLi = document.createElement("li");
  newLi.id = "completeList";

  let numberInput = document.querySelector("input");
  let stringOfOutput = "";
  let sum = 0;

  for (let i = 1; i <= numberInput.value; i++) {
    switch (
      arrayOfDiceRolls[Math.floor(Math.random() * arrayOfDiceRolls.length)]
    ) {
      case 1:
        stringOfOutput += oneD;
        sum += 1;
        break;
      case 2:
        stringOfOutput += twoD;
        sum += 2;
        break;
      case 3:
        stringOfOutput += threeD;
        sum += 3;
        break;
      case 4:
        stringOfOutput += fourD;
        sum += 4;
        break;
      case 5:
        stringOfOutput += fiveD;
        sum += 5;
        break;
      case 6:
        stringOfOutput += sixD;
        sum += 6;
        break;
      default:
      // code block
    }
  }
  let currentDiceOutput = document.querySelector("#dice-para");
  currentDiceOutput.textContent = stringOfOutput;
  let sumOfDiceOutput = document.querySelector("#sum-para");
  updateOutput = currentDiceOutput.textContent;
  sumOfDiceOutput.textContent = `Sum of Die: ${sum}`;
  conditional += 1;
  // debugger

  newLi.textContent = currentDiceOutput.textContent;

  allItems.appendChild(newLi);

  if (conditional > 1) {
    let section = document.querySelector("#second");

    section.appendChild(allItems);
  }
}
