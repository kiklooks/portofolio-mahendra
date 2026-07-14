<script setup>

import { Moon, Sun } from "lucide-vue-next";

import { useTheme } from "../../composables/useTheme";

const {

    theme,

    toggleTheme

} = useTheme();

</script>

<template>

<button
class="theme-btn"
@click="toggleTheme">

    <Sun
        v-if="theme==='light'"
        :size="20"/>

    <Moon
        v-else
        :size="20"/>

</button>

</template>

<style scoped>

.theme-btn{

width:46px;

height:46px;

border:none;

cursor:pointer;

border-radius:50%;

background:var(--surface);

color:var(--text);

display:flex;

align-items:center;

justify-content:center;

box-shadow:var(--shadow);

transition:.3s;

}

.theme-btn:hover{

transform:rotate(15deg);

}

</style>