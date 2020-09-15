//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');//input name
const randomize = document.querySelector('.randomize'); //button
const story = document.querySelector('.story');//element shows story


//this function changes the order of an array
//returns one of the items stored inside the array at random.
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS
var text='It was '+temperature94 fahrenheit outside, so '+ personage[1] +'went for a walk. When they got to'+ ,
they stared in horror for a few moments, then 
:insertz:.
Bob //questo nome deve cambiare se l'utente inserisce un nome
saw the whole thing, but was not surprised —
 :insertx:
  weighs 300 pounds, and it was a hot day.

Willy the Goblin
Big Daddy
Father Christmas

the soup kitchen
Disneyland
the White House

spontaneously combusted
melted into a puddle on the sidewalk
turned into a slug and crawled away

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    let name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}