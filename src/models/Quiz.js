// @ts-check
import { Question } from "./Question.js";

export class Quiz {

    // We don't declare it as a variable rather as a property of the Quiz object
    questionIndex = 0;
    score = 0;

    /**
     * 
     * @param {Question[]} questions array of questions from question key value
     */

    constructor(questions){
        this.questions = questions;
    }

    /**
     * 
     * @returns {Question} current question 
     */

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    // Check if quiz is on the last question
    isEnded(){
        return this.questions.length === this.questionIndex;
    }

    /**
     * 
     * @param {string} answer correct answer attempt
     */

    guess(answer){
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }
}