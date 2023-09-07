export class UI {

    constructor(){}

    /**
     * 
     * @param {string} text question to render
     */

    showQuestion(text){
        const qTitle = document.getElementById("question");
        qTitle.textContent = text;
    }

    /**
     * 
     * @param {string[]} choices the choices of the question
     */

    showChoices(choices, callback){
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = '';
        // for(let i = 0; i < choices.length; i++){
        //     const optionBtn = document.createElement("button");
        //     optionBtn.classList.add("bg-teal-600", "text-white", "py-2", "px-4", "rounded", "shadow", "text-lg");
        //     optionBtn.textContent = choices[i];
        //     choicesContainer.append(optionBtn);
        // }
        const choicesEl = choices.map(choice => {
            const optionBtn = document.createElement("button");
            optionBtn.classList.add("bg-teal-600", "text-white", "py-2", "px-4", "rounded", "shadow", "text-lg", "transition", "delay-600", "duration-400", "hover:bg-gray-700", "w-full", "max-w-sm");
            optionBtn.textContent = choice;
            choicesContainer.append(optionBtn);
            optionBtn.addEventListener("click", () => callback(choice));
        });
    }

    /**
     * 
     * @param {number} score the total score
     */

    showScore(score){
        const endQuiz = `
            <h1 class="text-4xl font-bold">Result</h1>
            <hr>
            <h2 class="text-2xl font-semibold ${score > 2 ? "text-green-500" : "text-red-500"}">${score > 2 ? "Good Job!" : "Try Again!"}</h2>
            <h2 class="text-2xl font-semibold">Your score is : ${score}</h2>
            <button id="retake" class="bg-teal-600 text-white py-2 px-4 rounded shadow text-lg transition delay-600 duration-400 hover:bg-gray-700 w-full max-w-xs">Take Again</button>
        `
        const mainContainer = document.getElementById("quiz");
        mainContainer.innerHTML = endQuiz;
    }

    /**
     * 
     * @param {number} currentIndex current question index
     * @param {*} total total questions
     */
    showProgress(currentIndex, total){
        const progress = document.getElementById("progress");
        progress.textContent = `Question ${currentIndex} of ${total}`;
    }

}