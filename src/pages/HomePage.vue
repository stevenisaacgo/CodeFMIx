<template>
    <div class="h-full grid grid-cols-2 text-[#dbdbdb]">
        <!-- Left Panel -->
        <div class="border-r-2 border-white pt-40">
            <h2 class="px-8 text-white">¿Quieres aprender jugando?</h2>
            <div class="px-8 pt-8 text-white space-y-6">
                <p>Bienvenidos a CodeFMIx. La cosa va a ponerse divertida. ✨</p>
                <div>
                    <h3>Instrucciones:</h3>
                    <p>En este juego, hay algunas preguntas con diferentes respuestas y tendrás que seleccionar la correcta para avanzar. Pulsa el botón de inicio y ¡Diviértete!</p>
                    <p>Aquí tienes una pequeña demostración para aprender a jugar:</p>
                </div>
            </div>
        </div>

        <!-- Right Panel -->
        <div class="pt-40">
            <!-- Question Section -->
            <div class="h-[60%] text-lg px-8 space-y-4">
                <p class="text-white">Pregunta:</p>
                <h3 class="text-sm text-white">¿Cómo insertar un comentario que tiene más de una línea?</h3>

                <div class="space-y-4">
                    <label v-for="(answer, index) in answers" :key="index" class="flex items-center bg-gray-100 text-[#242424] rounded-md px-3 py-2 hover:bg-[#5c7c89] cursor-pointer">
                        <input type="radio" v-model="selectedAnswer" :value="answer.value" class="mr-2" />
                        {{ answer.text }}
                    </label>
                </div>

                <button @click="checkAnswer" :class="buttonClass">
                    {{ buttonText }}
                </button>
            </div>

            <!-- Console Section -->
            <div class="border-t-2 mt-10 px-8">
                <p class="mt-10 mb-4 text-white">CONSOLA</p>
                <div class="console bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono text-left justify-center">
                    <div class="flex space-x-2 text-red-500">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p class="text-green-400 mt-4">$ npm install CodeFMIx</p>
                    <p class="mt-2">{{ message }}</p>
                    <p class="text-green-400 mt-2">$</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage",

    data() {
        return {
            buttonText: "Run Code",
            message: "",
            selectedAnswer: "",
            correctAnswer: "answer_a",
            answers: [
                { text: "/*Este comentario tiene más de una línea.*/", value: "answer_a" },
                { text: "<!--Este comentario tiene más de una línea.-->", value: "answer_b" },
                { text: "//Este comentario tiene más de una línea.//", value: "answer_c" },
            ],
        };
    },
    computed: {
        buttonClass() {
            return {
                'bg-blue-500': true,
                'text-white': true,
                'px-4': true,
                'py-2': true,
                'rounded-md': true,
                'hover:bg-blue-600': true,
                'cursor-pointer': true,
            };
        }
    },
    methods: {
        checkAnswer() {
            if (this.selectedAnswer === this.correctAnswer) {
                this.buttonText = "Next ->";
                this.message = "¡Correcto! El siguiente paso será escoger lenguaje y nivel, ¡Tú puedes!";
            } else {
                this.message = "No te preocupes, poco a poco aprenderás, vuelve a internarlo.";
            }
        },
    },
};
</script>

<style>
.console {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
</style>
