export class Question {

    /**
     * 
     * @param {string} question this is the question
     * @param {string[]} choices these are the possible answers to the question
     * @param {string} answer this is the answer to the question
     */

    constructor(question,choices,answer){
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice text to guess the correct answer
     * @returns {boolean} returns true if the answer is correct
     */

    correctAnswer(choice){
        return choice === this.answer;
    }
}
const question = new Question("Ecmascript es Javascipt?",['Si','No'],'Si');
// console.log(question.correctAnswer("Si"));