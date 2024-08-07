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
    quizCompleted: false,
    username: null,
  }),
  actions: {
    async loadQuestions(category, level) {
      this.questions = await fetchQuestions(category, level);
      this.currentQuestionIndex = 0;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.quizCompleted = false;
    },
    setUsername(username) {
      this.username = username;
    },
    resetScore() {
      this.score = 0;
    },
    selectAnswer(answer) {
      this.selectedAnswer = answer;
    },
    checkAnswer() {
      this.correctAnswer = this.selectedAnswer === this.currentQuestion.correct_answer;
    },
    updateScore(attempts){
      const points = Math.max(1, 100 - (attempts-1) * 25);
      this.score += points;
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex += 1;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        this.selectedAnswer = null;
        this.correctAnswer = null;
      }else{  
        this.quizCompleted = true;
      }
    },
  },
});
