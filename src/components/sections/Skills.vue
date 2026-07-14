<script setup>

import profile from "../../data/profile";

</script>

<template>

<section id="skills">

<div class="container">

<h2 class="section-title">

Tech Stack

</h2>

<div class="grid">

<div

class="card"

v-for="skill in profile.skills"

:key="skill.title"

>

<h3>

{{ skill.title }}

</h3>

<div class="tags">

<span

v-for="item in skill.items"

:key="item"

>

{{ item }}

</span>

</div>

</div>

</div>

</div>

</section>

</template>

<style scoped>

.grid{

display:grid;

grid-template-columns:

repeat(auto-fit,minmax(250px,1fr));

gap:25px;

}

.tags{

display:flex;

flex-wrap:wrap;

gap:10px;

margin-top:20px;

}

.tags span{

background:rgba(37,99,235,.1);

color:var(--primary);

padding:8px 15px;

border-radius:999px;

font-size:.9rem;

font-weight:600;

}

</style>