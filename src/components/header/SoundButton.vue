<template>
    <div>
        <img
            class="w-[42px] text-[#dbdbdb]"
            :src="iconUrl"
            @click="handleClick"
        />
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

const playSound = () => {
    soundMusic.value.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
    });
};

onMounted(() => {
    soundMusic.value = document.querySelector("audio");
    // Attempt to play the audio on mount
    playSound();
    // Ensure playback starts after the first user interaction
    document.addEventListener("click", playSound, { once: true });
});
</script>