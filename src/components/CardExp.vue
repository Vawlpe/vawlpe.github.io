<template>
  <div
    class="expCard px-5 rounded-2xl bg-slate-200 dark:bg-slate-800 w-full hover:scale-105 transition-all duration-300 overflow-hidden"
  >
    <p class="flex flex-col items-center text-3xl mr-6">Experience</p>
    <div
      class="grid grid-cols-4 sm:grid-cols-7 gap-x-8 justify-items-start items-center content-center pl-3"
    >
      <ISJavascript
        class="w-[3.8rem] pt-[0.65rem] hover:text-yellow-300 hover:scale-110 transition-all duration-3"
      />
      <ISDotnet
        class="w-[5rem] hover:text-purple-400 hover:scale-110 transition-all duration-3 -translate-x-[0.75rem]"
      />
      <ISVue
        class="w-[3.2rem] hover:text-green-400 hover:scale-110 transition-all duration-3 translate-x-2"
      />
      <ISGit
        class="w-[3rem] hover:text-red-400 hover:scale-110 transition-all duration-3 translate-x-2"
      />
      <ISDocker
        class="w-[6rem] hover:text-blue-400 hover:scale-110 transition-all duration-3 -translate-x-3"
      />
      <ISPython
        class="w-[3rem] hover:text-yellow-400 hover:scale-110 transition-all duration-3 translate-x-2"
      />
      <ISHaskell
        class="w-[5rem] hover:text-purple-400 hover:scale-110 transition-all duration-3 -translate-x-4"
      />

      <ISTypescript
        class="w-[3.2rem] pt-2 hover:text-blue-400 hover:scale-110 transition-all duration-3"
      />
      <ISCSharp
        class="w-[3.8rem] pt-2 hover:text-purple-400 hover:scale-110 transition-all duration-3"
      />
      <ISNuxt
        class="w-[3.8rem] pt-2 hover:text-green-400 hover:scale-110 transition-all duration-3"
      />
      <ISLinux
        class="w-[3.8rem] pt-2 hover:scale-110 transition-all duration-3"
      />
      <ISKubernetes
        class="w-[3.8rem] pt-2 hover:text-blue-400 hover:scale-110 transition-all duration-3"
      />
      <ISLua
        class="w-[3.8rem] pt-2 hover:text-blue-400 hover:scale-110 transition-all duration-3"
      />
      <ISNodeJS
        class="w-[3rem] pt-2 hover:text-green-500 hover:scale-110 transition-all duration-3"
      />

      <ISWASM
        class="w-[3.2rem] py-[0.65rem] hover:text-purple-400 hover:scale-110 transition-all duration-3"
      />
      <ISHTML
        class="w-[3.8rem] py-[0.65rem] hover:text-red-400 hover:scale-110 transition-all duration-3"
      />
      <ISCSS
        class="w-[3.2rem] ml-1 py-[0.65rem] hover:text-blue-400 hover:scale-110 transition-all duration-3"
      />
      <ISSass
        class="w-[3.5rem] ml-2 pt-2 hover:text-pink-400 hover:scale-110 transition-all duration-3"
      />
      <ISTailwind
        class="w-[3.8rem] mr-2 pt-2 hover:text-cyan-400 hover:scale-110 transition-all duration-3"
      />
      <ISPrisma
        class="w-[2.8rem] py-[0.65rem] ml-2 hover:scale-[110%] transition-all duration-3"
      />
      <ISGraphQL
        class="w-[3.5rem] py-[0.65rem] mr-4 hover:text-pink-400 hover:scale-110 transition-all duration-3"
      />

      <ISSQL
        class="w-[3.5rem] py-[0.65rem] mr-4 hover:scale-110 transition-all duration-3"
      />
      <ISMongoDB
        class="w-[3.5rem] py-[0.65rem] mr-4 hover:text-green-400 hover:scale-110 transition-all duration-3"
      />
      <ISPostgreSQL
        class="w-[3.5rem] py-[0.65rem] mr-4 hover:text-blue-400 hover:scale-110 transition-all duration-3"
      />
      <ISBash
        class="w-[3.5rem] py-[0.65rem] mr-4 hover:scale-110 transition-all duration-3 grayscale hover:grayscale-0"
      />
      <ISGhidra
        class="w-[3.5rem] py-[0.65rem] mr-4 hover:text-red-500 hover:scale-110 transition-all duration-3 grayscale hover:grayscale-0"
      />
      <ISVSCode
        class="w-[3.5rem] py-[0.65rem] mr-4 hover:text-blue-500 hover:scale-110 transition-all duration-3"
      />
      <ISGodot
        class="w-[3.5rem] py-[0.65rem] mr-4 hover:text-blue-400 hover:scale-110 transition-all duration-3"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ISJavascript,
  ISDotnet,
  ISVue,
  ISGit,
  ISDocker,
  ISPython,
  ISHaskell,
  ISTypescript,
  ISCSharp,
  ISNuxt,
  ISLinux,
  ISKubernetes,
  ISLua,
  ISNodeJS,
  ISWASM,
  ISHTML,
  ISCSS,
  ISSass,
  ISTailwind,
  ISPrisma,
  ISGraphQL,
  ISSQL,
  ISMongoDB,
  ISPostgreSQL,
  ISBash,
  ISGhidra,
  ISVSCode,
  ISGodot,
} from '@/components/Icons/Solid'
</script>
