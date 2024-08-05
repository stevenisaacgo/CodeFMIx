<template>
    <div class="w-full overflow-hidden flex items-center justify-center relative">
      <img class="w-full" src="/img/imgPagePrincipal.jpeg" />
      <div class="absolute inset-0 flex items-center justify-center">
        
      </div>
    </div>
<div>
  <div class="w-full grid grid-cols-2 h-full">
        <div class="border-r-[1px] h-full pt-10 text-left">
            <h2 class="px-8">¿Quieres aprender jugando?</h2>
            <div class="text-white work-sans flex flex-col gap-6 px-8">
                <p>
                    Bienvenidos a CodeFMIx. La cosa va a
                    ponerse divertida. ✨
                </p>
            </div>
            <div class="">
                <div class="px-8 pt-18 mt-10 w-[100%]">
                    <h3>Instrucciones:</h3>
                </div>
                <div class="text-white work-sans flex flex-col gap-6 px-8 pt-8">
                    <p>
                        En este juego, hay algunas preguntas, con diferentes
                        respuestas y tendrás que seleccionar la correcta para
                        avanzar. Pulsa el botón de inicio y ¡Diviértete!
                    </p>
                    <p>Aquí tienes una pequeña demostración para aprender a jugar:</p>
                </div>
                <div>
                  <div class="px-8 pt-18 mt-10 w-[100%]">
                    <h3>Pregunta:</h3>
                </div>
                  <p>aslkdjfñasdf</p>
                </div>
            </div>
        </div>
        <div class="border-l-[1px] h-full pt-10 h">
            <div class="h-[60%]">
                <p>Posibles respuestas:</p>
                <QuizComponent :category="'javascript'" :difficulty="'facil'" />
            </div>

            <div class=" border-t-[1px]">
                <ConsoleComponent />
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
  import { useRoute } from "vue-router";
  import ConsoleComponent from "../components/Console.vue";
  import QuizComponent from "../components/QuizComponent.vue";
</script>