<template>
  <div class="page h-full mx-auto max-w-7xl pt-8 px-3 sm:px-4 lg:px-7">
    <h1 class="text-5xl pb-4">About me</h1>
    <div class="content flex flex-col md:flex-row">
      <section class="flex-1 text-xl">
        Hi, I'm Vawlpe~! but you can call me Hazel...<br />
        I'm a well-versed full-stack/desktop developer and DevOps engineer
        experienced in fast-paced environments, who thrives in remote settings,
        working with teammates to spearhead solutions to emerging industry
        problems.<br /><br />
        I work with various clients to implement full-stack web and mobile
        applications, servers, clients, internal libraries, and cross-platform
        desktop CLI and GUI tools.<br /><br />
        I also develop CI/CD automation solutions for various tasks such as
        building, end-to-end testing, advanced profiling, debugging, and
        deployment, of complex applications across the world.<br /><br />
        And when I'm not doing any of that I like to write various dev tools in
        C# w/ QIMGUIN and tinker with old tech, from tiny 6502 chips to unix
        antics, decompiling/disassembling old games, reverse-engineering them
        and patching/modding them, etc...<br /><br />
        I'm an avid fan of Obsidian.md, the AGILE workflow, and OSS principles,
        and I strive to create and mantain a healthy work environment for myself
        and those around me in an effort to inovate on the almost-forgotten.
      </section>
      <aside
        class="flex-[1.5] ml-10 max-w-[52%] min-w-[52%] text-sm flex flex-col justify-between"
      >
        <CardIntro />
        <CardExp class="mt-4" />
        <CardContrib class="mt-4 max-h-[7rem]" />
      </aside>
    </div>
    <hr class="mt-3" />
    <section class="mb-20 projects flex flex-col items-center">
      <h2 class="text-3xl pt-6 pb-1">Projects</h2>
      <Carousel dir="ltr" :items-to-show="carouselIts()" class="my-4 w-full">
        <Slide
          v-for="p in projects"
          :key="p.name ? p.name : projDefault.name"
          :style="{
            color: p.tc ? p.tc : projDefault.tc,
            backgroundImage: p.bgi ? p.bgi : projDefault.bgi,
            backgroundSize: p.bgs ? p.bgs : projDefault.bgs,
            backgroundPosition: p.bgp ? p.bgp : projDefault.bgp,
          }"
        >
          <div>
            <p class="text-5xl pt-5">{{ p.name }}</p>
            <p class="text-lg pt-5">{{ p.desc }}</p>
          </div>
          <div
            class="flex flex-row absolute bottom-8 justify-evenly items-center w-full"
          >
            <NuxtLink
              v-if="p.links.length > 0"
              :to="p.links[0]"
              target="_blank"
            >
              <ISGithub
                class="w-12 hover:text-violet-400 hover:scale-[110%] transition-all duration-300"
              />
            </NuxtLink>
            <NuxtLink
              v-for="l in p.links.slice(1)"
              :key="l"
              :to="l"
              target="_blank"
            >
              <IS3Dot
                class="w-12 hover:text-violet-400 hover:scale-[110%] transition-all duration-300"
              />
            </NuxtLink>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </section>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ISGithub, IS3Dot } from '~~/components/Icons/Solid'

const carouselIts = () =>
  useMediaQuery('(max-width: 666px)')
    ? 1
    : useMediaQuery('(max-width: 1150px)')
    ? 2
    : 3

const projDefault = {
  name: 'NAME',
  desc: 'DESCRIPTION',
  bgi: '',
  bgs: 'cover',
  bgp: 'center',
  tc: '#fff',
  links: [],
}

const projects: {
  name?: string
  desc?: string
  bgi?: string
  bgs?: string
  bgp?: string
  tc?: string
  links?: string[]
}[] = [
  {
    bgi: 'url(https://github.com/RetroMole/MOLE/blob/Old-2022/01/03/res/banner.png?raw=true)',
    links: ['https://github.com/RetroMole'],
  },
  {
    name: 'Hgreet',
    bgi: 'url(/lock.jpeg)',
    desc: "Haskell package to facilitate interaction with the unix greetd daemon trough it's unix-socket-based IPC to authenticate a user on system start-up",
    links: [
      'https://github.com/Vawlpe/HGreet',
      'https://hackage.haskell.org/package/hgreet',
    ],
  },
  {
    bgi: 'url(/qimguin.png)',
    bgs: 'contain',
    bgp: 'center top',
    links: ['https://github.com/Vawlpe/QuickImGui.NET'],
  },
  {
    name: 'My Obsidian Workspace',
    bgi: 'url(/hexagons.jpeg)',
    desc: 'An customized and organized workspace with node-graph, kanban boards, notes, databases, diagrams, etc...',
    links: ['https://github.com/Vawlpe/HazelObsidian'],
  },
  {
    name: 'ModTaker',
    bgi: 'url(/helltaker.jpeg)',
    desc: 'Basic modloader for Helltaker, includes modding API with event hooks, custom UI, clean dialog format, & various asset handling utilities out of the box',
    links: ['https://github.com/Vawlpe/ModTaker'],
  },
]
</script>

<style scoped lang="scss">
.carousel__slide {
  margin: 0 1rem 0 0;
  height: 20rem;
  border-width: 0.6rem;
  border-color: #ffffff2f #0000002f #0000002f #ffffff2f;
  border-radius: 2%;
  flex-direction: row;
  align-items: flex-start;
  background-color: #e2e8f0;
  background-repeat: no-repeat;
  transition: all;
  transition-duration: 300ms;
  &:hover {
    scale: 1.04;
  }
  @media (min-width: 1151px) {
    width: 33% !important;
  }
  @media (max-width: 1150px) {
    width: 50% !important;
  }
  @media (max-width: 666px) {
    width: 100% !important;
  }
}
.dark .carousel__slide {
  background-color: #1e293b;
}
.content {
  @media (max-width: 1150px) {
    flex-direction: column;
    aside {
      padding: 0;
      padding-top: 2rem;
      margin: 0;
      width: 100%;
      max-width: 100%;
    }
  }
}
</style>
