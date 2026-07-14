<script setup>

import profile from "../../data/profile"

import {

Mail,

Github,

Linkedin,

Phone

} from "lucide-vue-next"

const icons={

Email:Mail,

GitHub:Github,

LinkedIn:Linkedin,

WhatsApp:Phone

}

</script>

<template>

<section id="contact">

<div class="container">

<h2 class="section-title">

Let's Connect

</h2>

<p class="section-subtitle">

Terbuka untuk peluang kerja, kolaborasi maupun diskusi.

</p>

<div class="grid">

<a

v-for="item in profile.contact"

:key="item.title"

:href="item.link"

target="_blank"

class="card contact"

>

<component

:is="icons[item.title]"

:size="28"

/>

<div>

<h3>

{{ item.title }}

</h3>

<p>

{{ item.value }}

</p>

</div>

</a>

</div>

</div>

</section>

</template>

<style scoped>

.grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

gap:25px;

}

.contact{

display:flex;

gap:20px;

align-items:center;

text-decoration:none;

color:inherit;

}

.contact svg{

color:var(--primary);

}

.contact p{

margin-top:6px;

color:var(--text-light);

}

</style>