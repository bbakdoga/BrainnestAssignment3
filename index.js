/**
 * This function outpus diagnol of Sqaure with the length of 9
 * This function outputs the area of Triangle with the sides of 5,6,7
 * This function also outputs circumference and area of circle with radius of 4 
 * @param none
 * @return none
 */
function mathShapes(){ 
  let diagonalSquare = Math.sqrt(Math.pow(9,2) + Math.pow(9,2));
  console.log("The diagonal of Sqaure is " + diagonalSquare.toFixed(2));
  let s = (5 + 6 + 7)/2;
  let areaTriangle = Math.sqrt(s*(s-5)*(s-6)*(s-7));
  console.log("The are of Triangle is " + areaTriangle.toFixed(2));
  let circumferenceCircle = 2 * Math.PI * 4;
  let circleArea = Math.PI * Math.pow(4,2);
  console.log("The circumference of Circle is " + circumferenceCircle.toFixed(2));
  console.log("The circle Area is " + circleArea.toFixed(2));
}
/**
 * This function ouputs the larger number as well as if the a number is odd or even
 * @param none
 * @return none
 */
function conditions(){
  var inputs = [];
  for(let i = 0; i < 2; i++){
    inputs.push(prompt("Input a number"));
  }
  inputs.sort();
  console.log("The larger input is " + inputs[inputs.length - 1]);
  inputs.push(prompt("Input a new number"));
  if(inputs[inputs.length - 1] % 2 == 0){
    console.log("Your input "+ inputs[inputs.length - 1] + " is an even number");
  } else {
    console.log("Your input "+ inputs[inputs.length - 1] + " is an odd number");
  }
}
// selection array
let selection = ["Rock","Paper","Scissors",];
// win counter
let wins = 0;
/**
 * picks a random string from the array
 * @returns randomly selected string
 */
function computerPlay(){
  let randomSelection = selection[Math.floor(Math.random() * selection.length)];
  return randomSelection;
}
/**
 * This function returns the outcome of the game 
 * @param {*} playerSelection 
 * @param {*} computerSelection 
 * @returns String with game outcome
 */
function playRound(playerSelection,computerSelection){
  playerSelection = playerSelection.toLowerCase();
  if(playerSelection == computerSelection.toLowerCase()){
    return "Draw, you both picked " + playerSelection.toLowerCase() + "!";
  }
  if(playerSelection == selection[0].toLowerCase() && computerSelection == selection[2]){
    wins++;
    return "Win, " + playerSelection + " beats " + computerSelection.toLowerCase() + "!";
  } 
  else if (playerSelection == selection[1].toLowerCase() && computerSelection == selection[0]) {
    wins++;
    return "Win, " + playerSelection + " beats " + computerSelection.toLowerCase() + "!";
  }
  else if(playerSelection == selection[2].toLowerCase() && computerSelection == selection[0]){
    wins++;
    return "Win, " + playerSelection+ " beats " + computerSelection.toLowerCase() + "!";
  } 
  else {
    return "Lose, " +  computerSelection + " beats " + playerSelection.toLowerCase() + "!";
  }
}
/**
 * This main function where playround function is called 5 times
 * Displays the output of the playround and final wins
 * @param none
 * @return none
 */
function game(x){
  for(let i = 0; i < 5; i++){
    let userInput  = prompt("Please enter Rock, Paper, or Scissors");
    do {
      for(let i = 0; i < 3; i++){
        if(userInput == selection[i].toLowerCase()){
          valid = true;
        }
      }
        if(valid == false){
          console.log("Invalid Input, try again!");
          userInput  = prompt("Please enter Rock, Paper, or Scissors");
        }
    } while(valid == false);
    console.log(playRound(userInput, computerPlay()));
  }
  console.log("You won " + wins + " out of 5 rounds!");  
}
game(0);
