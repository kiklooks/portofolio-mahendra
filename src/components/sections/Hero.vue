<script setup>

import {
    ArrowDown,
    Github,
    Linkedin,
    Download,
    FileText
} from "lucide-vue-next";

import profile from "../../data/profile";
import { useTyping } from "../../composables/useTyping";

const { text } = useTyping(profile.roles);

</script>

<template>

<section 
id="hero"
class="hero"
>

<div class="blob one"></div>
<div class="blob two"></div>

<div class="container hero-grid">

<div>

<p class="tag">

👋 Halo, saya

</p>

<h1>

Mahendra
<br>

<span>Rizqi Abhinawa</span>

</h1>

<h2>

{{ text }}

<span class="cursor">|</span>

</h2>

<p class="desc">

Saya mengembangkan aplikasi web
menggunakan Laravel, Django,
Vue.js, MySQL, SQLite dan PostgreSQL.
Saya memiliki ketertarikan pada
Backend Web Development, Full Stack Web Development,
dan UI/UX Design.

</p>

<div class="buttons">

<a
:href="profile.personal.cv"
target="_blank"
rel="noopener noreferrer"
class="btn btn-primary">

<FileText :size="18" />

Lihat CV

</a>

<a
:href="profile.personal.github"
target="_blank"
rel="noopener noreferrer"
class="btn btn-outline">

<Github :size="18"/>

Github

</a>

<a
:href="profile.personal.linkedin"
target="_blank"
rel="noopener noreferrer"
class="btn btn-outline">

<Linkedin :size="18"/>

LinkedIn

</a>

</div>

</div>

<div class="photo">

<div class="circle">

<img
src="/foto-profil.jpg">

</div>

</div>

</div>

<div class="scroll">

<ArrowDown/>

</div>

</section>

</template>

<style scoped>

.hero{

min-height:calc(100vh - 78px);

padding-top:78px;

display:flex;

align-items:center;

position:relative;

overflow:hidden;

background:var(--gradient);

}

.hero-grid{

display:grid;

grid-template-columns:1.2fr 1fr;

align-items:center;

gap:70px;

}

.tag{

font-size:1rem;

margin-bottom:12px;

color:var(--primary);

}

h1{

font-size:4rem;

font-weight:800;

line-height:1.05;

}

h1 span{

color:var(--primary);

}

h2{

margin-top:18px;

font-size:1.4rem;

color:var(--text-light);

}

.desc{

margin:30px 0;

line-height:1.8;

max-width:620px;

}

.buttons{

display:flex;

gap:18px;

flex-wrap:wrap;

}

.photo{

display:flex;

object-position:center top;

}

.circle{

width:380px;

height:380px;

border-radius:50%;

overflow:hidden;

border:8px solid white;

box-shadow:var(--shadow);

}

.circle img{

width:100%;

height:100%;

object-fit:cover;

}

.scroll{

position:absolute;

bottom:40px;

left:50%;

transform:translateX(-50%);

animation:bounce 1.5s infinite;

}

@keyframes bounce{

50%{

transform:

translate(-50%,10px);

}

}

.cursor{

    color:var(--primary);

    animation:blink .8s infinite;

}

.one{

top:-150px;

left:-150px;

}

.two{

bottom:-200px;

right:-120px;

}

@media(max-width:900px){

.hero{

padding-top:120px;

padding-bottom:60px;

min-height:auto;

}

.hero-grid{

grid-template-columns:1fr;

text-align:center;

}

.photo{

order:-1;

justify-content:center;

margin-bottom:35px;

}

.circle{

width:240px;

height:240px;

margin:auto;

}

h1{

font-size:3rem;

}

.buttons{

justify-content:center;

}

@keyframes blink{

    50%{

        opacity:0;

    }

}

}

</style>