<template>
    <Header />
    <main class="main">
        <RouterView />
    </main>
</template>

<script setup>
import Header from "./components/header/Header.vue";
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";

const route = useRoute();
const isInitialPage = route.path === "/";
const headerHeight = "94px";
</script>

<style>
.main {
    height: calc(100vh - v-bind("headerHeight"));
}
</style>
