var startgamebtn = document.getElementById("startgame") 
startgamebtn.addEventListener("click", startquizgame)
var timerElm = document.getElementById("timer") 
var titleElm = document.getElementById("title")
var questionElm = document.getElementById("questions") 
var finalscoreElm = document.getElementById("finalscore")
var submitscoresElem = document.getElementById('submitscores')
submitscoresElem.style.display = "none"
var submitbtn = document.getElementById('submitbtn')
var currentquestion = 0
var userscore = 0

var timer 
var timeleft = 30
var questions = [
    {question:"what is the best HTML Tag?",
    choices:["p","button","h1"], 
    answer:"button"
},
    {question:"what is the best styling?",
    choices:["html","css","js"], 
    answer:"css"
},
    {question:"what tag do you use for a paragraph?",
choices:["<p>","<div>","<img>"], 
answer:"<p>"
},
    {question:"what tag is used for images?",
choices:["<p>","<div>","<img>"], 
answer:"<img>"
},
    {question:"which element is used to create a line?",
choices:["<p>","<hr>","<img>"], 
answer:"<hr>"
}
]


function startquizgame() {
   console.log("working") 
   timer = setInterval(countdown, 1000)
    titleElm.textContent = questions[currentquestion].question
   for (let i = 0; i < questions[currentquestion].choices.length; i++) {
     var button = document.createElement("button") 
     button.addEventListener("click",submitanswer)
    button.textContent = questions[currentquestion].choices[i]
    questionElm.append(button)
       
   }
}
function submitanswer() {
    var selectedbutton = this.textContent
    var correctanswer = questions[currentquestion].answer
    if (selectedbutton === correctanswer){
        console.log("You got this correct!")
        userscore = userscore + 1
    }
    else {
        timeleft = timeleft-5
    if(timeleft<=0){
        clearInterval(timer)
        gameover()
        return timerElm.textContent = 0
    }
   timerElm.textContent = timeleft 
    }
 nextquestion()   
}
function nextquestion() { 
    questionElm.innerHTML = ""
    currentquestion = currentquestion +1
    if(currentquestion<=questions.length -1 ){
    titleElm.textContent = questions[currentquestion].question
    for (let i = 0; i < questions[currentquestion].choices.length; i++) {
      var button = document.createElement("button") 
      button.addEventListener("click",submitanswer)
     button.textContent = questions[currentquestion].choices[i]
     questionElm.append(button)
    }
}
else{
    gameover()
}
    }

    function gameover() {
    titleElm.innerHTML = ''
    questionElm.innerHTML = ""
    clearInterval(timer)
    finalscoreElm.textContent = `your final score is ${userscore}`
    submitscoresElem.style.display = "block"
  console.log("the game is over")      
    }


function countdown() {
    timeleft = timeleft-1
    if(timeleft<=0){
      clearInterval(timer)
      gameover()
       return timerElm.textContent = 0
    }
   timerElm.textContent = timeleft 
}

function submitscoreform () {
    console.log ("form submitted")
    console.log(document.getElementById("lname").value)
    
}




submitbtn.addEventListener("click",submitscoreform)