<template>
    <div class="w-full h-auto flex flex-col md:flex-row">
        <div class="md:border-r-[1px] h-full pt-4 md:pt-10 text-left flex-grow md:flex-1">
            <h2 class="px-4 md:px-8 pb-4 md:pb-8">¿Qué es JavaScript?</h2>
            <div class="text-white work-sans flex flex-col gap-4 md:gap-6 px-4 md:px-8">
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
        </div>
        <div class="md:border-l-[1px] h-full flex flex-col flex-grow md:flex-1">
            <div v-if="!quizCompleted" class="px-4 md:px-8 pb-4 md:mt-10 w-full">
                <h2>Pregunta:</h2>
                <!-- <div class="text-white work-sans flex flex-col gap-4 md:gap-6 pt-4 md:pt-8">
                    <QuestionComponent />
                </div> -->
                <QuizComponent />
            </div>
            <div v-else class="px-4 md:px-8 pb-4 md:mt-10 w-full">
                <h2>¡Felicidades!</h2>
                <p class="text-white work-sans">
                    Has completado el quiz. ¡Gracias por jugar!
                    ¿Te gustaría volver a jugar?
                    Elige nueva categoría y nivel.
                </p>
            </div>
            <div class="border-t-[1px]">
                <ConsoleComponent />
            </div>
        </div>
    </div>
</template>

<script>
import { useQuizStore } from "../stores";
import { computed, ref, watch } from "vue";
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
        const quizCompleted = computed(() => quizStore.quizCompleted);
        const route = useRoute();
        const category = ref(route.query.categoria);
        const level = ref(route.query.level);

        watch(
            () => [route.query.categoria, route.query.level],
            ([newCategory, newLevel]) => {
                category.value = newCategory;
                level.value = newLevel;
                quizStore.loadQuestions(category.value, level.value);
            });

        quizStore.loadQuestions(category.value, level.value);

        return {
            category,
            level,
            quizCompleted,
        };
    },
};
</script>

<style scoped>
/* Adjust padding and margin for better responsiveness */
@media (max-width: 768px) {
    .px-8 {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .mt-10 {
        margin-top: 1rem;
    }

    .pt-10 {
        padding-top: 1rem;
    }

    .pb-8 {
        padding-bottom: 1rem;
    }

    .gap-6 {
        gap: 1rem;
    }
}
</style>
