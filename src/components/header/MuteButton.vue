<template>
    <img :src="iconUrl" @click="handleClick" />
</template>

<script setup>
import { ref } from "vue";

const urlSpeaker = "/src/assets/speaker.png";
const urlMute = "/src/assets/muted.png";
const isMuted = ref(false);
const iconUrl = ref(urlSpeaker);

const handleClick = () => {
    isMuted.value = !isMuted.value;
    iconUrl.value = isMuted.value ? urlMute : urlSpeaker;
};
</script>
