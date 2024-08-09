<template>
    <Menu as="div" class="relative">
        <MenuButton
            class="flex justify-between w-full gap-x-1.5 bg-[#242424] px-3 py-2 text-sm font-semibold outline-none hover:bg-white hover:text-[#242424]">
            {{ language }}
            <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400 rotate-[-90deg]" aria-hidden="true" />
        </MenuButton>

        <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="absolute left-full top-0 z-10 w-56 origin-top-left bg-[#242424] focus:outline-none border-2">
                <div class="py-1">
                    <MenuItem v-for="level in levels" :key="level" as="div" v-slot="{ active }">
                    <RouterLink :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-[#ffffffde]',
                        'block px-4 py-2 text-sm',
                    ]" :to="{
                    path: '/gamepage',
                    query: { categoria: language.toLowerCase(), level },
                }">
                        >{{ level.charAt(0).toUpperCase() + level.slice(1) }}
                    </RouterLink>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

defineProps({
  language: {
    type: String,
    required: true,
  },
  levels: {
    type: Array,
    required: true,
  },
});
</script>