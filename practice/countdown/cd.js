const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
 const formatTime = (time) =>{
        return time<10 ? `0${time}`: time;
    }
const updateCountDown = (targetDate)=>{
    const currentTime = new Date();
    const timeDifference = targetDate - currentTime ;

    let calsecs = Math.floor(timeDifference/1000)%60;
    let calmins = Math.floor(timeDifference/1000/60)%60;
    let calhours = Math.floor(timeDifference/1000/60/60)%60;
    let caldays = Math.floor(timeDifference/1000/60/60/24);

    days.textContent = formatTime(caldays);
    hours.textContent = formatTime(calhours);
    mins.textContent = formatTime(calmins);
    secs.textContent = formatTime(calsecs);
   
}
const countDown = (targetDate) =>{
 setInterval(() => updateCountDown(targetDate),1000);
}
const targetDate = new Date("July 17 2026 00:00");
countDown(targetDate);