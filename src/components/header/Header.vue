<template>
    <header class="border-b-2 flex justify-between items-center py-2 w-full mx-auto min-h-[87px] px-8"
        v-if="username">
        <LogoComponent class="w-12" />
        <Navigation v-if="$route.path !== '/'" />
        <SoundButton />
    </header>
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
