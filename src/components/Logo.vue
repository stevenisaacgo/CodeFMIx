<template>
    <div class="ml-4 mt-2 mb-2 bg-none grid grid-cols-2 content-center ">
        <div class="size-8">
            <router-link to="/">
            <img class="bg-none" src="/img/logo.png" alt="Logo"/>
            </router-link>
        </div>
        <div class="ml-4 mt-1 text-sm ">
            <router-link to="/">
                <p>CodeFMIx</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LogoComponent",
        
        data() {
            // return {
            // }
        }
    };
</script>

<style>

</style>