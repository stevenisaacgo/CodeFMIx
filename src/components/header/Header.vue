<template>
    <div class="border-b-[2px] text-[#dbdbdb]">
        <header
            class="flex justify-between items-center py-[10px] w-[1280px] mx-auto min-h-[87px]"
            v-if="username"
        >
            <LogoComponent class="w-[50px]" />
            <Navigation v-if="this.$route !== '/'" />
            <SoundButton />
        </header>
    </div>
</template>

<script>
import Navigation from "./navigation/Navigation.vue";
import LogoComponent from "../Logo.vue";
import { useRoute } from "vue-router";
import SoundButton from "./SoundButton.vue";
import { useQuizStore } from "../../stores/index";
import { computed } from "vue";
const route = useRoute();

export default {
    components: {
        LogoComponent, Navigation, SoundButton
    },
    setup() {
        const quizStore = useQuizStore();
        const username = computed(() => quizStore.username);
        return {
            username
        }
    }
}
</script>
