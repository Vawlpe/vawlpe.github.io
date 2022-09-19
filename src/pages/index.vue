<template>
  <div
    class="page h-full mb-[50rem] md:mb-[42rem] lg:mb-[20rem] mx-auto max-w-7xl pt-8 px-3 sm:px-4 lg:px-7"
  >
    <h1 class="text-5xl pb-4">About me</h1>
    <div class="content flex flex-col md:flex-row">
      <section class="flex-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        necessitatibus sed deleniti quibusdam libero error tenetur sapiente
        laboriosam modi non quidem molestiae aspernatur obcaecati odio earum,
        quae est fugiat dolores! Voluptate, error aut libero nisi, placeat hic
        soluta dolorem quasi incidunt sequi cumque eos sed facilis dignissimos,
        accusamus totam magnam! Quo, tempora. Nobis, ad minus? Quasi sequi
        maxime laboriosam provident Eveniet dolores quos modi praesentium sit
        maiores minima. Nihil recusandae dolorum dolore? Officiis voluptate,
        numquam harum ex minus eius praesentium autem molestiae minima, corporis
        placeat vero sunt commodi officia porro? Nulla commodi, inventore ipsam
        praesentium omnis quia blanditiis suscipit eum iure porro qui pariatur
        laboriosam veritatis eius architecto placeat sit ducimus nesciunt quae?
        Error magni distinctio commodi autem a cum! Dolor quo maxime quas quia
        nihil ipsam dolorum, beatae similique dolorem deserunt odit optio
        expedita minima amet nam harum rerum natus ducimus consectetur nobis
        esse pariatur enim commodi nostrum! Labore! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Libero accusantium voluptas aliquid!
        Soluta, corporis nisi beatae labore consequuntur neque explicabo ex,
        natus, adipisci deserunt cupiditate aperiam accusamus magnam impedit
        cumque! Similique ea accusamus fuga nesciunt possimus nobis nam hic
        illum perspiciatis sit mollitia, cumque dolores debitis quae sed earum,
        eligendi quam ratione magni laboriosam eius? Ipsa, sapiente vel.
        Nesciunt, aut.
      </section>
      <aside class="flex-[1.5] md:pl-10 text-sm flex flex-col justify-between">
        <CardIntro />
        <CardExp class="mt-4" />
        <CardContrib class="mt-4 max-h-[7rem]" />
      </aside>
    </div>
    <hr class="mt-3" />
    <div class="projects flex flex-col items-center">
      <h2 class="text-3xl pt-6 pb-1">Projects</h2>
      <Carousel :items-to-show="4" class="my-4 w-full">
        <Slide
          v-for="p in projects"
          :key="p.name"
          :style="{
            backgroundImage: `${p.bgi}`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: `${p.hide ? 'none' : 'block'}`,
            width: `${p.hide ? '0' : 'calc(100%/3.45'}`,
            color: p.tc,
          }"
          class="relative bg-cover"
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
              <IconSolidGithub
                class="w-12 hover:text-violet-400 hover:scale-[110%] transition-all duration-300"
              />
            </NuxtLink>
            <NuxtLink
              v-for="l in p.links.slice(1)"
              :key="l"
              :to="l"
              target="_blank"
            >
              <IconSolidMenu
                class="w-10 hover:text-violet-400 hover:scale-[110%] transition-all duration-300"
              />
            </NuxtLink>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const projects = [
  {
    bgi: 'url(https://github.com/RetroMole/MOLE/blob/Old-2022/01/03/res/banner.png?raw=true)',
    links: ['https://github.com/RetroMole'],
  },
  {
    name: 'Hgreet',
    bgi: 'url(/lock.jpeg)',
    tc: '#ffffff',
    desc: "Haskell package to facilitate interaction with the unix greetd daemon trough it's unix-socket-based IPC to authenticate a user on system start-up",
    links: [
      'https://github.com/Vawlpe/HGreet',
      'https://hackage.haskell.org/package/hgreet',
    ],
  },
  {
    bgi: 'url(/qimguin.png)',
    links: ['https://github.com/Vawlpe/QuickImGui.NET'],
  },
  {
    name: 'My Obsidian Workspace',
    bgi: 'url(/hexagons.jpeg)',
    tc: '#ffffff',
    desc: 'An customized and organized workspace with node-graph, kanban boards, notes, databases, diagrams, etc...',
    links: ['https://github.com/Vawlpe/HazelObsidian'],
  },
  {
    name: 'ModTaker',
    bgi: 'url(/helltaker.jpeg)',
    tc: '#ffffff',
    desc: 'Basic modloader for Helltaker, includes modding API with event hooks, custom UI, clean dialog format, & various asset handling utilities out of the box',
    links: ['https://github.com/Vawlpe/ModTaker'],
  },
  { name: '', links: [], hide: true },
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
  background-position: center;
  background-size: cover;
  transition: all;
  transition-duration: 300ms;
  &:hover {
    scale: 1.04;
    border-radius: 10%;
  }
}
.dark .carousel__slide {
  background-color: #1e293b;
}
.content {
  @media (max-width: 938px) {
    flex-direction: column;
    aside {
      padding: 0;
    }
  }
}
</style>
