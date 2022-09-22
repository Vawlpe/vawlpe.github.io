<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  transition: background-color 300ms, color 300ms;
  background-color: #f3f4f6;
  color: #292524;
  .dark & {
    background-color: #111827;
    color: #cbd5e1;
  }
}
</style>
