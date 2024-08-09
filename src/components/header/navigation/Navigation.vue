<template>
    <nav class="flex justify-between py-2 px-8">
        <div class="flex justify-between items-center gap-8">
            <RouterLink to="/home">Inicio</RouterLink>

            <Menu as="div" class="relative" @mouseleave="open = false">
                <MenuButton class="flex items-center gap-x-1.5 bg-[#242424] px-3 py-2 font-semibold outline-none"
                    @mouseover="open = true">
                    Lenguajes
                    <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                </MenuButton>

                <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="absolute right-0 mt-2 w-56 origin-top-right bg-[#242424] border-2 z-10">
                        <div class="py-1">
                            <LanguageMenu language="C++" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="CSharp" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="CSS" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="HTML" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="Java" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="JavaScript" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="Kotlin" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="PHP" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="Python" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="SQL" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="Swift" :levels="['facil', 'normal', 'dificil']" />
                            <LanguageMenu language="TypeScript" :levels="['facil', 'normal', 'dificil']" />
                        </div>
                    </MenuItems>
                </transition>
            </Menu>

            <RouterLink to="/credits">Créditos</RouterLink>
            <span class="text-sm">Puntuación: {{ score }} pts</span>
        </div>
    </nav>
</template>

<script setup>
import { useQuizStore } from "../../../stores/index";
import { Menu, MenuButton, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { RouterLink } from "vue-router";
import { computed } from "vue";
import LanguageMenu from "../navigation/LanguageMenu.vue"; // LanguageMenu es un componente reutilizable para cada menú de lenguajes

const quizStore = useQuizStore();
const score = computed(() => quizStore.score);
</script>