let isClicked = false;
let intervalId = 0;
let activateBtn = document.querySelector('.activate');
let countdownField = document.querySelector('.countdown');
let resetBtn = document.querySelector('.reset');
let min=0, sec=0;   
let submit = document.querySelector('.submit');
let show = document.querySelector('.show-input');
let input = document.querySelector('.input');
let isVisible = false;
let timeInSec;
show.addEventListener('click', ()=>{
    if(isVisible==false){
        input.style.display = 'inline';
        isVisible = true;
        activateBtn.style.cursor = 'not-allowed';
        activateBtn.disabled = true;
        resetBtn.style.cursor = 'not-allowed';
        resetBtn.disabled = true;   

    }
    else{
        input.style.display = 'none';
        isVisible = false;
        activateBtn.disabled = false;
        resetBtn.disabled = false;   
    }
})

submit.addEventListener('click', ()=>{
    min = parseInt(document.querySelector('.min').value);
    sec = parseInt(document.querySelector('.sec').value);
    if(min>=60 || min<0 || sec<0 || sec>=60 || isNaN(min) || isNaN(sec)){
        alert('Enter valid time');
        min = sec = 0;
    }
    else{
        updateTimer();
    }
})
function updateTimer(){
    input.style.display = 'none';
    countdownField.textContent = `${min}m ${sec}s`;
    activateBtn.disabled = false;
    resetBtn.disabled = false;
    timeInSec = (min*60)+sec;
}

activateBtn.addEventListener('click', ()=>{
    if(isClicked == false){
        isClicked = true;
        activateBtn.innerText = "Stop";
        intervalId = setInterval(() => {
            console.log('Hello', timeInSec);
            if(timeInSec>=0){
                let min = Math.floor(timeInSec/60);
                let sec = Math.floor(timeInSec%60);
                countdownField.innerText = `${min}m ${sec}s`;
                timeInSec = timeInSec - 0.1;
            }
            else{
                clearInterval(intervalId);
            }
        }, 100);
    }
    else{
        isClicked = false;
        activateBtn.textContent = 'Start';
        clearInterval(intervalId);
    }

})
resetBtn.addEventListener('click', ()=>{
    clearInterval(intervalId);  
    updateTimer();
    activateBtn.innerText = 'Start';
})
