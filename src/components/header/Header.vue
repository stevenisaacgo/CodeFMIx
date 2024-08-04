<template>
    <div class="border-b-[2px]">
        <header
            class="flex justify-between items-center py-[10px] w-[1280px] mx-auto min-h-[87px]"
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
const route = useRoute();

export default{
    components: {
        LogoComponent, Navigation, SoundButton
    }
}
</script>
