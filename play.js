
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
            {text:"5dh",correct:true},
            {text:"khayba",correct:false},
            {text:"ra2i3a",correct:false},
        ]
    
}


]

const questionElement=document.getElementById("qst_para");
const answerBtn = document.getElementsByClassName("choix")[0];
const nexBtn = document.getElementsByClassName("btn_next")[0];
let index=0;
let scor=0;
function startquiz(){
    index=0;
    scor=0;
    showQustion();
}
function showQustion(){
    let currentQuestion=question[index];
    let questionNo=index+1;
    questionElement.innerHTML=questionNo + ". "+currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML= answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    
   });
}
startquiz();