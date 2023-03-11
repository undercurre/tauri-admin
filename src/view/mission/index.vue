<template>
  <n-empty
    description="当前没有任何成功部署的任务"
    v-if="missionStore.all.length === 0"
  >
    <template #extra> </template>
  </n-empty>
  <n-grid x-gap="12" :cols="4" v-else>
    <n-gi v-for="item in missionStore.all" :key="item.id">
      <n-card class="min-h-120px">
        <template #header>
          <div class="flex justify-between">
            <span class="text-12px h-full truncate">{{
                          item.name
            }}</span>
            <div class="text-12px">
              <n-countdown
                :render="renderCountdown"
                :duration="getS(item.dealline)"
                :active="true"
              />
            </div>
          </div>
        </template>
        <template #default>
          <n-empty description="不知道是什么情况" v-if="!item.detail">
            <template #extra></template>
          </n-empty>
          <p v-else>{{ item.detail }}</p>
        </template>
        <template #footer>
          <div class="w-full flex justify-end">
            <div @click="changeStatus(item.id)">
              <n-switch
                checked-value="1"
                unchecked-value="0"
                v-model:value="item.status"
              >
                <template #checked> 太棒了，这一项已经完成了 </template>
                <template #unchecked> 傻逼，还不去工作 </template>
              </n-switch>
            </div>
          </div>
        </template>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script lang="ts" setup>
import router from '../../router';
import { missionStore } from '../../store/collection';

function goToAdd() {
  router.push('addMission');
}

function getS(time: string) {
  var nowTime = +new Date();
  var inputTime = +new Date(time);
  // 得到秒数
  var remain = inputTime - nowTime;

  return remain;
}

function renderCountdown(e: {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}) {
  // 计算天数
  let day = Math.abs(Math.floor(e.hours / 24));
  const hourLast = Math.abs(e.hours % 24);
  return e.hours < 0 || e.minutes < 0 || e.seconds < 0 || e.milliseconds
      ? `已过期${day - 1}天${hourLast}:${Math.abs(e.minutes)
            .toString()
            .padStart(2, '0')}:${Math.abs(e.seconds)
            .toString()
            .padStart(2, '0')}`
      : `${day}天${hourLast}:${e.minutes
            .toString()
            .padStart(2, '0')}:${e.seconds.toString().padStart(2, '0')}`;
}

function changeStatus(id: number) {
  missionStore.changeMissionStatus(id);
}
</script>
