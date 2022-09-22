<template>
  <div
    class="contribCard px-5 rounded-2xl bg-slate-200 dark:bg-slate-800 w-full hover:scale-105 transition-all duration-3 overflow-hidden"
  >
    <p class="flex flex-col items-center text-3xl mr-6">Contributions</p>
    <div
      class="grid grid-cols-4 justify-items-center items-center content-center pl-7"
    >
      <NuxtLink to="https://www.monogame.net/" target="_blank"
        ><ISMonogame
          class="w-[2.7rem] pt-[0.65rem] pb-3 hover:text-orange-400 hover:scale-110 transition-all duration-3"
      /></NuxtLink>
      <NuxtLink to="https://everestapi.github.io/" target="_blank"
        ><ISEverest
          class="w-[5rem] pt-[0.65rem] hover:text-fuchsia-600/25 hover:scale-110 transition-all duration-3"
      /></NuxtLink>
      <NuxtLink to="https://github.com/RetroMole/" target="_blank"
        ><ISRetroMole
          class="w-[4.5rem] pt-[0.65rem] text-yellow-400/80 hover:scale-110 grayscale hover:grayscale-0 transition-all duration-3"
      /></NuxtLink>
      <NuxtLink to="https://celesteclassic.github.io" target="_blank"
        ><ISCelesteClassic
          class="w-[3.75rem] pt-[0.65rem] text-rose-500 hover:scale-110 grayscale hover:grayscale-0 transition-all duration-3 -translate-y-3"
      /></NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ISMonogame,
  ISEverest,
  ISRetroMole,
  ISCelesteClassic,
} from '@/components/Icons/Solid'
</script>
