//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');//input name
//const randomize = document.getElementById('btn'); //button
//const story = document.getElementById('storia');//element shows story
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');





//this function returns one of the items stored 
//inside the array at random.
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }


//2. RAW TEXT STRINGS
//var storyText=`It was ${94}  fahrenheit outside, so ${insertx} went for a walk. When they got to ${inserty}, they stared in horror for a few moments, then ${insertz}. Bob saw the whole thing, but was not surprised — ${insertx} weighs 300 pounds, and it was a hot day.`;
var storyText='It was 94 fahrenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. Bob saw the whole thing, but was not surprised — insertx weighs 300 pounds, and it was a hot day.';


let insertX=['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY=['the soup kitchen','Disneyland','the White House'];
let insertZ=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  let newStory=storyText;
  let xItem=randomValueFromArray(insertX);
  let yItem=randomValueFromArray(insertY);
  let zItem=randomValueFromArray(insertZ);
  newStory=newStory.replace(/insertx/gi,xItem); 
  newStory=newStory.replace('inserty',yItem);
  newStory=newStory.replace('insertz',zItem);
  console.log(newStory);
  
  
  if(customName.value !== ' ') {
    let name = customName.value;
    newStory=newStory.replace('Bob',name);
    

  }
  
  if(document.getElementById("uk").checked) {
    let weight = Math.round( 300*0.071428571428571) +' stones';
    let temperature =Math.round((94- 32) * 5/9)+ ' Centigrade';
    newStory=newStory.replace('300 pounds', weight);
    newStory=newStory.replace('94 fahrenheit', temperature);
  }
  console.log(newStory);

  story.textContent = newStory  ;
  story.style.visibility = 'visible';
}

console.log(result());

