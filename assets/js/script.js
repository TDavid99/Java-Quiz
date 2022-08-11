console.log ("connected")


var head = document.getElementsByTagName('head')[0];
// var link = document.createElement('')
// link.rel = '';
// link.type= '';
// link.href = '';

let questions = [
    {
        Number: 1,
        questions: "What commonly used data types Do Not include?",
        answers: "Strings" ,
        choices: [
                "A.Booleans",
                "B.Strings",
                "C.Alerts",
                "D.Numbers"
        ]
 },
    {
        Number: 2, 
        question: "A very useful tool used during development and debugging for printing content to the debugger is? ",
        answer: "Terminal/bash",
        choices: [
                "A.JavaScript",
                "B.Terminal/bash",
                "C.For loops",
                "D.console.log"
        ]
    },

 {
        Number: 3,
        questions: "The conditions in an if/esle statment is enclosed with?",
        answers: "Curly Brackets" ,
        choices:  [
                "A.Quotes",
                "B.Curly Brackets",
                "C.parenthesis",
                "D.Square Brackets"
        ]
 },

 {
        Number: 4,
        questions: "Arrays in JavaScript can be used to store?",
        answers: "All of the above",
        choices: [
                "A.Numbers and Strings",
                "B.Other Arrays",
                "C.Booleans",
                "D.All of the above"

        ]
 },
{
        Number: 5,
        questions: "Strings vaules must be enclosed within______ when being assigned to variables?",
        answers: "Quotes",
        choices: [
                "A.Commas",
                "B.Curly Brackets",
                "C.Quotes",
                "D.Parenthesis"

        ]


},
{
        Number: 6,
        questions: "",
        answers: "",
        choices:[
            
        ]

}
        ]











var counter = 0;
var timeLeft = 100;


// function nf(min,sec){

// }
// function convertSeconds(s) {
//     var min = Math.floor(s/60);
//     var sec = s % 60;
//     return nf (min,2) + ':' + nf(sec,2);
// }
// function setup() {
//  //   noCanvas();

//     continue_btn.addEventListener('click', function(){
//         choice_div.textContent = question[i].questions
//     })

//     var timer = document.querySelector('#timer');
//     timer.html(convertSeconds(timeLeft-counter));

//     function timerIt(){
//         counter++;
//         timer.html(convertSeconds)(timeleft - counter);

//     }
//     setInterval(timerIt, 1000);
// }



const start_btn = document.querySelector(".start_btn button");
const question_div = document.querySelector(".que_text");
const instructions_box = document.querySelector("#instructions_box");
const question_container = document.querySelector("#question-container");
const timerElement = document.querySelector("#timerElement");
//const exit_btn = instructions_box.querySelector(".buttons . exit");
const continue_btn = document.querySelector(".continue");


start_btn.addEventListener("click",function(){
    
    console.log(instructions_box)
    instructions_box.style.display = 'none'
    question_container.style.display = 'block'
    var timer = setInterval(function() {
       timeLeft--     
       timerElement.textContent = timeLeft
    
    },1000)
})
//exit_btn.addEventListener();{
    //instrutions_box.classList.remove("activeinst");
//}

//continue_btn.addEventListener = () {
    //instrutions_box.classList.remove("activeintsr");
//}

