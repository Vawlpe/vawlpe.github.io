<template>
<nav class="navbar sticky top-0 text-xl font-bold mx-auto max-w-7xl h-16 pt-2 px-3
                 bg-gray-100
            dark:bg-gray-900
            sm:px-4
            lg:px-7">
    <ul class="nav-list flex flex-row justify-between items-center w-full">
        <li class="nav-item flex flex-row flex-[0.65_0.65_0%] items-center text-4xl font-mono font-black
                        text-violet-400
                   dark:text-amber-200">
            <NuxtLink to="/" class="flex flex-row items-center">
                <NuxtLogo class="w-16"/>
                Vawlpe
            </NuxtLink>
        </li>
        <li class="links nav-item flex flex-row flex-1 items-center justify-around">
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink>test</NuxtLink>
            <NuxtLink>test</NuxtLink>
            <NuxtLink>test</NuxtLink>
        </li>
        <li class="nav-item flex flex-row flex-[0.25_0.25_0%] items-center justify-evenly">
            <button @click="toggleTheme" class="d-icon hover:text-violet-400 transition-colors duration-2 mx-2">
                <IconSolidMoon v-if="colorMode.preference == 'light'"/>
                <IconSolidSun v-else/>
            </button>
            <NuxtLink to="https://github.com/Vawlpe/vawlpe.github.io/" target="_blank" class="d-icon hover:text-violet-400 transition-colors duration-2 w-6 max-w-6 mx-2">
                <IconSolidGithub/>
            </NuxtLink>
            <NuxtLink to="https://www.linkedin.com/in/david-imre-a20301234/" target="_blank" class="d-icon hover:text-violet-400 transition-colors duration-2 w-7 max-w-6 mx-2">
                <IconSolidLinkedIn/>
            </NuxtLink>
            <button class="mobile-nav d-icon hover:text-violet-400 transition-colors duration-2 w-6 max-w-6">  
                <IconSolidMenu/>
            </button>
        </li>
    </ul>
</nav>
</template>

<script setup lang="ts">
    const colorMode = useColorMode();
    if (colorMode.preference === 'system')
        colorMode.preference = colorMode.value;

    const toggleTheme = () => colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
</script>

<style scoped>
@media (max-width: 640px) {
    .links {
        display: none;
    }
}
@media (min-width: 640px) {
    .mobile-nav {
        display: none;
    }
}
</style>