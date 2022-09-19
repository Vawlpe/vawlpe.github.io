<template>
  <div class="layout w-screen h-screen">
    <MainNavbar />
    <slot />
    <MainFooter class="w-full" />
  </div>
</template>

<script setup lang="ts">
import MainNavbar from '@/components/MainNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>
