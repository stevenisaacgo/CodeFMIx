<template>
    <nav class="flex justify-between py-2 px-8">
        <div class="flex md:flex justify-between items-center gap-8">
            <RouterLink to="/home">Inicio</RouterLink>

            <Menu
                as="div"
                class="relative inline-block text-left"
                @mouseleave="open = false"
            >
                <div>
                    <MenuButton
                        class="inline-flex w-full justify-center gap-x-1.5 bg-[#242424] px-3 py-2 font-semibold text-[#ffffffde] outline-none hover:border-0 active:border-0"
                        @mouseover="open = true"
                    >
                        Lenguajes
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
                        class="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-[#242424] focus:outline-none border-2"
                    >
                        <div class="py-1">
                            <MenuItem as="div" v-slot="{ active }">
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
                            <MenuItem as="div" v-slot="{ active }">
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
                            <MenuItem
                                as="div"
                                v-slot="{ active }"
                                class="relative"
                            >
                                <Menu
                                    as="div"
                                    class="relative inline-block text-left"
                                >
                                    <MenuButton
                                        class="inline-flex w-full justify-center gap-x-1.5 bg-[#242424] px-3 py-2 text-sm font-semibold text-[#ffffffde] outline-none hover:border-0 active:border-0"
                                    >
                                        JavaScript
                                        <ChevronDownIcon
                                            class="ml-2 h-5 w-5 text-gray-400 rotate-[270deg]"
                                            aria-hidden="true"
                                        />
                                    </MenuButton>
                                    <transition
                                        enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95"
                                    >
                                        <MenuItems
                                            class="absolute left-full top-0 z-10 w-56 origin-top-left bg-[#242424] focus:outline-none border-2"
                                        >
                                            <div class="py-1">
                                                <MenuItem
                                                    as="div"
                                                    v-slot="{ active }"
                                                >
                                                    <RouterLink
                                                        :class="[
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-[#ffffffde]',
                                                            'block px-4 py-2 text-sm',
                                                        ]"
                                                        to="/javascript?difficultyLevel=facil"
                                                        >Fácil</RouterLink
                                                    >
                                                </MenuItem>
                                                <MenuItem
                                                    as="div"
                                                    v-slot="{ active }"
                                                >
                                                    <RouterLink
                                                        :class="[
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-[#ffffffde]',
                                                            'block px-4 py-2 text-sm',
                                                        ]"
                                                        to="/javascript?difficultyLevel=normal"
                                                        >Medio</RouterLink
                                                    >
                                                </MenuItem>
                                                <MenuItem
                                                    as="div"
                                                    v-slot="{ active }"
                                                >
                                                    <RouterLink
                                                        :class="[
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-[#ffffffde]',
                                                            'block px-4 py-2 text-sm',
                                                        ]"
                                                        to="/javascript?difficultyLevel=dificil"
                                                        >Difícil</RouterLink
                                                    >
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </transition>
                                </Menu>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
            <RouterLink to="/credits">Créditos</RouterLink>
            <!-- ================== -->
            <div class="md:hidden"></div>
        </div>
    </nav>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue"; //@headlessui/vue is a library to build our dropdown menu
import { ChevronDownIcon } from "@heroicons/vue/20/solid"; //@heroicons/vue/20/solid this is a library for dropdown arrows from menu
import { RouterLink } from "vue-router"; // library that provides router functionality
</script>

<style scoped></style>
