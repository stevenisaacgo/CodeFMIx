<template>
    <div class="w-full p-4">
        <div v-if="loading" class="text-center text-gray-500">Loading...</div>
        <div v-if="error" class="text-center text-red-500">{{ error }}</div>
        <div v-if="data && data.length">
            <ul>
                <li v-for="(quiz, quizIndex) in data" :key="quizIndex" class="mb-4">
                    <ul>
                        <label 
                        v-for="(answer, answerIndex) in quiz.answers" 
                        :key="answerIndex"
                            class="flex items-center bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-2 hover:bg-indigo-300 cursor-pointer">
                            <input type="radio" :name="'quiz-' + quizIndex" v-model="selectedAnswers[quizIndex]"
                                :value="answer" class="mr-2" />
                            <span>{{ answer }}</span>
                        </label>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="flex justify-end p-3">
            <button @click="checkQuiz" :class="buttonClass"
                class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useApiStore } from '../stores/apiStore';

export default {
    props: {
        category: {
            type: String,
            required: true,
        },
        difficulty: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const apiStore = useApiStore();
        const selectedAnswers = ref([]);
        const loading = ref(false);
        const error = ref(null);
        const isCorrect = ref(null);

        const fetchQuizData = async () => {
            loading.value = true;
            error.value = null;
            try {
                await apiStore.fetchQuizData(props.category, props.difficulty);
            } catch (err) {
                error.value = err.response ? err.response.data : err.message;
            } finally {
                loading.value = false;
            }
        };

        const checkQuiz = () => {
            const correctAnswers = apiStore.data.map((quiz) => quiz.correct_answer);
            isCorrect.value = selectedAnswers.value.every((answer, index) => answer === correctAnswers[index]);
            console.log('Selected Answers:', selectedAnswers.index);
            console.log('Is Correct:', isCorrect.value);
        };

        const buttonText = computed(() => (isCorrect.value === null ? 'Run' : isCorrect.value ? 'Next' : 'Run'));
        const buttonClass = computed(() => (isCorrect.value === null ? '' : isCorrect.value ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'));

        onMounted(() => {
            fetchQuizData();
        });

        return {
            data: apiStore.data,
            loading,
            error,
            selectedAnswers,
            checkQuiz,
            buttonText,
            buttonClass,
        };
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
