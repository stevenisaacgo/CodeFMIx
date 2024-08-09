<template>
    <div class="w-full h-[100%] flex flex-col md:flex-row">
      <div class="md:border-r-[1px] h-full pt-4 md:pt-10 text-left flex-grow md:flex-1">
        <FunFact />
      </div>
  
      <div class="md:border-l-[1px] h-full flex flex-col flex-grow md:flex-1">
        <div v-if="!quizCompleted" class="px-4 md:px-8 pb-4 md:mt-10 w-full">
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
  import FunFact from "../components/FunFact.vue";
  import ConsoleComponent from "../components/Console.vue";
  import QuizComponent from "../components/QuizComponent.vue";
  import { useRoute } from "vue-router";
  import { onMounted } from "vue";
  
  export default {
    components: {
      FunFact,
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
        }
      );
  
      quizStore.loadQuestions(category.value, level.value);
  
      return {
        category,
        level,
        quizCompleted,
      };
    },
  };
  </script>
  