// BAC CALCULATOR
var formulasButton = document.querySelector('#formulasButton');
var formulas = document.querySelectorAll('.formula');
var i = 0;

var subjects = document.querySelectorAll('input[type=number]');
var average, scoreMath, scorePhysique, scoreTechnique, scoreAnglais,
scoreFrancais, scoreArabe, scorePhilo, scoreInfo, scoreSport,
scoreTpTech, scoreAllemand;
var resetBtn = document.querySelector('.reset');
var loadBtn = document.querySelector('.load');

// Listen to formulas button
formulasButton.addEventListener('click', () => {

  // Edit Formulas button text
  i++;
  if (i % 2 == 0) {
    formulasButton.innerHTML = '[Voir Formules]'
  } else {
    formulasButton.innerHTML = '[Masquer Formules]'
  }

  // Show Each Formula
  formulas.forEach((formula) => {
    formula.classList.toggle('hidden')
  })

})

getScoresAndCalculate();

// Listen to each subject input
subjects.forEach((subject) => {

  subject.addEventListener('input',() => {

    formatSubjScore(subject);
    getScoresAndCalculate();
  })
});

// Reset button
resetBtn.addEventListener('click', () => {

  subjects.forEach((subject) => {
    subject.value = '';
  });

getScoresAndCalculate();

})

// Load button
loadBtn.addEventListener('click', () => {

  document.querySelector('#math').value = "15.25";
  document.querySelector('#phys').value = "15.25";
  document.querySelector('#tech').value = "18.52";
  document.querySelector('#angl').value = "17";
  document.querySelector('#franc').value = "11.5";
  document.querySelector('#arabe').value = "12.75";
  document.querySelector('#philo').value = "11.25";
  document.querySelector('#info').value = "18.75";
  document.querySelector('#sport').value = "19.17";
  document.querySelector('#tp-tech').value = "19.41";
  document.querySelector('#allemand').value = "19.5";

getScoresAndCalculate();

})

function getScoresAndCalculate() {

  getSubjectsScores();
  calculateAverage();
  calculateOldScore();
  calculateNewScore();

}
// Format every subject score
function formatSubjScore(subjectInput) {

  // Deny the user from writing a 0 to the input
  var subjectScore = subjectInput.value;
  if (subjectScore == "") { subjectScore = 0 }
  if (subjectScore == "0") { subjectInput.value = "" }

  if (parseFloat(subjectScore) < 0) { subjectInput.value = "" }
  if (parseFloat(subjectScore) > 20) { subjectInput.value = "20" }

}

// Get all subjects scores
function getSubjectsScores() {
  function verifNumber(x) {
    if (isNaN(x)) {
      return 0
    } else {
      return x
    }
  }

  scoreMath = verifNumber(document.querySelector('#math').valueAsNumber);
  scorePhysique = verifNumber(document.querySelector('#phys').valueAsNumber);
  scoreTechnique = verifNumber(document.querySelector('#tech').valueAsNumber);
  scoreAnglais = verifNumber(document.querySelector('#angl').valueAsNumber);
  scoreFrancais = verifNumber(document.querySelector('#franc').valueAsNumber);
  scoreArabe = verifNumber(document.querySelector('#arabe').valueAsNumber);
  scorePhilo = verifNumber(document.querySelector('#philo').valueAsNumber);
  scoreInfo = verifNumber(document.querySelector('#info').valueAsNumber);
  scoreSport = verifNumber(document.querySelector('#sport').valueAsNumber);
  scoreTpTech = verifNumber(document.querySelector('#tp-tech').valueAsNumber);
  scoreAllemand = verifNumber(document.querySelector('#allemand').valueAsNumber);

}

function calculateAverage()  {
  var totalPoints = 0;

  // Calculate total points from all subjects
  totalPoints = (scoreMath * 3) + (scorePhysique * 3) + (scoreTechnique * 3) +
  scoreAnglais + scoreFrancais + scoreArabe + scorePhilo + scoreInfo +
  scoreSport + scoreTpTech + Math.max(scoreAllemand - 10, 0);

  // Calculate average
  average = (totalPoints / 16);

  // Show average
  document.querySelector('#average').textContent = average.toFixed(2);

}

function calculateOldScore()  {
  var score = 0;
  score = (average * 5) + (scoreMath * 2) + scorePhysique +
  scoreTechnique + scoreFrancais + scorePhilo
  + Math.max((scoreAnglais - 12) / 3, 0);

  document.querySelector('#old-score').textContent = score.toFixed(4);
}

function calculateNewScore()  {
  var score = 0;
  score = (average * 4) + (scoreMath * 1.5) + (scoreTechnique * 1.5)
  + scorePhysique + scoreFrancais + scoreAnglais;

  document.querySelector('#new-score').textContent = score.toFixed(4);
}
