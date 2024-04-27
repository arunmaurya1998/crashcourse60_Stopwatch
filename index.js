let display = document.getElementById("stopwatch")
let timer ;

let second = 0;
let minute = 0;
let hours = 0;


function stopwatch(){
    second++;
    if(second == 60){
        second = 0;
        minute++;
        if(minute == 60){
            minute = 0;
            hours++;
        }
     }

    display.innerHTML = hours +"h" +":"+ minute+"m" +":"+ second +"s"
     
}


function startStopwatch(){
       
   timer = setInterval(stopwatch,1000);
}


function stopStopwatch(){
      clearInterval(timer); 
}

function resetStopwatch(){
    clearInterval(timer);
    timer = null;
    second = 0;
     minute = 0;
     hours = 0;

     display.innerHTML = "00:00:00"

}


