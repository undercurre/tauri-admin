<template>
  <div class="p-20px">
    <n-descriptions label-placement="left" title="个人信息">
      <n-descriptions-item>
        <template #label> 用户名 </template>
        {{ userStore.info.username }}
      </n-descriptions-item>
      <n-descriptions-item label="邮箱">
        {{ userStore.info.email }}
      </n-descriptions-item>
      <n-descriptions-item label="电话">
        {{ userStore.info.phone }}
      </n-descriptions-item>
    </n-descriptions>
  </div>
</template>

<script lang="ts" setup>
import { userStore } from '../../store/collection'
</script>
