



let oneD = "⚀" 
let twoD = '⚁'
let threeD = '⚂'
let fourD = '⚃'
let fiveD = '⚄'
let sixD = '⚅'
let conditional = true


let arrayOfDice = [oneD,twoD,threeD,fourD,fiveD,sixD]
let arrayOfDiceRolls = [1,2,3,4,5,6]

let button = document.querySelector('button');
button.addEventListener('click', addDice);

function addDice(e) {

    e.preventDefault();
 
    let numberInput = document.querySelector("input")
    let stringOfOutput = ""
    let sum = 0
    let historyDiceList = document.querySelector('#history-dice')
    let newLi = document.createElement('li')
    newLi.id = 'HistoryListItem'
for (let i=1;i<= numberInput.value;i++){
 
    switch(arrayOfDiceRolls[Math.floor(Math.random() * arrayOfDiceRolls.length)]) {
        case 1:
          stringOfOutput += oneD
          sum += 1
          break;
        case 2:
            stringOfOutput += twoD
            sum += 2
          break;
          case 3:
            stringOfOutput += threeD
            sum += 3
            break;
          case 4:
              stringOfOutput += fourD
              sum += 4
            break;
            case 5:
                stringOfOutput += fiveD
                sum += 5
                break;
              case 6:
                  stringOfOutput += sixD
                  sum += 6
                break;
        default:
          // code block
      }

}
let currentDiceOutput = document.querySelector('#dice-para')
currentDiceOutput.textContent = stringOfOutput
let sumOfDiceOutput= document.querySelector('#sum-para')
sumOfDiceOutput.textContent = `Sum of Die: ${sum}` 
// let allItems = document.querySelectorAll('#history-dice')


newLi.textContent = stringOfOutput
historyDiceList.appendChild(newLi)


}





  



// const form = document.querySelector("form")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//   let arrayOfDice = [oneD,twoD,threeD,fourD,fiveD,sixD]
//   let arrayOfDiceRolls = [1,2,3,4,5,6]

//  for (let i = 1; i <= numberInput.value; i++) {
// stringOfOutput += arrayOfDiceRolls[Math.floor(Math.random()*arrayOfDiceRolls.length)]
// sumOfDiceOutput.textContent = stringOfOutput

//     }
// })










// let allItems = document.querySelector("#all-items")
// allItems.addEventListener("click", (e) => {
//     if (e.target.style.textDecoration === "line-through") {
//         e.target.style.textDecoration = "none"
//     } else {
//         e.target.style.textDecoration = "line-through"
//     }
// })
