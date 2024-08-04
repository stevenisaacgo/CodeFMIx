<template>
    <div>
        <img class="w-[42px]" :src="iconUrl" @click="handleClick" />
        <audio ref="soundMusic" src="/src/assets/music/sound.mp3" loop></audio>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const urlSpeaker = "/src/assets/speaker.png";
const urlMute = "/src/assets/muted.png";
const isMuted = ref(false);
const iconUrl = ref(urlSpeaker);
const soundMusic = ref(null);

const handleClick = () => {
    isMuted.value = !isMuted.value;
    iconUrl.value = isMuted.value ? urlMute : urlSpeaker;

    if (isMuted.value) {
        soundMusic.value.pause();
    } else {
        soundMusic.value.play();
    }
};

onMounted(() => {
    soundMusic.value = document.querySelector("audio");
    // Start playing the audio automatically on mount
    soundMusic.value.play();
});
</script>

<style scoped></style>
