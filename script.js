let dateConatiner = document.querySelector(".date-container");
let hoursConatiner = document.querySelector(".hours");
let minitesConatiner = document.querySelector(".minites");
let secondsConatiner = document.querySelector(".seconds");

const weekdays =[
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthNmaes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "September",
    "Octomber",
    "November",
    "December"

];

function formatTime(time){
    return time < 10 ? "0" + time : time;
}

function updateClock(){

    const today = new Date();
    let date = today.getDate();
    //console.log(date)
    let day = weekdays[today.getDay()];
    let month = monthNmaes[today.getMonth()];

    //console.log(day,month)
    //console.log(today.getDay(),today.getMonth());

    let hours = formatTime(today.getHours());
    let minites = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());

    dateConatiner.innerHTML = ` <p>${day}</p> <p><span>${date}</span></p><p>${month}</p> ` ;

    hoursConatiner.textContent = hours + ":";
    minitesConatiner.textContent = minites + ":";
    secondsConatiner.textContent = seconds;

}

setInterval(updateClock,1000);



