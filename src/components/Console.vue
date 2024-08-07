<template>
    <div class="console-container border-t-[1px]">
        <p class="mt-10 pb-8 text-white">CONSOLA</p>

        <div
            class="console bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono text-left justify-center"
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
            "¡Bien hecho, " +
                username.value +
                "! Has compilado esa respuesta perfectamente.",
            "¡Increíble, " + username.value + "! ¡Tu código es impecable!",
            "¡Correcto, " + username.value + "! ¡Eres el debugger definitivo!",
            "¡Menuda racha, " +
                username.value +
                "! Estás en modo God de programación.",
            "¡Bien hecho, " +
                username.value +
                "! ¡Eres todo un programador ninja!",
            "¡Bravo, " + username.value + "! ¡Respuesta sin bugs!",
            "¡Exactamente, " + username.value + "! ¡Tu lógica es infalible!",
            "¡Gran trabajo, " +
                username.value +
                "! ¡Tu código está en producción!",
            "¡Lo lograste, " +
                username.value +
                "! ¡Eres el hacker de las respuestas!",
            "¡Acertaste, " + username.value + "! ¡Compilación exitosa!",
        ];

        const incorrectResponses = [
            "Respuesta incorrecta, " +
                username.value +
                ". ¡Revisa tus variables y vuelve a intentar!",
            "No es correcto, " + username.value + ". ¡Sigue depurando!",
            "Fallaste, " +
                username.value +
                ". ¡Pero hasta los mejores debuggean!",
            "Incorrecto, " +
                username.value +
                ". ¡No te rindas, el siguiente commit será mejor!",
            "Casi, " +
                username.value +
                ". ¡Revisa tu lógica y prueba de nuevo!",
            "No te preocupes, " +
                username.value +
                ". ¡Hasta los mejores encuentran bugs!",
            "¡Ánimo, " + username.value + "! ¡Refactoriza e intenta otra vez!",
            "No fue la correcta, " +
                username.value +
                ". ¡Tu código merece una segunda oportunidad!",
            "Sigue adelante, " +
                username.value +
                ". ¡El próximo commit será el correcto!",
            "No es la correcta, " +
                username.value +
                ". ¡Pero cada bug es una lección!",
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
