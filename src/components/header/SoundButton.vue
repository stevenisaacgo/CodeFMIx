<template>
    <img class="w-[42px]" :src="iconUrl" @click="handleClick" />

    
  <audio ref="soundMusic" src="../../assets/music/sound.mp3" autoplay loop></audio>
 
</template>

<script setup>
import { MusicNoteIcon } from "@vue-hero-icons/outline";
import { ref, onMounted } from "vue";

const urlSpeaker = "/src/assets/speaker.png";
const urlMute = "/src/assets/muted.png";
const isMuted = ref(false);
const iconUrl = ref(urlSpeaker);
const soundMusic = ref(null);//Inicialmente es null y se asigna al elemento audio dentro de onMounted

const handleClick = () => {
    isMuted.value = !isMuted.value;
    iconUrl.value = isMuted.value ? urlMute : urlSpeaker;
   
   
    if (soundMusic.value) { //miramos que no sea null
      if (isMuted.value) { // si le da a mutear, se  pondrá en pausa
        soundMusic.value.pause();
      } else {
        soundMusic.value.play();
      }
    }
};

onMounted(() => {
  soundMusic.value = document.querySelector("audio");
  if (!isMuted.value && soundMusic.value) { //si no está muteado y tiene valor
    soundMusic.value.play();
  } 
});

</script>


<style>
</style>