<script setup>

import profile from "../../data/profile";

</script>

<template>

<section 
id="about"
class="about"
>

<div class="container">

<div class="about-grid">

<div>

<h2 class="section-title">

Tentang Saya

</h2>

<p class="about-text">

{{ profile.about.description }}

</p>

</div>

<div class="about-card card">

<div>

<h3>🎓 Fresh Graduate</h3>

<p>Informatika</p>

</div>

<div>

<h3>💻 Fokus</h3>

<p>Web Backend & Full Stack</p>

</div>

<div>

<h3>🚀 Deployment</h3>

<p>Railway & Vercel</p>

</div>

</div>

</div>

</div>

</section>

</template>

<style scoped>

.about-grid{

display:grid;

grid-template-columns:2fr 1fr;

gap:50px;

align-items:center;

}

.about-text{

line-height:1.9;

font-size:17px;

color:var(--text-light);

}

.about-card{

display:flex;

flex-direction:column;

gap:25px;

}

.about-card h3{

margin-bottom:5px;

}

@media(max-width:900px){

.about-grid{

grid-template-columns:1fr;

}

}

</style>