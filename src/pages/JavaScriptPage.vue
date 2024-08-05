<template>
    <div class="w-full grid grid-cols-2 h-full">
        <div class="border-r-[1px] h-full pt-10 text-left px-[30px]">
            <h2 class="mb-10">What is JavaScript?</h2>
            <div class="text-white work-sans flex flex-col gap-6">
                <p>
                    Welcome to The Origins III: JavaScript! Things are about to
                    get fun. ✨
                </p>
                <p>
                    The programming language we're learning is called JavaScript
                    and it powers 97.5% of websites today.
                </p>
                <p>
                    HTML Logo HTML + Html Logo CSS + Html Logo JavaScript = core
                    languages of the web.
                </p>
                <p>
                    HTML and CSS give a website structure and styling, but
                    JavaScript makes it interactive and come alive. It lets us
                    add basic functionality and dynamic behaviors to our web
                    pages.
                </p>
                <p>But how did it come to be?</p>
                <p>
                    The 90s was the dawn of the dot-com era, and an internet
                    browser war was brewing between Netscape and Microsoft. In
                    1995, a Netscape developer created a buggy new scripting
                    language... in just 10 days. 😵‍💫
                </p>
                <p>
                    This was the beginning of JavaScript. It came out of
                    necessity because HTML/CSS could not add dynamic features.
                </p>
            </div>
        </div>
        <div class="border-l-[1px] h-full pt-10 h">
            <div class="h-[60%]">
                <p>Question</p>
                <QuizComponent :category="'javascript'" :difficulty="'facil'" />
            </div>

            <div class=" border-t-[1px]">
                <ConsoleComponent />
            </div>
        </div>

    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import ConsoleComponent from "../components/Console.vue";
import QuizComponent from "../components/QuizComponent.vue";

</script>

<style></style>
