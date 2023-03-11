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
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts" setup>
import { h, ref, watchEffect } from 'vue'
import { NIcon, NMenu, NLayoutSider, NLayout, NSpace } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { Person, DocumentTextSharp } from '@vicons/ionicons5'
import { userStore, missionStore } from '../../store/collection';
import { useRoute } from 'vue-router';
import router from '../../router';

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

const route = useRoute();

const target = route.fullPath.split('/')[1] || 'workbench';

const activeMenuKey = ref<string>(target);

userStore.info = JSON.parse(
    localStorage.getItem('info') ||
        '{"email":"","phone":"","roleIds":"","userId":0,"username":"未登录"}',
);

missionStore.updateMission()

watchEffect(() => {
    router.push(activeMenuKey.value);
		missionStore.updateMission()
});
</script>
