import { newQs } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

// console.log(newQs[0].correctAnswer('Word'));

/**
 * 
 * @param {Quiz} quiz main Quiz object
 * @param {UI} ui ui object
 */

const renderPage = (quiz,ui) => {
    if(quiz.isEnded()){
        ui.showScore(quiz.score);
    }else{
        ui.showQuestion(quiz.getQuestionIndex().question);
        ui.showChoices(quiz.getQuestionIndex().choices, (choice) => {
            quiz.guess(choice);
            renderPage(quiz,ui);
        });
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
    }
}

function main(){
    const quiz = new Quiz(newQs);
    const ui = new UI();
    renderPage(quiz,ui);
}

main();