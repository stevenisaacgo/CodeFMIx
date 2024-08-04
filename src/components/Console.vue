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

            <p class="text-green-400 mt-2">$</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConsoleComponent",

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
            ],
            };
  },

  
  methods: {
    getRandomResponse(isCorrect) {
      const responses = isCorrect ? this.correctResponses : this.incorrectResponses; // guardamos en responses si ha sido correcta o no
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
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