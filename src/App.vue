<script setup>
import Layout from "./components/layout/Layout.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
</script>

<template>
    <div class="min-h-[100vh]">
        <header class="flex justify-between items-center py-[25px]">
            <div>CodeFMIx</div>
            <nav class="flex justify-between py-2 px-8">
                <div class="flex md:flex justify-between items-center gap-8">
                    <div><a class="text-black" href="#">HOME</a></div>
                    <!-- ================== -->
                    <Menu as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton
                                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Practice
                                <ChevronDownIcon
                                    class="-mr-1 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </MenuButton>
                        </div>

                        <transition
                            enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95"
                        >
                            <MenuItems
                                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <div class="py-1">
                                    <MenuItem v-slot="{ active }">
                                        <a
                                            href="#"
                                            :class="[
                                                active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm',
                                            ]"
                                            >HTML</a
                                        >
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <a
                                            href="#"
                                            :class="[
                                                active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm',
                                            ]"
                                            >CSS</a
                                        >
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <a
                                            href="#"
                                            :class="[
                                                active
                                                    ? 'bg-gray-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm',
                                            ]"
                                            >JavaScript</a
                                        >
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>

                    <!-- ================== -->
                    <div class="md:hidden"></div>
                </div>
            </nav>
            <div class="text-3xl">
                <i>M</i>
            </div>
        </header>
    </div>
</template>

<style scoped>
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
</style>
