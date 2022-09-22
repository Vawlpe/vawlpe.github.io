<template>
  <div>
    <img
      src="/pfp.png"
      class="out PfpImg border border-8 hover:border-0 border-violet-400 rounded-2xl hover:scale-[1.075] transition-all duration-3"
    />
    <div
      class="introCard flex flex-row rounded-2xl bg-slate-200 dark:bg-slate-800 w-full hover:scale-105 transition-all duration-3 overflow-hidden mt-4"
    >
      <img
        src="/pfp.png"
        class="in PfpImg border-8 hover:border-0 border-violet-400 rounded-[1rem_50%_50%_1rem] hover:rounded-2xl hover:scale-[1.075] transition-all duration-3"
      />
      <div class="info px-5 w-fit text-[0.95rem]">
        <p class="title">🦊 ~Dumb fox makes code go nyoom~ 🦊</p>
        <ol class="list-disc pl-2 pr-1">
          <li><code>var hazel = [17, 'she/they', 'Romania 🇷🇴']</code></li>
          <li>3+ years freelance full-stack software development 💻🌀</li>
          <li>
            Trans rights are human rights 💖🏳️‍⚧️ <code>&&</code> I use Arch btw
            💪🐧
          </li>
          <li>
            Working on
            <NuxtLink
              class="text-violet-400 hover:text-xl transition-all duration-3"
              to="https://github.com/Vawlpe/QuickImGui.NET"
              >QIMGUIN</NuxtLink
            >
            &&
            <NuxtLink
              class="text-violet-400 hover:text-xl transition-all duration-3"
              to="https://github.com/Vawlpe/QuickImGui.NET"
              >PEMSA Debugger</NuxtLink
            >
          </li>
          <li class="mb-2">
            Experimenting with
            <NuxtLink
              to="https://github.com/carbon-language"
              class="text-violet-400 hover:text-xl transition-all duration-3"
              >Carbon</NuxtLink
            >
          </li>
        </ol>
        <div
          class="discord flex flex-row bg-blue-500 rounded-2xl border-2 border-blue-700 pl-2 mb-1 h-7 text-sm w-36"
        >
          <ISDiscord class="w-6" />
          <p class="pl-2 pt-[0.125rem]"><code>Vawlpe#0116</code></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ISDiscord } from './Icons/Solid'
</script>
<style scoped lang="scss">
.PfpImg {
  display: none;
  &.out {
    @media (max-width: 666px) {
      display: block;
      max-width: 50%;
      margin-left: 25%;
    }
  }
  &.in {
    @media (min-width: 667px) {
      display: block;
      height: 11rem;
    }
  }
}
.introBox {
  height: fit-content;
}
</style>
