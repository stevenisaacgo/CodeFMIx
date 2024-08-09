<template>
    <div class="min-h-screen flex flex-col">
        <Header />
        <main class=" flex-1">
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import Header from "./components/header/Header.vue";
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";

const route = useRoute();
const isInitialPage = route.path === "/";
</script>

<style>
</style>
