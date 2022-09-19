<template>
  <div class="layout w-screen h-screen">
    <MainNavbar />
    <slot />
    <MainFooter class="w-full fixed bottom-0" />
  </div>
</template>

<script setup lang="ts">
import MainNavbar from '@/components/MainNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>
