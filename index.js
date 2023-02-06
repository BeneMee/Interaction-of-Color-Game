let questionEL = document.getElementById("question");
let itemEl1 = document.getElementById("item1");
let itemEl2 = document.getElementById("item2");
let itemEl3 = document.getElementById("item3");
let itemEl4 = document.getElementById("item4");
let itemEl5 = document.getElementById("item5");
let itemEl6 = document.getElementById("item6");


const questions = [
    "Which color is the darkest?",
    "This is a second question",
    "This is the third?", 
    "This is the FOURth!"
];
// ein array in dem alle Fragen des spiels enthalten sind

window.onload = function () { //jedes mal wenn die seite geladen wirdsoll eine zufällige frage aus dem Array gepickt werden -> das soll die function() machen
    setRandomQuestion();
    };
    
    
    function setRandomQuestion() {
    //hier definieren wir setRandomQuestion()
    const randomIndex = Math.floor(Math.random() * questions.length);
    // wir generieren ein zufälligen Array index und speichern es in randomIndex

    const randomQuestion = questions[randomIndex];
    // in randomQuestion speichern wir das array item mit zufälligem Index
    
    questionEL.innerText = randomQuestion;
    //hier verwenden wir .innerText auf das questionEl und setzen es randomQuestion (dem zufälligen Array Item gleich)
    }




