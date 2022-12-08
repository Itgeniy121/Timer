
//time
let Hours = document.querySelector('.Hours');
let Minutes = document.querySelector('.Minutes');
let Seconds = document.querySelector('.Seconds');
let Milliseconds = document.querySelector('.Milliseconds');

//ForLaps
let TITLE = document.querySelector('.TITLE');
let Ol = document.querySelector('.oll');
TITLE.hidden = true;

//buttons
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let lap = document.querySelector('.lap');
let restart = document.querySelector('.restart');

//listeners
start.addEventListener('click', () => {
    clearInterval(interval);
    interval =setInterval(StartTime, 10);
});
restart.addEventListener('click', RestaerTime);
pause.addEventListener('click', Pausetime);
lap.addEventListener('click', LapTime);



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
};
function Pausetime(){
    clearInterval(interval);
}







