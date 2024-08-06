<!-- src/components/AnswersComponent.vue -->
<template>
    <div class="answers">
        <div v-for="(answer, key) in answers" :key="key" class="mb-4">
            <label
                class="flex items-center bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-2 hover:bg-indigo-300 cursor-pointer">
                >
                <input type="radio" :value="key" v-model="selectedAnswer" class="mr-2" />
                {{ answer }}
            </label>
        </div>
        <button @click="handleButtonClick" class="btn btn-primary">{{ buttonText }}</button>
    </div>
</template>

<script>
import { useQuizStore } from '../stores/index';
import { computed, ref, watch } from 'vue';

export default {
    setup() {
        const quizStore = useQuizStore();
        const answers = computed(() => quizStore.currentQuestion?.answers);
        const selectedAnswer = ref(null);

        const correctAnswer = computed(() => quizStore.correctAnswer);
        const buttonText = computed(() => (correctAnswer.value ? 'Next' : 'Submit'));

        const handleButtonClick = () => {
            if (correctAnswer.value) {
                quizStore.nextQuestion();
            } else {
                quizStore.selectAnswer(selectedAnswer.value);
                quizStore.checkAnswer();
            }
        };

        watch(correctAnswer, (newValue) => {
            if (newValue) {
                selectedAnswer.value = null;
            }
        });

        return {
            answers,
            selectedAnswer,
            buttonText,
            handleButtonClick,
        };
    },
};
</script>

<style scoped>
.answers {
    margin: 20px;
}

.btn {
    background-color: #1d4ed8;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>