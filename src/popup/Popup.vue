<template>
  <main class="w-[300px] px-4 py-5 text-center text-gray-700 dark:text-gray-200">
    <img src="/assets/icon.svg" class="icon-btn mx-2 text-2xl" />
    <div>Popup</div>
    <p class="mt-2 opacity-50">弹窗页面</p>
    <button class="btn mt-2" @click="openOptionsPage">打开选项页面</button>

    <Footer />

    <div class="mt-2">
      <span class="opacity-50">存储信息:</span> {{ storageDemo }}
    </div>
  </main>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue'
import { storageDemo } from '~/logic/storage'

function openOptionsPage() {
  chrome.runtime.openOptionsPage()
}
</script>
