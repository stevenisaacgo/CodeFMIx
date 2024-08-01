<template>
    <img class="w-[42px]" :src="iconUrl" @click="handleClick" />

    /* falta poner un audio */
  <audio id="arcadeMusic" src="assets/music/arcade-music.mp3" autoplay loop></audio>
 
</template>

<script setup>
import { ref, onMounted } from "vue";

const urlSpeaker = "/src/assets/speaker.png";
const urlMute = "/src/assets/muted.png";
const isMuted = ref(false);
const iconUrl = ref(urlSpeaker);

const handleClick = () => {
    isMuted.value = !isMuted.value;
    iconUrl.value = isMuted.value ? urlMute : urlSpeaker;

};

onMounted(() => {
  const arcadeMusic = document.getElementById('arcadeMusic');
  arcadeMusic.muted = isMuted.value;
});
</script>
