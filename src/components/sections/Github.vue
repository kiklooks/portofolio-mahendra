<script setup>

import profile from "../../data/profile"

import {

    Github,

    ArrowUpRight

} from "lucide-vue-next"

</script>

<template>

<section id="github">

<div class="container">

<div class="github card">

<div class="left">

<Github

:size="60"

class="icon"

/>

<h2>

GitHub

</h2>

<p>

Seluruh source code project dapat dilihat melalui GitHub.

</p>

<a

:href="profile.github.profile"

target="_blank"

class="btn btn-primary"

>

Visit GitHub

<ArrowUpRight :size="18"/>

</a>

</div>

<div class="right">

<div

class="stat"

v-for="item in profile.github.stats"

:key="item.title"

>

<h2>

{{ item.value }}

</h2>

<p>

{{ item.title }}

</p>

</div>

</div>

</div>

</div>

</section>

</template>

<style scoped>

.github{

display:grid;

grid-template-columns:1fr 1fr;

gap:60px;

padding:60px;

align-items:center;

}

.left{

display:flex;

flex-direction:column;

gap:20px;

}

.icon{

color:var(--primary);

}

.right{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:20px;

}

.stat{

background:var(--bg);

padding:30px;

border-radius:20px;

text-align:center;

}

.stat h2{

color:var(--primary);

font-size:2rem;

margin-bottom:10px;

}

@media(max-width:900px){

.github{

grid-template-columns:1fr;

}

.right{

grid-template-columns:1fr;

}

}

</style>