<template>
    <div class="min-h-[100vh]">
        <Header />
        <main class="main">
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import Header from "./components/header/Header.vue";
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
import { useApiStore } from ".stores/apiStore.js"

const route = useRoute();
const isInitialPage = route.path === "/";
const headerAndGapHeight = isInitialPage ? "149px" : "89px";
</script>

<style>
.main {
    height: calc(100vh - v-bind("headerAndGapHeight"));
}
</style>
