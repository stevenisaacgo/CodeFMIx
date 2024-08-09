<template>
    <div
      class="w-full h-screen overflow-hidden flex items-center justify-center relative bg-gray-900"
    >
      <img class="w-full h-auto object-cover" src="../assets/Tumblr.gif" alt="Background Animation" />
      <div class="absolute inset-0 flex items-center justify-center">
        <StartBtn />
      </div>
    </div>
  </template>
  
  <script>
  import StartBtn from "../components/StartBtn.vue";
  
  export default {
    components: {
      StartBtn,
    },
  };
  </script>
  