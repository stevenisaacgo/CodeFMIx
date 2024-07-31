<template>
    <div class=" ">
        <p class="mt-10">CONSOLA</p>

        <div class="bg-black text-white p-6 rounded-lg w-full justify-self-center max-w-lg font-mono text-left justify-cente">

                <div class="flex space-x-2 text-red-500">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p class="text-green-400 mt-4">$ npm install CodeFMIx</p>
        
            <p class="text-white mt-2"> asdf {{ message }}</p>

            <p class="text-green-400 mt-2">$</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ConsoleComponent",

    data() {
        // return {
        // }
    },
};
</script>

<style>

</style>