let questionEL = document.getElementById("question");
let itemEl1 = document.getElementById("item1");
let itemEl2 = document.getElementById("item2");
let itemEl3 = document.getElementById("item3");
let itemEl4 = document.getElementById("item4");
let itemEl5 = document.getElementById("item5");
let itemEl6 = document.getElementById("item6");


const questions = [
    "Which color is different?",
    //"This is a second question",
    //"This is the third?", 
    //"This is the FOURth!"
];

window.onload = function () {
    setRandomQuestion();
    };
    
    
function setRandomQuestion() {

    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];

    questionEL.innerText = randomQuestion;

    if (questionEL.innerText === "Which color is different?") {
        function getRandomColor () {
            let letters = "0123456789ABCDEF";
            let color = "#";
                for (let i = 0; i < 6; i++) {
                  color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
        }
    
        let elements = [itemEl1, itemEl2, itemEl3, itemEl4, itemEl5, itemEl6];
        elements.sort(function() { return 0.5 - Math.random() });
        let selectedElements = elements.slice(0, 5);
        let randomColor = getRandomColor();
    
        selectedElements.forEach(function(element) {
            if (randomColor) {
                element.style.backgroundColor = randomColor;
            } 
        });

    
    }

}


