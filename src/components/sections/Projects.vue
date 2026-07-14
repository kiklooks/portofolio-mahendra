<script setup>

import profile from "../../data/profile"

import ProjectCard from "../common/ProjectCard.vue"

</script>

<template>

<section id="projects">

<div class="container">

<h2 class="section-title">

Featured Projects

</h2>

<p class="section-subtitle">

Beberapa project yang pernah saya kerjakan.

</p>

<div class="grid">

<ProjectCard

v-for="project in profile.projects"

:key="project.title"

:project="project"

/>

</div>

</div>

</section>

</template>

<style scoped>

.grid{

display:grid;

grid-template-columns:

repeat(auto-fit,minmax(400px,1fr));

gap:35px;

margin-top:60px;

}

@media(max-width:768px){

.grid{

grid-template-columns:1fr;

}

}

</style>