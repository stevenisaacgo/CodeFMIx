<template>
    <div class="w-full h-[100%] flex flex-col md:flex-row">
        <div
            class="md:border-r-[1px] h-full pt-4 md:pt-10 text-left flex-grow md:flex-1"
        >
            <h2 class="px-4 md:px-8 pb-4 md:pb-8">¿Lo sabías? ✨</h2>
            <div
                class="text-[bdbdbd] work-sans flex flex-col gap-4 md:gap-6 px-4 md:px-8"
            >
                <p class="italic">{{ funFact.fact }}</p>
                <p class="text-xl text-white">Información:</p>
                <p class="text-lg">{{ funFact.detail }}</p>
            </div>
        </div>

        <div class="md:border-l-[1px] h-full flex flex-col flex-grow md:flex-1">
            <div
                v-if="!quizCompleted"
                class="px-4 md:px-8 pb-4 md:mt-10 w-full"
            >
                <h2>Pregunta:</h2>

                <QuizComponent />
            </div>
            <div v-else class="px-4 md:px-8 pb-4 md:mt-10 w-full">
                <h2>¡Felicidades!</h2>
                <p class="text-white work-sans">
                    Has completado el quiz. ¡Gracias por jugar! ¿Te gustaría
                    volver a jugar? Elige nueva categoría y nivel.
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

        const codingFunFacts = [
            {
                fact: "El primer programador de la historia fue Ada Lovelace.",
                detail: "Ada Lovelace, nacida en 1815, es conocida como la primera programadora debido a su trabajo con Charles Babbage en su máquina analítica. En 1843, Lovelace escribió un algoritmo para la máquina que estaba diseñado para calcular una secuencia de números de Bernoulli, convirtiéndose así en el primer programa de computadora del mundo. Además de su trabajo técnico, Lovelace también es reconocida por su visión única de las capacidades de las máquinas, prediciendo que podrían ir más allá de los simples cálculos numéricos y crear música, gráficos e incluso tener aplicaciones en otros campos científicos. Su trabajo permaneció desconocido para muchos hasta que fue redescubierto en el siglo XX, y hoy es celebrada como una pionera en la informática.",
            },
            {
                fact: "El término 'bug' en programación tiene una historia interesante.",
                detail: "El uso del término 'bug' para describir un error de programación se popularizó en 1947 cuando Grace Hopper y su equipo encontraron una polilla atrapada en el relé de un ordenador Mark II en la Universidad de Harvard. La polilla estaba causando problemas en el funcionamiento del sistema, y el equipo la removió y pegó en su cuaderno de registro con la anotación 'First actual case of bug being found'. Aunque el término 'bug' ya se usaba en ingeniería para referirse a fallos técnicos, este incidente es conocido por haber cementado su uso en el contexto de la informática. Grace Hopper, una figura icónica en la historia de la computación, también es conocida por su trabajo en el desarrollo del primer compilador, que traduce código de alto nivel a código de máquina.",
            },
            {
                fact: "El lenguaje de programación Python recibe su nombre no de la serpiente, sino del grupo de comedia británico Monty Python.",
                detail: "Guido van Rossum, el creador de Python, nombró al lenguaje en honor al grupo de comedia británico Monty Python. Van Rossum quería un nombre que fuera corto, único y que evocara algo divertido. Python se ha convertido en uno de los lenguajes de programación más populares del mundo debido a su simplicidad y legibilidad. Desde sus inicios en 1991, Python ha crecido enormemente y es utilizado en una variedad de aplicaciones, desde desarrollo web hasta inteligencia artificial. La comunidad de Python también ha adoptado el espíritu humorístico del nombre, con numerosos módulos y paquetes que hacen referencia a Monty Python y su humor absurdo.",
            },
            {
                fact: "El primer videojuego de la historia se llama 'Tennis for Two' y fue creado en 1958 por William Higinbotham.",
                detail: "En 1958, el físico William Higinbotham creó 'Tennis for Two' en el Laboratorio Nacional de Brookhaven para entretener a los visitantes en su día de puertas abiertas. El juego se mostraba en una pantalla de osciloscopio y permitía a dos jugadores controlar una pelota de tenis virtual, que se movía de un lado a otro de la pantalla. Aunque rudimentario comparado con los estándares modernos, 'Tennis for Two' es reconocido como uno de los primeros videojuegos de la historia. Este juego precede al famoso 'Pong', que fue lanzado en 1972 y se considera uno de los primeros videojuegos arcade comerciales. Higinbotham nunca patentó su invento, y no se benefició económicamente de su creación.",
            },
            {
                fact: "El lenguaje de programación Java originalmente se llamaba 'Oak'.",
                detail: "James Gosling y su equipo de Sun Microsystems desarrollaron Java en la década de 1990 y originalmente lo llamaron 'Oak' en honor a un roble que estaba fuera de la oficina de Gosling. Sin embargo, al descubrir que 'Oak' ya era una marca registrada, tuvieron que buscar un nuevo nombre. Eligieron 'Java' en referencia al café de Java, que era muy popular entre los desarrolladores del equipo. Java fue diseñado para tener la menor cantidad de dependencias posibles, lo que lo hace ideal para aplicaciones en una red distribuida. Desde su lanzamiento en 1995, Java ha evolucionado y se ha convertido en uno de los lenguajes de programación más utilizados en el mundo, especialmente en aplicaciones empresariales y desarrollo de Android.",
            },
            {
                fact: "El 'Hello, World!' es tradicionalmente el primer programa escrito cuando se aprende un nuevo lenguaje de programación.",
                detail: "El programa 'Hello, World!' es uno de los ejemplos más simples y conocidos en la programación. La tradición de utilizar 'Hello, World!' como el primer programa se popularizó con el libro 'The C Programming Language' de Brian Kernighan y Dennis Ritchie, publicado en 1978. Este programa es utilizado para introducir a los principiantes en la sintaxis básica de un lenguaje de programación y asegurar que el entorno de desarrollo está configurado correctamente. Aunque sencillo, 'Hello, World!' es una puerta de entrada para innumerables programadores que han aprendido nuevos lenguajes de programación y se ha convertido en un símbolo de la iniciación en el mundo del desarrollo de software.",
            },
            {
                fact: "El sistema operativo Unix, uno de los más influyentes en la historia de la informática, fue desarrollado en 1969 por Ken Thompson, Dennis Ritchie y otros en los Laboratorios Bell.",
                detail: "Unix fue creado como un sistema operativo de propósito general para servir como una herramienta de programación flexible y poderosa. Introdujo conceptos revolucionarios como la jerarquía de sistemas de archivos, la gestión de procesos y el uso de scripts de shell. Unix también implementó la filosofía de construir pequeñas utilidades que hacen una cosa bien y pueden ser combinadas para realizar tareas más complejas. Esta filosofía influyó profundamente en el diseño de muchos sistemas operativos posteriores, incluidos Linux y macOS. Además, Unix ha sido la base para el desarrollo de muchos lenguajes de programación y herramientas de software, y su legado perdura en la informática moderna.",
            },
            {
                fact: "El lenguaje de programación COBOL, creado en 1959, todavía se utiliza en muchas instituciones financieras y gubernamentales hoy en día.",
                detail: "COBOL, que significa 'Common Business-Oriented Language', fue desarrollado por un comité liderado por Grace Hopper para ser un lenguaje de programación orientado a los negocios que pudiera ejecutarse en diferentes máquinas. Diseñado para ser fácilmente legible por humanos, COBOL utiliza una sintaxis que se asemeja al inglés cotidiano. A pesar de su antigüedad, COBOL sigue siendo vital en la informática moderna, especialmente en sistemas financieros y gubernamentales que manejan grandes cantidades de transacciones diarias. Muchos bancos y agencias gubernamentales todavía confían en aplicaciones escritas en COBOL, lo que ha llevado a una demanda continua de programadores que conocen el lenguaje.",
            },
            {
                fact: "El primer software libre y de código abierto del mundo fue el sistema operativo Unix, que fue distribuido libremente a universidades y laboratorios de investigación.",
                detail: "El movimiento de software libre y de código abierto tiene sus raíces en la distribución temprana de Unix por los Laboratorios Bell. En la década de 1970, Unix fue compartido con universidades y centros de investigación bajo licencias que permitían su modificación y redistribución. Este modelo de colaboración abierta inspiró a futuros proyectos de software libre, como el sistema operativo GNU de Richard Stallman y el kernel de Linux de Linus Torvalds. El software libre promueve la libertad de usar, estudiar, modificar y compartir el software, y ha dado lugar a una vasta comunidad global que contribuye a proyectos de código abierto en todos los ámbitos de la informática.",
            },
            {
                fact: "Linus Torvalds, el creador del kernel de Linux, inicialmente llamó a su proyecto 'Freax'.",
                detail: "Cuando Linus Torvalds comenzó a desarrollar su propio kernel de sistema operativo en 1991, lo llamó 'Freax', una combinación de 'free', 'freak', y 'x' (para indicar su relación con Unix). Sin embargo, cuando Ari Lemmke, un administrador de FTP que ayudaba a Torvalds a distribuir su kernel, decidió subir el proyecto al servidor, lo renombró a 'Linux' sin consultar a Torvalds. Aunque Torvalds no estaba particularmente emocionado con el nombre al principio, terminó aceptándolo. Linux ha crecido desde un proyecto personal hasta convertirse en el kernel de código abierto más utilizado en el mundo, impulsando una vasta gama de dispositivos y sistemas, desde servidores y supercomputadoras hasta teléfonos móviles y dispositivos IoT.",
            },
        ];

        const RandomFunFact = () => {
            const randomIndex = Math.floor(
                Math.random() * codingFunFacts.length
            );
            funFact.value = codingFunFacts[randomIndex];
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
            }
        );

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
