<template>
<div class="layout w-screen h-screen transition-colors duration-300
                 bg-gray-100       text-stone-800
            dark:bg-gray-900 dark:text-slate-300">
    <NavBar/>
    <slot/>
    <Footer/>
</div>
</template>
  
<script setup lang="ts">
    import NavBar from "@/components/Navbar.vue";
</script>