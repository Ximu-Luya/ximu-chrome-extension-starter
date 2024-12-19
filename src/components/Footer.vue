<template>
  <nav class="text-xl mt-6">
    <button
      class="icon-btn mx-2 !outline-none"
      title="切换深色模式"
      @click="(e) => toggleDark()"
    >
      <span class="iconify icon-park-outline--moon" v-if="isDark" />
      <span class="iconify icon-park-outline--sun" v-else />
    </button>

    <a
      class="icon-btn mx-2"
      title="切换语言"
      @click="toggleLocales"
    >
      <span class="iconify icon-park-outline--earth" />
    </a>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      href="https://github.com/xiaoluoboding/chrome-ext-mv3-starter"
      target="_blank"
      title="GitHub"
    >
      <span class="iconify icon-park-outline--github" />
    </a>
  </nav>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'
</script>
