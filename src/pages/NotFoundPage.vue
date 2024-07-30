<template>
    <div class="w-[100%] overflow-hidden">
        <h2>Oops it looks like this page does not exist.</h2>
        <p>
            Click <RouterLink to="/home">here</RouterLink> to go back to the
            Home page.
        </p>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
