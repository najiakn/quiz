
document.addEventListener('DOMContentLoaded', function() {
  let min = document.getElementById('min');
  let scd = document.getElementById('scd');

  // Définir le temps initial à 15 minutes
  let minutes = 0;
  let seconds = 60;

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
      showScore();
      
      // Insérer ici le code pour gérer le temps écoulé
    }
  },1000);
});



//remplir array 
const questions=[
{
  question:"Quelle est la capitale du Japon ?",
    answers:[
        {text:"Pékin ",correct: false},
        {text:"Tokyo",correct:true},
        {text:"Séoul",correct:false},
        {text:"Bangkok",correct:false},

    ]

},{
  question:"Combien de planètes dans notre système solaire?",
    answers:[
        {text:"11" , correct:false},
        {text:"7",correct:false},
        {text:"8",correct:true},
        {text:"10",correct:false},
    ]
},
{
  question:"Qui a écrit 'Romeo et Juliette'",

    answers:[
        {text:"William Shakespeare" , correct:true},
        {text:"Charles Dickens",correct:false},
        {text:"Jane Austen",correct:false},
        {text:"Mark Twain",correct:false},]
},{
    
        question:"Quel est l'élément le plus abondant dans l'atmosphère terrestre?",
        answers:[
            {text:"Azote" , correct:false},
            {text:"Hydrogène",correct:false},
            {text:"Dioxyde de carbone ",correct:false},
            {text:"Oxygène",correct:true},
        ]
    
}
,{
  question:"What is the opposite of 'hot'?",
  answers:[
      {text:"Warm" , correct:false},
      {text:"Cold",correct:true},
      {text:"Spicy",correct:false},
      {text:"Cool",correct:false},
  ]
}
,{
  question:"Which of the following is a type of fruit?",
  answers:[
      {text:"Potato" , correct:false},
      {text:"Carrot",correct:false},
      {text:"Apple",correct:true},
      {text:"Broccoli",correct:false},
  ]
}
,{
  question:"Complete the famous proverb: 'A bird in the hand is worth...",
  answers:[
      {text:"Two in the bush" , correct:false},
      {text:"One in the tree",correct:false},
      {text:"None at all",correct:false},
      {text:"Two in the hand",correct:true},
  ]
}
,{
  question:"What does the acronym 'NASA' stand for?",
  answers:[
      {text:"National Air and Space Association" , correct:false},
      {text:"National Aeronautics and Space Administration",correct:true},
      {text:"North American Space Agency",correct:false},
      {text:"New Astronomical Studies Association",correct:false},
  ]
}
,{
  question:"Qu'est-ce que HTML?",
  answers:[
      {text:"Un langage de programmation pour le développement web" , correct:false},
      {text:"Un langage de balisage pour créer des pages web",correct:true},
      {text:"Un langage de programmation pour l'intelligence artificielles",correct:false},
      {text:"Un système d'exploitation pour les serveurs web",correct:false},
  ]
}
,{
  question:"Quelle est la signification de CSS ?",
  answers:[
      {text:"Cascading Style Sheets " , correct:true},
      {text:"Computer Software System",correct:false},
      {text:"UCreative Style System",correct:false},
      {text:" Coding Style System",correct:false},
  ]
}

,{
  question:"Quel langage de programmation est souvent utilisé pour le développement côté serveur ?",
  answers:[
      {text:"HTML " , correct:false},
      {text:"JavaScript",correct:false},
      {text:"Python",correct:false},
      {text:"PHP",correct:true},
  ]
}
,{
  question:"Quelle est la fonction principale de Git ?",
  answers:[
      {text:"Éditer des fichiers texte " , correct:false},
      {text:"Contrôler les versions de code source et faciliter la collaboration ",correct:true},
      {text:"Créer des bases de données relationnelles",correct:false},
      {text:"Analyser des données statistiques",correct:false},
  ]
}
,{
  question:"Quelle est la signification de l'acronyme 'SQL' ?",
  answers:[
      {text:"Structured Query Language " , correct:true},
      {text:"Simple Question Language",correct:false},
      {text:"System Quality Language",correct:false},
      {text:"Server Query Logic",correct:false},
  ]
}
,{
  question:"Quel est le langage de programmation utilisé pour créer des applications Android ?",
  answers:[
      {text:"Java " , correct:true},
      {text:"Python",correct:false},
      {text:"C++",correct:false},
      {text:"JavaScript",correct:false},
  ]
}
,{
  question:"Qu'est-ce qu'un algorithme ?",
  answers:[
      {text:"Un type de serveur web " , correct:false},
      {text:"Une procédure ou une formule pour résoudre un problème",correct:true},
      {text:"Un type de base de données",correct:false},
      {text:"Une fonction JavaScript",correct:false},
  ]

},{
  question:"Qu'est-ce que PHP ?",
  answers:[
      {text:"Un langage de balisage" , correct:false},
      {text:"Un langage de programmation pour créer des pages web statiques",correct:false},
      {text:"Un langage de programmation pour le développement web côté serveu",correct:true},
      {text:"  Un framework JavaScript",correct:false},
  ]
}
];

const questionElement=document.getElementById("qst_para");
const answerBtn = document.getElementsByClassName("choix")[0];
const nexBtn = document.getElementsByClassName("btn_next")[0];
const resultat = document.querySelector(".resultat span");

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
let point=document.getElementById("point");
const pbar = document.querySelector(".progress");
function showScore(){
  resetState(); 
  if(scor>=12){
    questionElement.innerHTML=`Félicitations ! Vous avez gagné ; Vous avez marqué ${scor} sur ${questions.length}.`;
  }
  else {
    questionElement.innerHTML=`Dommage, vous n'avez pas gagné cette fois; Vous avez marqué ${scor} sur ${questions.length}.`;
  }
  
  
  nexBtn.style.display="none";
  min.style.display="none";
  scd.style.display="none";
  point.style.display="none";
  pbar.style.display="none";

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
  let roundedValue = Math.round(value); // Arrondir la valeur du pourcentage
  progressBar.querySelector(".progresFile").style.width = `${roundedValue}%`;
  progressBar.querySelector(".progresText").textContent = `${roundedValue}%`;
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