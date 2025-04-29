let questions = [
    {
        "question": "Was bewirkt der HTML-Tag?",
        "answer1": "Er erstellt einen Absatz",
        "answer2": "Er fügt ein Bild ein",
        "answer3": "Er erzeugt eine Tabelle",
        "answer4": "Er definiert eine Überschrift",
        "correct": "answer_1"
    },
    {
        "question": "Wie beginnt man eine CSS-Regel für ein Element mit der Klasse 'button'?",
        "answer1": "#button { }",
        "answer2": ".button { }",
        "answer3": "button { }",
        "answer4": "<button> { }",
        "correct": "answer_2"
    },
    {
        "question": "Welche Datei-Endung wird normalerweise für JavaScript verwendet?",
        "answer1": ".css",
        "answer2": ".html",
        "answer3": ".js",
        "answer4": ".java",
        "correct": "answer_3"
    },
    {
        "question": "Was zeigt 'console.log()' in JavaScript an?",
        "answer1": "Eine Fehlermeldung auf der Webseite",
        "answer2": "Einen Wert in der Browser-Konsole",
        "answer3": "Eine Meldung im HTML-Code",
        "answer4": "Nichts, es funktioniert nicht",
        "correct": "answer_2"
    },
    {
        "question": "Wie kann man in HTML einen Link erstellen?",
        "answer1": "<link href='...'>Link</link>",
        "answer2": "<a href='...'>Link</a>",
        "answer3": "<url src='...'>Link</url>",
        "answer4": "<href>Link</href>",
        "correct": "answer_2"
    }
];

let currentQuestion = 0;

function init() {
    render();
};

function render() {
    let countQuestions = document.getElementById("count");
    countQuestions.innerHTML = questions.length;
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer1'];
    document.getElementById('answer_2').innerHTML = question['answer2'];
    document.getElementById('answer_3').innerHTML = question['answer3'];
    document.getElementById('answer_4').innerHTML = question['answer4'];
};

function answer(indexAnswer) {
    let question = questions[currentQuestion];
    if(indexAnswer !== question['correct']){
        document.getElementById(indexAnswer).classList.toggle('bg-danger');
    } else {
        document.getElementById(indexAnswer).classList.toggle('bg-success');
    };
};