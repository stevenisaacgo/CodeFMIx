<template>
    <div class="w-full p-4 h-full">
        <div v-if="loading" class="text-center text-gray-500">Loading...</div>
        <div v-if="error" class="text-center text-red-500">{{ error }}</div>
        <div v-if="data && data.length">
            <ul>
                <li v-for="(quiz, quizIndex) in data" :key="quizIndex" class="mb-4">
                    <ul>
                        <label v-for="(answer, answerIndex) in quiz.answers" :key="answerIndex"
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
            <button @click="handleButtonClick" :class="buttonClass"
                class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';
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
    emits: ['quizChecked'],
    setup(props, { emit }) {
        const apiStore = useApiStore();
        const selectedAnswers = ref({});
        const loading = ref(false);
        const error = ref(null);
        const isCorrect = ref(null);

        const fetchQuizData = async () => {
            loading.value = true;
            error.value = null;
            try {
                await apiStore.fetchQuizData(props.category, props.difficulty);
                selectedAnswers.value = {};
                isCorrect.value = null;
            } catch (err) {
                error.value = err.response ? err.response.data : err.message;
            } finally {
                loading.value = false;
            }
        };

        const checkQuiz = () => {
            const correctAnswers = apiStore.data.map((quiz) => quiz.correct_answer);
            const allCorrect = Object.keys(selectedAnswers.value)[0] === correctAnswers[0];
            console.log(Object.keys(selectedAnswers.value)[0], correctAnswers[0]);
            console.log(Object.keys(selectedAnswers.value))

            isCorrect.value = allCorrect;
            emit('quizChecked', isCorrect.value);
        };

        const handleButtonClick = () => {
            if (isCorrect.value === null) {
                checkQuiz();
            } else if (isCorrect.value) {
                fetchQuizData();
            }
        };

        const buttonText = computed(() => (isCorrect.value === null ? 'Run' : isCorrect.value ? 'Next ->' : 'Run'));
        const buttonClass = computed(() => (isCorrect.value === null ? '' : isCorrect.value ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-red-600'));

        onMounted(() => {
            fetchQuizData();
        });

        watch(apiStore.data, (newData) => {
            if (newData.length > 0) {
                selectedAnswers.value = {};
                isCorrect.value = null;
            }
        });

        return {
            data: apiStore.data,
            loading,
            error,
            selectedAnswers,
            handleButtonClick,
            buttonText,
            buttonClass,
        };
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
