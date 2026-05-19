let stop = document.querySelector('.stop');
let start = document.querySelector('.start');
let restart = document.querySelector('.restart');
let timer = document.querySelector('.timer');
let timerid = null;
let msecs = 0;
let secs = 0;
let mins = 0;
start.addEventListener('click' , ()=>{
   if(timerid!==null){
    clearInterval(timerid);
   }
timerid = setInterval(startTimer , 10)
});
stop.addEventListener('click' , ()=>{
    clearInterval(timerid);
});
restart.addEventListener('click' , ()=>{
    clearInterval(timerid);
    msecs = 0;
    secs = 0;
    mins = 0;
    timer.innerHTML = `00:00:00`;
});
function startTimer(){
msecs++;
if(msecs==100){
    msecs = 0;
    secs++;
    if(secs==60){
        secs = 0;
        mins++;
    }

}
let msecstring = msecs < 10 ? `0${msecs}`: msecs;
let secstring = secs < 10 ? `0${secs}`: secs;
let minsstring = mins < 10 ? `0${mins}`: mins;
timer.innerHTML = `${minsstring}:${secstring}:${msecstring}`;

}