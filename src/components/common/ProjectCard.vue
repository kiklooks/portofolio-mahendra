<script setup>

import {
    ExternalLink,
    Github
} from "lucide-vue-next";

defineProps({

    project: Object

})

</script>

<template>

<div class="card project">

    <img
        :src="project.image"
        :alt="project.title"
    >

    <div class="body">

        <small>

            {{ project.company }}

        </small>

        <h3>

            {{ project.title }}

        </h3>

        <p>

            {{ project.description }}

        </p>

        <div class="tech">

            <span

                v-for="item in project.tech"

                :key="item"

            >

                {{ item }}

            </span>

        </div>

        <div class="buttons">

            <a

                class="btn btn-primary"

                :href="project.demo"

                target="_blank"

            >

                <ExternalLink :size="18"/>

                Live Demo

            </a>

            <a

                v-if="project.github"

                class="btn btn-outline"

                :href="project.github"

                target="_blank"

            >

                <Github :size="18"/>

                GitHub

            </a>

        </div>

    </div>

</div>

</template>

<style scoped>

.project{

overflow:hidden;

padding:0;

transition:.35s;

}

.project:hover{

transform:translateY(-10px);

}

img{

width:100%;

height:250px;

object-fit:cover;

display:block;

}

.body{

padding:28px;

}

small{

color:var(--primary);

font-weight:600;

}

h3{

margin:12px 0;

}

p{

line-height:1.7;

color:var(--text-light);

}

.tech{

display:flex;

flex-wrap:wrap;

gap:10px;

margin:25px 0;

}

.tech span{

padding:8px 14px;

border-radius:30px;

background:#2563eb15;

color:var(--primary);

font-size:.9rem;

font-weight:600;

}

.buttons{

display:flex;

gap:15px;

margin-top:10px;

flex-wrap:wrap;

}

</style>