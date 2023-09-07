import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const newQs = data.map(question => new Question(question.question, question.choices, question.answer));
// console.log(newQs);