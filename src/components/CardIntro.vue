<template>
  <div
    class="introBox flex flex-row rounded-2xl bg-slate-200 dark:bg-slate-800 w-full hover:scale-105 transition-all duration-3 overflow-hidden"
  >
    <img
      src="/pfp.png"
      class="introImg border border-8 hover:border-0 border-violet-400 rounded-[1rem_50%_50%_1rem] hover:rounded-2xl hover:scale-[1.075] transition-all duration-3"
    />
    <div class="introTxt px-5 w-fit text-[0.95rem]">
      <ol class="list-disc pl-2 pr-1">
        <p class="md:text-[0.85rem] sm:text-xl lg:text-base pb-8 md:pb-0">
          🦊 ~Dumb fox makes code go nyoom~ 🦊
        </p>
        <li><code>var hazel = 17 + she/they + Romania 🇷🇴</code></li>
        <li>4+ years freelance full-stack software development 💻🌀</li>
        <li>
          Trans rights are human rights 💖🏳️‍⚧️ <code>&&</code> I use Arch btw 💪🐧
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
        <div
          class="flex flex-row bg-blue-500 rounded-2xl border border-2 border-blue-700 pl-2 h-7 text-sm w-36"
        >
          <IconSolidDiscord class="w-6" />
          <p class="pl-2 pt-[0.5]"><code>Vawlpe#0116</code></p>
        </div>
      </ol>
    </div>
  </div>
</template>

<style scoped lang="scss">
.introBox {
  height: fit-content;
  .introImg {
    height: 20rem;
    @media (min-width: 0px) {
      height: 10rem;
    }
    @media (max-width: 1278px) {
      height: 11rem;
    }
    @media (min-width: 940px) {
      height: 12.54rem;
    }
  }
  .introTxt {
    @media (max-width: 670px) {
      font-size: small;
      > ol {
        p.pb-8 {
          padding-bottom: 1rem;
        }
      }
    }
    @media (min-width: 945px) {
      font-size: small;
    }
  }
}
</style>
