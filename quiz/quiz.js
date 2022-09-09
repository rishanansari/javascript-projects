var pre = document.getElementById("pre");
var next = document.getElementById("next");

var arr = ["image/1.png", "image/2.png" , "image/3.png","image/4.png"];

var i = 0;

var seconds = 60;
var tens = 00;

var appendtens = document.getElementById("tens");
var appendseconds = document.getElementById("seconds");
var buttonstart = document.getElementById("button_start");
var buttonstop = document.getElementById("button_stop");
var buttonreset = document.getElementById("button_reset");

var interval;//to store timer values

//this function willrun when click orn next

function starttimer() {
    tens++;
    if (tens < 9) {
        appendtens.innerHTML = "0"+ tens;
    }
    if (tens>9) {
        appendtens.innerHTML = tens;
    }
    if (tens>99) {
        seconds--;
        appendseconds.innerHTML = "0" + seconds;
        tens= 0;
        appendtens.innerHTML = "0"+ 0;
    }
    if (seconds>9) {
        appendseconds.innerHTML = seconds;
    }
}


//start button
buttonstart.onclick = function () {
    interval = setInterval(starttimer);
}

buttonstop.onclick = function(){
    clearInterval(interval)

}




//nextbtn

next.addEventListener("click",function(){
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementById("image").src = arr[i];
})

//prev btn

pre.addEventListener("click",function(){
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementById("image").src = arr[i]
})

//reset btn 

buttonreset.onclick = function () {
    clearInterval(interval)
    tens= "00";
    seconds = "60";
    appendseconds.innerHTML = seconds;
    appendtens.innerHTML = tens;
}







// from here teams counting start 

var team1 = 0
document.getElementById("inc1").innerText= team1;

function increment1(){
    team1=team1+1;
document.getElementById("inc1").innerText=team1;
}
function decrement1(){
    team1=team1-1;
document.getElementById("inc1").innerText=team1;
}


var team2 = 0
document.getElementById("inc2").innerText= team2;

function increment2(){
    team2=team2+1;
document.getElementById("inc2").innerText=team2;
}
function decrement2(){
    team2=team2-1;
document.getElementById("inc2").innerText=team2;
}


var team3 = 0
document.getElementById("inc3").innerText= team3;

function increment3(){
    team3=team3+1;
document.getElementById("inc3").innerText=team3;
}
function decrement3(){
    team3=team3-1;
document.getElementById("inc3").innerText=team3;
}


var team4 = 0
document.getElementById("inc4").innerText= team4;

function increment4(){
    team4=team4+1;
document.getElementById("inc4").innerText=team4;
}
function decrement4(){
    team4=team4-1;
document.getElementById("inc4").innerText=team4;
}


var team5 = 0
document.getElementById("inc5").innerText= team5;

function increment5(){
    team5=team5+1;
document.getElementById("inc5").innerText=team5;
}
function decrement5(){
    team5=team5-1;
document.getElementById("inc5").innerText=team5;
}


var team6 = 0
document.getElementById("inc6").innerText= team6;

function increment6(){
    team6=team6+1;
document.getElementById("inc6").innerText=team6;
}
function decrement6(){
    team6=team6-1;
document.getElementById("inc6").innerText=team6;
}


var team7 = 0
document.getElementById("inc7").innerText= team7;

function increment7(){
    team7=team7+1;
document.getElementById("inc7").innerText=team7;
}
function decrement7(){
    team7=team7-1;
document.getElementById("inc7").innerText=team7;
}


var team8 = 0
document.getElementById("inc8").innerText= team8;

function increment8(){
    team8=team8+1;
document.getElementById("inc8").innerText=team8;
}
function decrement8(){
    team8=team8-1;
document.getElementById("inc8").innerText=team8;
}

























