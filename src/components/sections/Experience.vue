<script setup>

import profile from "../../data/profile";

</script>

<template>

<section id="experience">

<div class="container">

<h2 class="section-title">

Experience

</h2>

<div class="timeline">

<div

class="item"

v-for="exp in profile.experience"

:key="exp.title"

>

<div class="dot"></div>

<div class="card content">

<p class="year">

{{ exp.year }}

</p>

<h3>

{{ exp.title }}

</h3>

<h4>

{{ exp.company }}

</h4>

<ul>

<li

v-for="desc in exp.description"

:key="desc"

>

{{ desc }}

</li>

</ul>

</div>

</div>

</div>

</div>

</section>

</template>

<style scoped>

.timeline{

position:relative;

margin-top:50px;

padding-left:30px;

border-left:3px solid var(--primary);

}

.item{

position:relative;

margin-bottom:50px;

}

.dot{

position:absolute;

left:-40px;

top:12px;

width:18px;

height:18px;

border-radius:50%;

background:var(--primary);

}

.content{

margin-left:20px;

}

.year{

color:var(--primary);

font-weight:bold;

margin-bottom:10px;

}

ul{

margin-top:15px;

padding-left:20px;

}

li{

margin-bottom:10px;

line-height:1.6;

}

</style>