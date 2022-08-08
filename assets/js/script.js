console.log ("connected")

var counter = 0;
var timeLeft = 60;

function convertSeconds(s) {
    var min = s/60;
}
function setup() {
    noCanvas();

    var timer = select("#timer");
    timer.html('0');

    function timerIt(){
        counter++;
        timer.html(timeleft - counter);

    }
    setInterval(timerIt, 1000);
}

const start_btn = document.querySelector(".start_btn button");
const instrutions_box = document.querySelector("instrutions_box");
const exit_btn = instrutions_box.querySelector(".buttons . exit");
const continue_btn = instrutions_box.querySelector(".buttons . restart");

start_btn.onclick = ()=>{
    instrutions_box.classList.add("activeinst");
}
exit_btn.onclick = ()=>{
    instrutions_box.classList.remove("activeinst");
}

continue_btn.onclick = ()=>{
    instrutions_box.classList.remove("activeintsr");
}