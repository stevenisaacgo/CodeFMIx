<template>
  <div class="console-container">
    <p class="mt-10">CONSOLA</p>

    <div class="console bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono text-left justify-center">
      <div class="flex space-x-2 text-red-500">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <p class="text-green-400 mt-4">$ npm install CodeFMIx</p>

      <p class="text-white mt-2">{{ message }}</p>
      <p>{{ isCorrect }}</p>

      <p class="text-green-400 mt-2">$</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsoleComponent",
  props: {
    isCorrect: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  mounted() {    const isCorrect = true;

    this.message = this.getRandomResponse(isCorrect);

  data() {
    return {
      message: "",
      correctResponses: [
        "¡Bien hecho!",
        "Crack!",
        "¡Correcto!",
        "¡Menuda racha!"
      ],
      incorrectResponses: [
        "Respuesta incorrecta.",
        "Inténtalo de nuevo.",
        "Prueba de nuevo, ¡tú puedes!",
        "Fallaste, ¡prueba otra vez!"
      ]
    };

  },
  watch: {
    isCorrect(newVal) {
      const responses = newVal ? this.correctResponses : this.incorrectResponses;
      const randomIndex = Math.floor(Math.random() * responses.length);
      this.message = responses[randomIndex];
    }
  }
};
</script>

<style scoped>
.console {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
