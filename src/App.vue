<template>
  <div >
   <LogoComponent class="w-[50px]" />
  </div>

</template>

<script>
import LogoComponent from './components/Logo.vue';

export default {
  name: 'App',
  components: {
    LogoComponent
  }
};
</script>



<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
