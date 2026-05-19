const display = document.querySelector('.display');
let ampm = document.querySelector('.ampm');

const timeDisplay = ()=>{ 
    let date = new Date();
let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();
let ampmValue = hh>12? 'PM' : 'AM';

ampm.innerHTML = ampmValue;
let hstring = hh<10 ? `0${hh}` : hh;
let sstring = ss<10 ? `0${ss}` : ss;
let mstring = ss<10 ? `0${mm}` : mm;

display.innerHTML = `${hstring} : ${mstring} : ${sstring}`;
    }
setInterval( timeDisplay , 1000);