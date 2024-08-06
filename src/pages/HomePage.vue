<template>
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
         
        </div>
      </div>
      <div class="border-l-[1px] h-full pt-10 h">
        <div class="h-[60%]">
          <p>Pregunta:</p>
          <div class="text-white work-sans  px-8 pt-8">
            <div class="question">
            <h2 class="text-2xl font-bold mb-4">Cómo insertar un comentario que tiene más de una línea?</h2>
            </div>
            <div>
              <!-- @change="checkAnswer" para los radio porque se activa cuando se selecciona uno -->
              <input type="radio" name="answer" value="answer_a" v-model="selectedAnswer" @change="checkAnswer" />
              <label>/*Este comentario tiene más de una línea.*/</label>
            </div>
            <div>
              <input type="radio" name="answer" value="answer_b" v-model="selectedAnswer" @change="checkAnswer"/>
              <label> &lt;!--Este comentario tiene más de una línea.--&gt;</label>
            </div>
            <div>
              <input type="radio" name="answer" value="answer_c" v-model="selectedAnswer" @change="checkAnswer" />
              <label> //Este comentario tiene más de una línea.//</label>
            </div>


          </div>
        </div>

        <div class=" border-t-[1px]">
          <!-- <ConsoleComponent /> -->
          <div class="console-container">
        <p class="mt-10 mb-4">CONSOLA</p>

        <div class="console bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono text-left justify-center">

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
      message: "",
      selectedAnswer: "",
      correctAnswer: "answer_a",
  };
},
methods: {
    checkAnswer() {
      if (this.selectedAnswer === this.correctAnswer) {
        this.message = "¡Correcto! El siguiente paso será escoger categoría y nivel, ¡Tú puedes!";
      } else {
        this.message = "No te preocupes, poco a poco aprenderás, vuelve a internarlo.";
      }
    }
  }
};
import { useRoute } from "vue-router";

</script>

<style>
.console {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>