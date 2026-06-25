const questions = [
    { question: "2 + 2 = ?", answer: "4" },
    { question: "Capital of islamabad?", answer: "Islamabad" }
];

let score = 0;

const checkAnswer = (userAnswer, correctAnswer) => 
    userAnswer === correctAnswer ? score++ : score;

questions.forEach(q => {
    let userAnswer = prompt(q.question);
    checkAnswer(userAnswer, q.answer);
});

const result = score >= 1 ? "Pass" : "Fail";
alert(`Your Score: ${score}\nResult: ${result}`);