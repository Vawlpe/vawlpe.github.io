<template>
  <div
    class="h-[5rem] footer flex flex-row justify-evenly items-center bg-gray-200 dark:bg-zinc-900 text-gray-400 dark:text-gray-600"
  >
    <NuxtLink to="mailto:vawlpe(at)gmail(dot)com" target="_blank"
      >vawlpe(at)gmail(dot)com</NuxtLink
    >
    <div class="flex flex-row justify-evenly items-center w-[15%]">
      <NuxtLink
        to="https://github.com/Vawlpe/vawlpe.github.io/"
        target="_blank"
        class="d-icon hover:text-violet-400 hover:scale-110 transition-all duration-300 w-6 max-w-6"
      >
        <ISGithub />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/david-imre-a20301234/"
        target="_blank"
        class="d-icon hover:text-violet-400 hover:scale-110 transition-all duration-300 w-7 max-w-72"
      >
        <ISLinkedIn />
      </NuxtLink>
      <NuxtLink
        to="https://stackoverflow.com/users/11878103/vawlpe"
        target="_blank"
        class="d-icon hover:text-violet-400 hover:scale-110 transition-all duration-300 w-5 max-w-5"
      >
        <ISStackOverflow />
      </NuxtLink>
    </div>
    <p>Made with 💜 by Hazel (Vawlpe)</p>
  </div>
</template>

<script setup lang="ts">
import { ISGithub, ISLinkedIn, ISStackOverflow } from '@/components/Icons/Solid'
</script>
