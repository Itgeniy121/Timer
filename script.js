
//time
let Hours = document.querySelector('.Hours');
let Minutes = document.querySelector('.Minutes');
let Seconds = document.querySelector('.Seconds');
let Milliseconds = document.querySelector('.Milliseconds');
//styles
let back = document.querySelectorAll('.timerblock');
let TitleHours = document.querySelector('.hours');
let TitleMinutes = document.querySelector('.minutes');
let TitleSeconds = document.querySelector('.seconds');
let titleMilliseconds = document.querySelector('.milliseconds');

//ForLaps
let TITLE = document.querySelector('.TITLE');
let Ol = document.querySelector('.oll');
TITLE.hidden = true;

//buttons
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let lap = document.querySelector('.lap');
let restart = document.querySelector('.restart');
let night = document.querySelector('.nighttheme');

//listeners
start.addEventListener('click', () => {
    clearInterval(interval);
    interval =setInterval(StartTime, 10);
});
restart.addEventListener('click', RestaerTime);
pause.addEventListener('click', Pausetime);
lap.addEventListener('click', LapTime);
night.addEventListener('click', NightTheme);




//values
let interval;
let HOURS = 00;
let MINUTES = 00;
let SECONDS = 00;
let MILLISECONDS = 00;

// functions
function StartTime(){
    MILLISECONDS++;
    //MILL
    if(MILLISECONDS < 9){
        Milliseconds.innerText = '0' + MILLISECONDS;
    }
    if( MILLISECONDS > 99){
        SECONDS++;
        Seconds.innerText = '0' + SECONDS;
        MILLISECONDS = 0;
        Milliseconds.innerText = '0' + MILLISECONDS;
    }
    if(MILLISECONDS > 9){
        Milliseconds.innerText = MILLISECONDS;
    }
    //SEC
    if(SECONDS < 9){
        Seconds.innerText = '0' + SECONDS;
    }
    if(SECONDS > 9){
        Seconds.innerText = SECONDS;
    }
    if(SECONDS >59){
        MINUTES++;
        Minutes.innerText = '0' + MINUTES;
        SECONDS = 0;
        Seconds.innerText = '0' + SECONDS;
    }
    //MIN
    if(MINUTES < 9){
        Minutes.innerText = '0' + MINUTES;
    }
    if(MINUTES > 9){
        Minutes.innerText = MINUTES;
    }
    if(MINUTES >59){
        HOURS++;
        Hours.innerText = '0' + HOURS;
        MINUTES = 0;
        Minutes.innerText = '0' + MINUTES;
    }
    //HR
    if(HOURS < 9){
        Hours.innerText = '0' + HOURS;
    }
    if(HOURS > 9){
        Hours.innerText = HOURS;
    }
};

function RestaerTime(){
TITLE.hidden = true;
Ol.innerHTML = '';
 HOURS = 00;
 MINUTES = 00;
 SECONDS = 00;
 MILLISECONDS = 00;
 Milliseconds.innerText = '0' + MILLISECONDS;
 Minutes.innerText = '0' + MINUTES;
 Seconds.innerText = '0' + SECONDS;
 Hours.innerText = '0' + HOURS;
 clearInterval(interval);
}

function LapTime(){
    TITLE.hidden = false;
    let NewDiv = document.createElement('li');
    Ol.appendChild(NewDiv);
    NewDiv.className = 'crug';
    NewDiv.innerHTML = `${HOURS} : ${MINUTES} : ${SECONDS} : ${MILLISECONDS}`;
}

function Pausetime(){
    clearInterval(interval);
}


let flag = 1;
function NightTheme(){
    if(flag ==1){
    document.getElementsByTagName('body')[0].style = 'background: #1C0E3A';
    TitleHours.style = 'background-color: #1E0B46';
    TitleMinutes.style = 'background-color: #1E0B46';
    TitleSeconds.style = 'background-color: #1E0B46';
    titleMilliseconds.style = 'background-color: #1E0B46';
    start.classList.add('selected1');
    pause.classList.add('selected2');
    restart.classList.add('selected3');
    lap.classList.add('selected4');
    start.classList.remove('start');
    pause.classList.remove('pause');
    restart.classList.remove('restart');
    lap.classList.remove('lap');
    night.innerHTML = '☀️';
    night.style = 'background: #7B68EE';

    for(let elem of back){
        elem.style = 'background-color: #29105D';
        elem.style.border = '1px solid #29105D';
    }
    flag = 2;
} else  {

    for(let elem of back){
        elem.style = 'background-color: blueviolet';
        elem.style.border = '1px solid blueviolet';
    }

    document.getElementsByTagName('body')[0].style = 'background: #7B68EE';
    TitleHours.style = 'background-color: #4B0082';
    TitleMinutes.style = 'background-color: #4B0082';
    TitleSeconds.style = 'background-color: #4B0082';
    titleMilliseconds.style = 'background-color: #4B0082';
    start.classList.remove('selected1');
    pause.classList.remove('selected2');
    restart.classList.remove('selected3');
    lap.classList.remove('selected4');
    start.classList.add('start');
    pause.classList.add('pause');
    restart.classList.add('restart');
    lap.classList.add('lap');
    night.innerHTML = '🌙';
    night.style = 'background: #2B0F66';
    flag = 1;

}



}








