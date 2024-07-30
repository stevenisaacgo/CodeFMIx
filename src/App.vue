<template>
    <div class="min-h-[100vh]">
        <Header />
        <main class="main">
            <RouterView />
            <LogoComponent class="w-[50px]" />
        </main>
    </div>
</template>

<script setup>
import Header from "./components/header/Header.vue";
import { RouterView } from "vue-router";
import LogoComponent from "./components/Logo.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isInitialPage = route.path === "/";
const headerAndGapHeight = isInitialPage ? "149px" : "89px";
</script>

<style>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
.main {
    height: calc(100vh - v-bind("headerAndGapHeight"));
}
</style>
