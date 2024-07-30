<template>
    <div class="w-full grid grid-cols-2 h-full">
        <div class="border-r-[1px] h-full pt-10">Info</div>
        <div class="border-l-[1px] h-full pt-10">Question</div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>
