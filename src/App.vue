<script setup lang="ts">
import { NMessageProvider } from 'naive-ui';
import Tabbar from './components/tabbar.vue';
</script>

<template>
  <div class="bg-white w-screen h-screen flex flex-col">
    <!-- <Tabbar></Tabbar> -->
    <NMessageProvider>
      <RouterView />
    </NMessageProvider>
  </div>
</template>

<style scoped></style>
