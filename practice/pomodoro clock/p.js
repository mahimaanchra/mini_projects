const timer = document.querySelector('.timer');
const title = document.querySelector('.title');
const startBtn = document.querySelector('.startBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const resumeBtn= document.querySelector('.resumeBtn');
const resetBtn = document.querySelector('.resetBtn');
const pomoCountsDisplay = document.querySelector(".pomoCountsDisplay");
const WORK_TIME = 25*60;
const BREAK_TIME = 5*60;
let paused = false;

let timerID = null;
let oneRoundCompleted = false ;
let totalCount = null;

const saveLocalCounts = () =>{
    let counts = JSON.parse(localStorage.getItem("pomoCounts"));
counts!== null ? counts++ : counts = 1;
    localStorage.setItem("pomoCounts" , JSON.stringify(counts));
}

const updateTitle = (msg) => {
title.textContent = msg;
}


const countDown = (time) => {
  return () => {
    const mins = Math.floor(time/60).toString().padStart(2,"0");
    const secs = Math.floor(time%60).toString().padStart(2,"0");
     timer.textContent =  `${mins}:${secs}`;
   time--;

   if(time<0){
    stopTimer();
    if(oneRoundCompleted===false){
        oneRoundCompleted = true;
  timerID = startTimer(BREAK_TIME);
  updateTitle("It's Break Time!")
    }else{
        updateTitle("Completed 1 Round of Pomodoro Technique!");
        setTimeout(()=>updateTitle("Start Timer Again") , 2000);
        totalCount++;
        saveLocalCounts();
        showPomoCounts();
        oneRoundCompleted = false;
    }
  
   }
  }
}

const stopTimer = () =>{
    clearInterval(timerID);
    timerID = null;
}

const getTimeInSeconds = (timeString) => {
const[minutes , seconds] = timeString.split(":");
return parseInt(minutes*60) + parseInt(seconds);}

const startTimer = (startTime) =>{
    if(timerID !== null){
        stopTimer();
    }
  return  setInterval(countDown(startTime) , 1000)  ;
}

startBtn.addEventListener('click' , ()=>{
  timerID =   startTimer(WORK_TIME);
  updateTitle(" It's Work Time!");
});

resetBtn.addEventListener("click" , ()=>{
    stopTimer();
    timer.textContent = "25:00"
    updateTitle("Click Start to Start the Timer");
}) 

pauseBtn.addEventListener("click" , ()=>{
    stopTimer();
    paused = true;
    updateTitle("Timer Paused");
}) 

resumeBtn.addEventListener("click" , ()=>{
if(paused){
const currentTime = getTimeInSeconds(timer.textContent);
timerID = startTimer(currentTime);
paused = false;
(!oneRoundCompleted) ? updateTitle("It's Work Time") : updateTitle("It's Break Time");
}
    
}) 

const showPomoCounts = () => {
const counts = JSON.parse(localStorage.getItem("pomoCounts"));
if (counts !== null && counts > 0) {
        pomoCountsDisplay.style.display = "flex";
        pomoCountsDisplay.firstElementChild.textContent = counts;
    } else {
        pomoCountsDisplay.style.display = "none";
        }

showPomoCounts();
}