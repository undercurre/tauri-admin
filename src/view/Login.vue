<template>
  <n-form
    ref="formRef"
    :label-width="80"
    :model="formValue"
    :rules="rules"
    label-placement="top"
    size="medium"
  >
    <n-form-item label="username" path="user.name">
      <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
    </n-form-item>
    <n-form-item label="password" path="user.password">
      <n-input v-model:value="formValue.user.password" placeholder="输入密码" />
    </n-form-item>
    <n-form-item>
      <n-button attr-type="button" @click="handleValidateClick">
        验证
      </n-button>
    </n-form-item>
  </n-form>
</template>

<script lang="ts" setup>
import { defineComponent, ref, defineEmits } from "vue";
import { FormInst, NInput, NForm, NFormItem, NButton, useMessage } from "naive-ui";
import { Login } from "../api/user";
import { mainWin } from "../window";

const message = useMessage();

const formRef = ref<FormInst | null>(null);
let formValue = ref({
  user: {
    name: "",
    password: "",
  },
});
let rules = {
  user: {
    name: {
      required: true,
      message: "请输入账号",
      trigger: "blur",
    },
    password: {
      required: true,
      message: "请输入密码",
      trigger: ["input"],
    },
  },
};
function handleValidateClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate(async (errors: any) => {
    if (!errors) {
      const loginRes = await Login(formValue.value.user.name, formValue.value.user.password);
      message.success('登录成功');
      const token = loginRes.data.token;
      const info = loginRes.data.info;
      localStorage.setItem('token', token);
      localStorage.setItem('info', JSON.stringify(info));
      mainWin();
    } else {
      message.error('登录失败');
    }
  });
}
</script>

<script lang="ts">
defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login'
})
</script>
