<template>
    <div class="border-b-[2px]">
        <header
            class="flex justify-between items-center py-[10px] w-[1280px] mx-auto min-h-[87px]"
        >
            
            <Navigation v-if="route.path !== '/'" />
            <div class="text-3xl">
                
            </div>
        </header>
    </div>
</template>

<script setup>
import Navigation from "./navigation/Navigation.vue";

import { useRoute } from "vue-router";
const route = useRoute();
</script>
