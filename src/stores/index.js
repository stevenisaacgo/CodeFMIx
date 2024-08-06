// src/store/index.js
import { defineStore } from 'pinia';
import { fetchQuestions } from '../services/api';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    currentQuestion: null,
    selectedAnswer: null,
    correctAnswer: null,
    username: 'Usuario',
  }),
  actions: {
    async loadQuestions(category, level) {
      this.questions = await fetchQuestions(category, level);
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    },
    setUsername(username) {
      this.username = username;
    },
    selectAnswer(answer) {
      this.selectedAnswer = answer;
    },
    checkAnswer() {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      this.correctAnswer = this.selectedAnswer === currentQuestion.correct_answer;
    },
    updateScore(attempts){
      const points = Math.max(1, 100 - (attempts-1) * 6);
      console.log(points);
      console.log(attempts)
      this.score += points;
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex += 1;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        this.selectedAnswer = null;
        this.correctAnswer = null;
      }
    },
    resetQuiz() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.currentQuestion = null;
      this.selectedAnswer = null;
      this.correctAnswer = null;
    },
  },
});
