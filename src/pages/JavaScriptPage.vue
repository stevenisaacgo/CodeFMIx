<template>
    <div class="w-full grid grid-cols-2 h-full">
        <div class="border-r-[1px] h-full pt-10 text-left">
            <h2 class="px-8">¿Qué es JavaScript?</h2>
            <div class="text-white work-sans flex flex-col gap-6 px-8">
                <p>
                    Bienvenidos a The Origins III: JavaScript. La cosa va a
                    ponerse divertida. ✨
                </p>
                <p>
                    El lenguaje de programación que estamos aprendiendo se llama
                    JavaScript y es el que impulsa el 97,5 % de los sitios web
                    actuales.
                </p>
                <p>
                    HTML Logo HTML + Html Logo CSS + Html Logo JavaScript =
                    lenguajes básicos de la web.
                </p>
                <p>
                    HTML y CSS le dan estructura y estilo a un sitio web, pero
                    JavaScript lo hace interactivo y vivo. Nos permite agregar
                    funcionalidad básica y comportamientos dinámicos a nuestras
                    páginas web.
                </p>
                <p>Pero, ¿cómo surgió?</p>
                <p>
                    Los años 90 fueron el comienzo de la era puntocom y se
                    estaba gestando una guerra de navegadores de Internet entre
                    Netscape y Microsoft. En 1995, un desarrollador de Netscape
                    creó un nuevo lenguaje de programación lleno de errores...
                    en solo 10 días. 😵‍💫
                </p>
                <p>
                    Este fue el comienzo de JavaScript. Surgió por necesidad
                    porque HTML/CSS no podía agregar funciones dinámicas.
                </p>
            </div>
            <div class="">
                <div class="px-8 pt-10 mt-10 border-t-[1px] w-[100%]">
                    <h3>Instrucciones:</h3>
                </div>
                <div class="text-white work-sans flex flex-col gap-6 px-8 pt-8">
                    <QuestionComponent />
                </div>
            </div>
        </div>
        <div class="border-l-[1px] h-full pt-10 h">
            <div class="h-[60%]">
                <p>Respuestas</p>
                <QuizComponent />
            </div>

            <div class="border-t-[1px]">
                <ConsoleComponent />
            </div>
        </div>
    </div>
</template>

<script>
import { useQuizStore } from "../stores";
import { ref, watch } from "vue";
import ConsoleComponent from "../components/Console.vue";
import QuizComponent from "../components/QuizComponent.vue";
import QuestionComponent from "../components/QuestionComponent.vue";
import { useRoute } from "vue-router";

export default {
    components: {
        QuestionComponent,
        QuizComponent,
        ConsoleComponent,
    },

    setup() {
        const quizStore = useQuizStore();
        const category = ref("javascript");
        const route = useRoute();
        const level = ref(route.query.difficultyLevel);
        watch(
            () => route.query.difficultyLevel,
            (newLevel) => {
                level.value = newLevel;
                quizStore.loadQuestions(category.value, level.value);
            }
        );
        quizStore.loadQuestions(category.value, level.value);

        return {
            category,
            level,
        };
    },
};
</script>

<style></style>
