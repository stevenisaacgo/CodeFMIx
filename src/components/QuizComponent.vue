<!-- src/components/AnswersComponent.vue -->
<template>
    <div class="answers" v-if="answers">
        <h2 class="text-xl mb-4">{{ question }}</h2>
        <div v-for="(answer, key) in answers" :key="key" class="mb-4">
            <label
                class="flex items-center bg-gray-100 text-[#242424] rounded-md px-3 py-2 my-2 hover:bg-[#5c7c89] cursor-pointer"
            >
                >
                <input
                    type="radio"
                    :value="key"
                    v-model="selectedAnswer"
                    class="mr-2"
                />
                {{ answer }}
            </label>
        </div>
        <button @click="handleButtonClick" :class="buttonClass">
            {{ buttonText }}
        </button>
    </div>
    <div v-else>
        <h2 class="text-2xl font-bold mb-4">Loading...</h2>
    </div>
</template>

<script>
import { useQuizStore } from "../stores/index";
import { computed, ref, watch } from "vue";

export default {
    setup() {
        let attempts = 0;
        const quizStore = useQuizStore();
        const question = computed(() => quizStore.currentQuestion?.question);
        const answers = computed(() => quizStore.currentQuestion?.answers);
        
        const selectedAnswer = ref(null);

        const correctAnswer = computed(() => quizStore.correctAnswer);
        const buttonText = computed(() =>
            correctAnswer.value ? "Next ->" : "Run Code"
        );
        const buttonClass = computed(() => (correctAnswer.value === null ? 'btn bg-[#7f9ba9] hover:bg-[#2a4957]' : correctAnswer.value ? 'btn bg-green-500 hover:bg-green-600' : 'btn bg-red-200 hover:bg-red-400'));


        const handleButtonClick = () => {
            if (correctAnswer.value) {
                quizStore.updateScore(attempts);
                quizStore.nextQuestion();
                attempts = 0;
            } else {
                quizStore.selectAnswer(selectedAnswer.value);
                quizStore.checkAnswer();
                attempts++;
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
            buttonClass,
            handleButtonClick,
            question
        };
    },
};
</script>

<style scoped>
.answers {
    margin: 20px;
}

.btn {
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
