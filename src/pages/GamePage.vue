<template>
    <div class="w-full h-auto flex flex-col md:flex-row">
        <div class="md:border-r-[1px] h-full pt-4 md:pt-10 text-left flex-grow md:flex-1">
            
            <h2 class="px-4 md:px-8 pb-4 md:pb-8">¿Lo sabías? ✨</h2>
            <div class="text-white work-sans flex flex-col gap-4 md:gap-6 px-4 md:px-8">
              <p>{{ funFact }}</p>
            </div>
                
        </div>   
            <!-- <h2 class="px-4 md:px-8 pb-4 md:pb-8">¿Qué es JavaScript?</h2>
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
            </div> -->
        
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
import { onMounted } from "vue";

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
        const funFact = ref("");
        
        //array with funFacts
        const codingFunFacts = [
            "Programar es como escribir un libro... excepto que si te equivocas en un solo punto, todo el libro se desmorona.",
            "La razón principal por la que los programadores prefieren la oscuridad es porque la luz los recuerda a errores no resueltos.",
            "Un programador sin café es como un coche sin gasolina: no llegará muy lejos.",
            "La programación no es sobre escribir código, es sobre arreglar bugs creados al escribir código.",
            "Ser programador es como ser un mago... pero tu hechizo se rompe cada vez que alguien dice 'funciona en mi máquina'.",
            "Hay dos tipos de lenguajes de programación: aquellos que la gente siempre se queja y aquellos que nadie usa.",
            "90% de la programación es pensar en nombres para las variables y el 10% restante es resolver errores de sintaxis.",
            "Un buen programador es alguien que mira ambos lados antes de cruzar una calle de un solo sentido.",
            "Cuando tu código finalmente funciona a la perfección, es probable que lo hayas hecho en el proyecto equivocado.",
            "La vida de un programador: escribir código, encontrar errores, arreglar errores, encontrar nuevos errores.",
            "Los programadores son personas que resuelven un problema que no sabías que tenías de una manera que no entiendes.",
            "Un programador puede convertir el café en código. ¡Eso es magia pura!",
            "Un día sin programación es como... solo estoy bromeando, no tengo ni idea.",
            "Un programador es como un chef, pero sus ingredientes son ceros y unos.",
            "El código más seguro es el código que nunca se escribió.",
            "Programar es como preparar una receta: sigues los pasos, y cuando sale mal, agregas comentarios para ver dónde te equivocaste.",
            "Un día productivo para un programador es cuando solo pasa el 80% de su tiempo buscando en Google.",
            "Los programadores realmente creen en la reencarnación: ¿cuántas veces has renacido después de que tu código finalmente funcionó?",
            "El único lugar donde el éxito viene antes que el trabajo es en el diccionario... y en el código heredado.",
            "El mayor miedo de un programador: el mensaje 'Por favor, contacta al administrador'."
            ];

        // Function random Coding Fun Fact
        const RandomFunFact = () => {
            const randomIndex = Math.floor(Math.random() * codingFunFacts.length);
            funFact.value = codingFunFacts[randomIndex];
            console.log(funFact.value);
        };
        onMounted(() => {
            RandomFunFact();
        });
        // Watch for changes in both category and level
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
            funFact,
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
