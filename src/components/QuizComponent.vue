<template>
    <div class="w-full">
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error.message }}</div>
        <div v-if="data">
            <ul>
                <li v-for="(quiz, index) in data" :key="index">
                    <ul>
                        <label v-for="(answer, index) in quiz.answers" :key="index"
                            class="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                            <input type="radio" name="Country">
                            <li>{{ answer }}</li>
                        </label>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="flex justify-end p-3">
            <button @click="checkQuiz" class="">Run</button>

        </div>
    </div>
</template>

<script>
import { data } from 'autoprefixer';
import { useApiStore } from '../stores/apiStore';
import { ref, onMounted } from 'vue';

export default {
    props: {
        category: {
            type: String,
            required: true
        },
        difficulty: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const apiStore = useApiStore();
        onMounted(() => {
            fetchQuizData();
        });

        return {
            data: apiStore.data,
            loading: apiStore.loading,
            error: apiStore.error
        };

    }
};
</script>

<style scoped>
/* Agrega tus estilos aquí */
</style>