<template>
  <div data-tauri-drag-region class="fixed top-0 right-0 z-1">
    <button type="button" @click="curWin.minimize()"></button>
    <button type="button" @click="curWin.toggleMaximize()"></button>
    <button type="button" @click="curWin.close()"></button>
  </div>
</template>

<script setup lang="ts">
import { getCurrent } from '@tauri-apps/api/window'

const curWin = getCurrent();
</script>
