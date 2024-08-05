<template>
  <div class="w-full overflow-hidden flex items-center justify-center relative">
    <img class="w-full" src="../assets/Tumblr.gif" />
    <div class="absolute inset-0 flex items-center justify-center">
      <StartBtn />
    </div>
  </div>
</template>

<script >

import StartBtn from '../components/StartBtn.vue';

export default {
  components: {
    StartBtn
  }
};
</script>
  