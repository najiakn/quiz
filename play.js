
document.addEventListener('DOMContentLoaded', function() {
  let min = document.getElementById('min');
  let scd = document.getElementById('scd');

  // Définir le temps initial à 15 minutes
  let minutes = 15;
  let seconds = 0;

  // Mettre à jour le temps initial sur la page
  min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
  scd.innerHTML = (seconds < 10 ? "0" : "") + seconds;

  // Définir l'intervalle pour diminuer le temps
  let timer = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    
    // Mettre à jour le temps restant sur la page
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    scd.innerHTML = (seconds < 10 ? "0" : "") + seconds;

    // Si le temps est écoulé
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
      // Insérer ici le code pour gérer le temps écoulé
    }
  },1000);
});



//remplir array 
const questions=[
{
  question:"mon nom est ?",
    answers:[
        {text:"najia zen ",correct: false},
        {text:"najia ghzala",correct:true},
        {text:"najia khayba",correct:false},
        {text:"najia sayma",correct:false},

    ]

},{
  question:"ilham kidayra ?",
    answers:[
        {text:"ilham zeeen" , correct:true},
        {text:"ilham hayawanaa",correct:false},
        {text:"ilham zamra",correct:false},
        {text:"ilham sa2ima",correct:false},
    ]
},
{
  question:"7na kidayrat ?",
    answers:[
        {text:"fenaat" , correct:false},
        {text:"ghzalat",correct:false},
        {text:"khaybat",correct:true},
        {text:"ra2i3at",correct:false},]
},{
    
        question:"classe kidayra ?",
        answers:[
            {text:"basslin" , correct:true},
            {text:"5dh",correct:false},
            {text:"khayba",correct:false},
            {text:"ra2i3a",correct:false},
        ]
    
}


];

const questionElement=document.getElementById("qst_para");
const answerBtn = document.getElementsByClassName("choix")[0];
const nexBtn = document.getElementsByClassName("btn_next")[0];
let index=0;
let scor=0;
function startquiz(){
    index=0;
    scor=0;
    nexBtn.innerHTML="Neeext";
    showQustion();
}
function showQustion(){
    resetState();
    let currentQuestion=questions[index];
    let questionNo=index+1;
    questionElement.innerHTML=questionNo + ". "+currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    
   });
}

function resetState(){
  nexBtn.style.display = "none";
  while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function selectAnswer(e){
  const selectbtn = e.target;
  const isCorrect = selectbtn.dataset.correct === "true";
  if(isCorrect){
    selectbtn.classList.add("correct");
    scor++;
  }else{
    selectbtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nexBtn.style.display = "block";
}
function showScore(){
  resetState();
  questionElement.innerHTML = `You scord ${scor} out of ${questions.length}!`;
  nexBtn.innerHTML = "play Again";
  nexBtn.style.display = "block";
}


function handleNextBtn(){
  index++;
  if(index < questions.length){
    showQustion();
  }else{
    showScore();
  }
}

nexBtn.addEventListener("click",()=>{
  if(index < questions.length){
    handleNextBtn();
  }else{
     startquiz();
  }

});

var prowidth = 0;

        function updateProgressBar(progressBar, value) {
            prowidth = value; // Mettre à jour la valeur de prowidth
            progressBar.querySelector(".progresFile").style.width = `${value}%`;
            progressBar.querySelector(".progresText").textContent = `${value}%`;
        }

        function bar() {
            const pbar = document.querySelector(".progress");
            // Augmenter de 6.25% à chaque clic
            prowidth += 6.25;
            // Limiter à 100%
            prowidth = Math.min(prowidth, 100);
            updateProgressBar(pbar, prowidth);
            // Réinitialiser si on atteint 100%
            if (prowidth >= 100) {
                prowidth = 0;
            }
        }

startquiz();