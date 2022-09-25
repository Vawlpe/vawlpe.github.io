<template>
  <nav
    class="navbar top-0 text-xl font-bold mx-auto max-w-7xl h-16 pt-2 px-3 sm:px-4 lg:px-7"
  >
    <ul class="nav-list flex flex-row justify-between items-center w-full">
      <li
        class="nav-item flex flex-row flex-[0.65] items-center text-4xl font-mono font-black text-violet-400 dark:text-amber-200 hover:scale-110 transition-all duration-300"
      >
        <NuxtLink to="/" class="flex flex-row items-center">
          <IconsSolidTerminal class="w-16 text-emerald-500" />
          Vawlpe
        </NuxtLink>
      </li>
      <li
        class="nav-item flex flex-row flex-[0.25] items-center justify-evenly"
      >
        <button
          class="d-icon hover:text-violet-400 hover:scale-110 transition-all duration-300 mx-2"
          @click="toggleTheme"
        >
          <IconsSolidMoon v-if="colorMode.preference == 'light'" />
          <IconsSolidSun v-else />
        </button>
        <NuxtLink
          to="https://github.com/Vawlpe/vawlpe.github.io/"
          target="_blank"
          class="d-icon hover:text-violet-400 hover:scale-110 transition-all duration-300 w-6 max-w-6"
        >
          <IconsSolidGithub />
        </NuxtLink>
        <NuxtLink
          to="https://www.linkedin.com/in/david-imre-a20301234/"
          target="_blank"
          class="d-icon hover:text-violet-400 hover:scale-110 transition-all duration-300 w-7 max-w-6 ml-2"
        >
          <IconsSolidLinkedIn />
        </NuxtLink>
        <NuxtLink
          to="https://stackoverflow.com/users/11878103/vawlpe"
          target="_blank"
          class="d-icon hover:text-violet-400 hover:scale-110 transition-all duration-300 w-5 max-w-5 ml-1"
        >
          <IconsSolidStackOverflow />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
if (colorMode.preference === 'system') colorMode.preference = colorMode.value

const toggleTheme = () =>
  (colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light')
</script>
