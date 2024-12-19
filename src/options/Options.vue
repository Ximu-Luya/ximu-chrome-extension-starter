<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <span class="iconify icon-park-outline--setting" />
    <div>Options</div>
    <p class="my-2 opacity-50">选项页面</p>

    <input
      id="input"
      v-model="storageDemo"
      placeholder="同步 Storage"
      aria-label="同步 Storage"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      class="rounded border border-gray-200 dark:border-gray-700"
      outline="none active:none"
    >

    <Footer />

    <div class="mt-4">
      由 Vite 强力驱动 <pixelarticons-zap class="align-middle" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue'
import { storageDemo } from '~/logic/storage'
</script>
