<template>
    <div class="console-container">
        <p class="mt-10 pb-4">CONSOLA</p>

        <div
            class="console bg-black text-white p-6 rounded-lg w-full max-w-lg max-h-lg font-mono text-left justify-center"
        >
            <div class="flex space-x-2 text-red-500">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p class="text-green-400 mt-4">$ npm install CodeFMIx</p>

            <p class="text-white mt-2">{{ message }}</p>
            <p class="text-green-400 mt-2">$</p>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useQuizStore } from "../stores/index";

export default {
    name: "ConsoleComponent",
    setup() {
        const quizStore = useQuizStore();
        const correctAnswer = computed(() => quizStore.correctAnswer);
        const username = computed(() => quizStore.username);
        const message = ref("");

        const correctResponses = [
            "¡Bien hecho," + username.value + "!",
            "¡Increíble, " + username.value + "! ¡Lo lograste!",
            "¡Correcto, " + username.value + "! ¡Eres un crack!",
            "¡Menuda racha, " + username.value + "! Sigue así.",
            "¡Bien hecho, " + username.value + "! ¡Eres todo un pro!",
            "¡Bravo, " + username.value + "! ¡Respuesta perfecta!",
            "¡Exactamente, " + username.value + "! ¡Sigue así!",
            "¡Gran trabajo, " + username.value + "! ¡Estás en racha!",
            "¡Lo lograste, " + username.value + "! ¡Qué genial!",
            "¡Acertaste, " + username.value + "! ¡Sigue con ese ritmo!",
        ];

        const incorrectResponses = [
            "Respuesta incorrecta, " +
                username.value +
                ". ¡Inténtalo de nuevo!",
            "No es correcto, " + username.value + ". ¡Prueba otra vez!",
            "Fallaste, " + username.value + ". ¡Sé que puedes hacerlo!",
            "Incorrecto, " + username.value + ". ¡No te rindas!",
            "Casi, " + username.value + ". ¡Intenta de nuevo!",
            "No te preocupes, " + username.value + ". ¡Puedes hacerlo mejor!",
            "¡Ánimo, " + username.value + "! ¡Inténtalo otra vez!",
            "No fue la correcta, " + username.value + ". ¡Sigue intentando!",
            "Sigue adelante, " +
                username.value +
                ". ¡La próxima vez lo lograrás!",
            "No es la correcta, " + username.value + ". ¡Pero no te desanimes!",
        ];

        watch(correctAnswer, (newValue) => {
            if (newValue !== null) {
                const responses = newValue
                    ? correctResponses
                    : incorrectResponses;
                const randomIndex = Math.floor(
                    Math.random() * responses.length
                );
                message.value = responses[randomIndex];
            } else {
                message.value = "";
            }
        });

        return {
            message,
            isCorrect: correctAnswer,
        };
    },
};
</script>

<style scoped>
.console {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
</style>
