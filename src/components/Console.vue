<template>
    <div class="console-container border-t-[1px]">
      <p class="mt-10 pb-8 text-white">CONSOLA</p>
      <div class="console bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono text-left justify-center">
        <div class="flex space-x-2 text-red-500">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p class="text-green-400 mt-4">$ npm install CodeFMIx</p>
        <p class="text-white mt-2" v-html="formattedMessage"></p>
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
  
      const correctResponses = computed(() => [
        `¡Bien hecho, <span class="text-green-400">${username.value}</span>! Has compilado esa respuesta perfectamente.`,
        `¡Increíble, <span class="text-green-400">${username.value}</span>! ¡Tu código es impecable!`,
        `¡Correcto, <span class="text-green-400">${username.value}</span>! ¡Eres el debugger definitivo!`,
        `¡Menuda racha, <span class="text-green-400">${username.value}</span>! Estás en modo God de programación.`,
        `¡Bien hecho, <span class="text-green-400">${username.value}</span>! ¡Eres todo un programador ninja!`,
        `¡Bravo, <span class="text-green-400">${username.value}</span>! ¡Respuesta sin bugs!`,
        `¡Exactamente, <span class="text-green-400">${username.value}</span>! ¡Tu lógica es infalible!`,
        `¡Gran trabajo, <span class="text-green-400">${username.value}</span>! ¡Tu código está en producción!`,
        `¡Lo lograste, <span class="text-green-400">${username.value}</span>! ¡Eres el hacker de las respuestas!`,
        `¡Acertaste, <span class="text-green-400">${username.value}</span>! ¡Compilación exitosa!`,
      ]);
  
      const incorrectResponses = computed(() => [
        `Respuesta incorrecta, <span class="text-green-400">${username.value}</span>. ¡Revisa tus variables y vuelve a intentar!`,
        `No es correcto, <span class="text-green-400">${username.value}</span>. ¡Sigue depurando!`,
        `Fallaste, <span class="text-green-400">${username.value}</span>. ¡Pero hasta los mejores debuggean!`,
        `Incorrecto, <span class="text-green-400">${username.value}</span>. ¡No te rindas, el siguiente commit será mejor!`,
        `Casi, <span class="text-green-400">${username.value}</span>. ¡Revisa tu lógica y prueba de nuevo!`,
        `No te preocupes, <span class="text-green-400">${username.value}</span>. ¡Hasta los mejores encuentran bugs!`,
        `¡Ánimo, <span class="text-green-400">${username.value}</span>! ¡Refactoriza e intenta otra vez!`,
        `No fue la correcta, <span class="text-green-400">${username.value}</span>. ¡Tu código merece una segunda oportunidad!`,
        `Sigue adelante, <span class="text-green-400">${username.value}</span>. ¡El próximo commit será el correcto!`,
        `No es la correcta, <span class="text-green-400">${username.value}</span>. ¡Pero cada bug es una lección!`,
      ]);
  
      const typeWriterEffect = (text) => {
        let index = 0;
        const speed = 20;
  
        const type = () => {
          if (index < text.length) {
            message.value += text.charAt(index);
            index++;
            setTimeout(type, speed);
          }
        };
        type();
      };
  
      const formattedMessage = computed(() => message.value);
  
      watch(correctAnswer, (newValue) => {
        if (newValue !== null) {
          const responses = newValue ? correctResponses.value : incorrectResponses.value;
          const randomIndex = Math.floor(Math.random() * responses.length);
          const responseText = responses[randomIndex];
          message.value = "";
          typeWriterEffect(responseText);
        } else {
          message.value = "";
        }
      });
  
      return {
        formattedMessage,
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
  