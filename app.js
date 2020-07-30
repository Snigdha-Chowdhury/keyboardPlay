window.addEventListener('keydown', (e)=>{
let audio = document.querySelector(`audio[data-keyPress = "${e.keyCode}"]`);
let play = document.querySelector(`.play[data-keyPress = "${e.keyCode}"]`);
if(!audio) return;
audio.currentTime = 0;
audio.play();
play.classList.add('stop');
})

let plays = document.querySelectorAll('.play');

plays.forEach(play => play.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('stop');
}