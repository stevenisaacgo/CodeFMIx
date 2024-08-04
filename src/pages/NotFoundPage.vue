<template>
    <div class="w-[100%] overflow-hidden">
        <h2>Ups, parece que esta página no existe.</h2>
        <p>
            Click <RouterLink to="/home">aquí</RouterLink> para volver a la
            página de inicio.
        </p>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
