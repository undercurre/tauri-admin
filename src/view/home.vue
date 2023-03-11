<template>
  <n-space vertical>
    <n-layout class="h-screen" has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="64"
      >
        <n-menu
          :collapsed="true"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :render-icon="renderMenuIcon"
        />
      </n-layout-sider>
      <n-layout>
        <span>111内容</span>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { NIcon, NMenu, NLayoutSider, NLayout, NSpace } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { Person, DocumentTextSharp } from '@vicons/ionicons5'

const menuOptions: MenuOption[] = [
  {
    label: '任务处理',
    key: 'mission',
  },
  {
    label: '个人信息',
    key: 'person',
  },
]
function renderMenuIcon (option: MenuOption) {
    if (option.key === 'mission')
    return h(NIcon, null, { default: () => h(DocumentTextSharp) })
    if (option.key === 'person')
    return h(NIcon, null, { default: () => h(Person) })
}
</script>
