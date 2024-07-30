<template>
    <div :class="tailwindClass">
      <img :src="gifUrl" alt="GIF dinámico" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      gifUrl: String,
      tailwindClass: String
    }
  };
  </script>
  