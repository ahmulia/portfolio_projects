const wordText = document.querySelector('.word');
const hintText = document.querySelector('.text span');
const timeText = document.querySelector('.time b');
const inputField = document.querySelector('input');
const button = document.querySelector('.hint');
const refreshBtn = document.querySelector('.refresh-word');
const checkBtn = document.querySelector('.check-word');
const clock = document.querySelector('.clock');
const lastsec = document.getElementById('lastSeconds');
let correctWord, timer;
let score = document.querySelector('.score b');
let scoreNumber = 0;
let point = 0;
let promijeniRijec = 0;
let background_sound = document.getElementById('background_sound');
let soundOn = document.querySelector('.sound_on');
let soundPause = document.querySelector ('.sound_off');
let mainContainer = document.querySelector('.main_container');
let start = document.querySelector('.start');
let nastavi = document.querySelector('.startAgain');
let odustani = document.querySelector('.quit');

window.onload = () => {
  play_sound();
  closeGame();
  button.style.display='none'
};


const initTimer = maxTime => {
  clearInterval(timer);
    timer = setInterval(() => {
      if(maxTime > 0) {
        maxTime--;
        if ( maxTime < 5 && maxTime >= 1) {
          lastsec.play();
          
          document.body.appendChild(clock);
        }
      
       return timeText.innerText = maxTime;

      }
     
      else {
      
      document.getElementById('timesUp').play();
      alert(`Vrijeme je isteklo!! ${correctWord.toUpperCase()} je ispravan odgovor`);
      closeGame();
      nastavi.style.display = 'block';
      odustani.style.display = 'block';
      promijeniRijec=0;
      scoreNumber = 0; 
      score.innerHTML = scoreNumber; 
      hideHint();
    }
      
    }, 1000);
    
}


const initGame = () => {
  if(promijeniRijec>=3){
    greyOutBtn();
  }else {
    buttonBack();
  }

  clock.remove();
  document.body.appendChild(button);
  hideHint();
  initTimer(15);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; 

  }
  
  wordText.innerText = wordArray.join('');
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = '';
  inputField.setAttribute ('maxlength', correctWord.length);


}

initGame();




const checkWord = () => {

  let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) {
        return alert('Molimo unesite rijec');
      
    }

    if (userWord == correctWord) {

      if(promijeniRijec>=3){
        greyOutBtn();
      }   
      document.getElementById('lastSeconds').pause();
      document.getElementById('correct').play();
      alert(`Cestitamo! ${userWord.toUpperCase()} je ispravna rijec! ` );
      let point = ++scoreNumber; 
      score.innerHTML = point; 
      hideHint();
      initGame();
          
      
      }

    else  {
      buttonBack(); 
      document.getElementById('lastSeconds').pause();
      document.getElementById('incorrect').play();


      alert(`Uups! ${userWord} nije ispravna rijec`);
      closeGame();
      nastavi.style.display = 'block';
      odustani.style.display = 'block';
      promijeniRijec=0;
      scoreNumber = 0; 
      score.innerHTML = scoreNumber; 
      hideHint();
      
    
      }
     
    }
    
   

    


function playInc() {
  let audio2 = new Audio('wrong_answer.mp3');
  audio2.play();
  
}
function playtimesup() {
  let audio3 = new Audio('times_up.mp3');
  audio3.play()
}
 function playCor() {
  let audio = new Audio('Rabbi_zidni.mp3');
  audio.play();
  
}

button.addEventListener('click', ()=>{
  button.remove();
});

function showHint() {
let text = document.querySelector('.text');
text.style.display= 'block' ;
}

function hideHint() {
  let text = document.querySelector('.text');
  text.style.display='none' ;
}

const greyOutBtn = () => {
  ++promijeniRijec;
  if (promijeniRijec>=3)  {
  refreshBtn.disabled = true;
  refreshBtn.style.background = 'gray';
  }

  }
  
function buttonBack() {
  refreshBtn.disabled = false;
  refreshBtn.style.background = 'green';
}

function play_sound() {
background_sound.volume = 0.05 ;
background_sound.play();

}
function soundOff(){
background_sound.pause();
document.body.appendChild  (soundOn)

}

function soundGo () {
background_sound.play();
soundOn.remove()
}
const stopTicking = () => {
   lastsec.pause();
}
function closeGame (){
  mainContainer.style.display= 'none';
  button.style.display= 'none';
  lastSeconds.pause();
  clearInterval(timer);
  clock.remove();
  
  
}

function startGame(){
  mainContainer.style.display = 'block';
  button.style.display='block';
  start.remove();
}
function turnAqua(){
  start.style.color = 'aqua';
  start.style.borderColor = 'aqua';
}
function turnBlack () {
  start.style.color = 'black';
  start.style.borderColor = 'black';
  play_sound()
}

const play_Again = () => {
  startGame();
  initGame();
  nastavi.style.display = 'none';
  odustani.style.display = 'none';
  document.getElementById('newGame').play();
}
const quit_ = () => {
  nastavi.style.display = 'none';
  odustani.style.display = 'none';
  document.body.appendChild(start);
  document.getElementById('gameOver').play();
}


refreshBtn.addEventListener('click', initGame);
refreshBtn.addEventListener('click', greyOutBtn);
refreshBtn.addEventListener('click', stopTicking);
checkBtn.addEventListener('click', checkWord);

nastavi.addEventListener('click', play_Again);
odustani.addEventListener('click', quit_);


