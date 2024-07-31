<template>
    <div class="w-full overflow-hidden flex items-center justify-center relative">
      <img class="w-full" src="../assets/Tumblr.gif" />
      <div class="absolute inset-0 flex items-center justify-center">
        <StartBtn />
      </div>
    </div>
  </template>
  

  <script>

  /* audio */
  <audio id="arcadeMusic" src="assets/music/arcade-music.mp3" autoplay loop></audio>
 
 
 
 
  import StartBtn from '../components/StartBtn.vue';
  
  export default {
    components: {
      StartBtn
    }
  };
  </script>
  