<!-- src/components/QuestionComponent.vue -->
<template>
    <div class="question">
        <h2 class="text-2xl font-bold mb-4">{{ question }}</h2>
    </div>
</template>

<script>
import { useQuizStore } from "../stores/index";
import { computed } from "vue";
export default {
    setup() {
        const quizStore = useQuizStore();
        const question = computed(() => quizStore.currentQuestion?.question);
        return {
            question,
        };
    },
};
</script>

<style scoped>
.question {
    margin: 20px;
}
</style>
