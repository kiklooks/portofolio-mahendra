<script setup>

import { ref } from "vue";

import {

    Menu,

    X

} from "lucide-vue-next";

import ThemeToggle from "../common/ThemeToggle.vue";

import { useScrollSpy } from "../../composables/useScrollSpy";

const open = ref(false);

const { activeSection } = useScrollSpy();

const menus = [

    {
        label:"About",
        id:"about"
    },

    {
        label:"Skills",
        id:"skills"
    },

    {
        label:"Experience",
        id:"experience"
    },

    {
        label:"Projects",
        id:"projects"
    },

    {
        label:"Github",
        id:"github"
    },

    {
        label:"Contact",
        id:"contact"
    }

]

function closeMenu(){

    open.value=false;

}
</script>

<template>

<header>

<div class="container nav">

<div class="logo">

Portofolio

</div>

<nav>

<a

v-for="menu in menus"

:key="menu.id"

:href="'#'+menu.id"

:class="{ active: activeSection===menu.id }"

>

{{menu.label}}

</a>

</nav>

<div class="actions">

<ThemeToggle/>

<button

class="mobile-btn"

@click="open=!open"

>

<Menu

v-if="!open"

:size="24"

/>

<X

v-else

:size="24"

/>

</button>

</div>

</div>

<div

class="mobile"

:class="{show:open}"

>

<a

v-for="menu in menus"

:key="menu.id"

:href="'#'+menu.id"

@click="closeMenu"

>

{{menu.label}}

</a>

</div>

</header>

</template>

<style scoped>

header{

position:fixed;

top:0;

left:0;

width:100%;

z-index:999;

backdrop-filter:blur(18px);

background:rgba(255,255,255,.65);

border-bottom:1px solid rgba(255,255,255,.2);

}

[data-theme="dark"] header{

background:rgba(15,23,42,.75);

}

.nav{

height:78px;

display:flex;

align-items:center;

justify-content:space-between;

}

.logo{

font-size:1.3rem;

font-weight:800;

color:var(--primary);

}

nav{

display:flex;

gap:32px;

}

nav a{

text-decoration:none;

color:var(--text);

font-weight:500;

transition:.3s;

position:relative;

}

nav a:hover{

color:var(--primary);

}

nav a::after{

content:"";

position:absolute;

left:0;

bottom:-6px;

width:0;

height:2px;

background:var(--primary);

transition:.3s;

}

nav a:hover::after{

width:100%;

}

@media(max-width:900px){

nav{

display:none;

}

}

.actions{

display:flex;

align-items:center;

gap:15px;

}

.mobile-btn{

display:none;

background:none;

border:none;

cursor:pointer;

color:var(--text);

}

.active{

color:var(--primary);

}

.active::after{

width:100%;

}

.mobile{

display:none;

}

@media(max-width:900px){

nav{

display:none;

}

.mobile-btn{

display:flex;

}

.mobile{

position:absolute;

top:78px;

left:0;

width:100%;

display:flex;

flex-direction:column;

padding:25px;

background:var(--surface);

border-top:1px solid var(--border);

max-height:0;

overflow:hidden;

transition:max-height .35s ease;

z-index:998;

}

.mobile.show{

max-height:100vh;

}

.mobile a{

padding:15px 0;

text-decoration:none;

color:var(--text);

font-weight:500;

}

}

</style>