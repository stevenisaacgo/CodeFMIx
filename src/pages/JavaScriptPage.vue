<template>
    <div class="w-full grid grid-cols-2 h-full">
        <div class="border-r-[1px] h-full pt-10 text-left px-[30px]">
            <h2 class="mb-10">¿Qué es JavaScript?</h2>
            <div class="text-white work-sans flex flex-col gap-6">
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
        <div class="border-l-[1px] h-full pt-10">Pregunta</div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute(); //set up the questions level dificulty
</script>

<style></style>
