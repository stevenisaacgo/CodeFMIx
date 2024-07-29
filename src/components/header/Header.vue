<template>
    <header
        class="flex justify-between items-center py-[25px] w-[1280px] mx-auto"
    >
        <div>CodeFMIx</div>
        <nav v-if="route.path !== '/'" class="flex justify-between py-2 px-8">
            <div class="flex md:flex justify-between items-center gap-8">
                <div>finally ?</div>
                <RouterLink to="/">Home</RouterLink>

                <Menu as="div" class="relative inline-block text-left">
                    <div>
                        <MenuButton
                            class="inline-flex w-full justify-center gap-x-1.5 bg-[#242424] px-3 py-2 text-sm font-semibold text-[#ffffffde] outline-none hover:border-0 active:border-0"
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
                            class="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-[#242424] focus:outline-none"
                        >
                            <div class="py-1">
                                <MenuItem as="a" v-slot="{ active }">
                                    <RouterLink
                                        :class="[
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-[#ffffffde]',
                                            'block px-4 py-2 text-sm',
                                        ]"
                                        to="/html"
                                        >HTML</RouterLink
                                    >
                                </MenuItem>
                                <MenuItem as="a" v-slot="{ active }">
                                    <RouterLink
                                        :class="[
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-[#ffffffde]',
                                            'block px-4 py-2 text-sm',
                                        ]"
                                        to="/css"
                                        >CSS</RouterLink
                                    >
                                </MenuItem>
                                <MenuItem as="a" v-slot="{ active }">
                                    <RouterLink
                                        :class="[
                                            active
                                                ? 'bg-gray-100 text-gray-900'
                                                : 'text-[#ffffffde]',
                                            'block px-4 py-2 text-sm',
                                        ]"
                                        to="/javascript"
                                        >JavaScript</RouterLink
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
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>
<style></style>
