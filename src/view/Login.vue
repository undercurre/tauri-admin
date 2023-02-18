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
        <n-input
          v-model:value="formValue.user.password"
          placeholder="输入密码"
        />
      </n-form-item>
      <n-form-item>
        <n-button attr-type="button" @click="handleValidateClick">
          验证
        </n-button>
      </n-form-item>
    </n-form>
    <pre>{{ JSON.stringify(formValue, null, 2) }}</pre>
</template>

<script lang="ts" setup>
import { defineComponent, ref, defineEmits } from "vue";
import { FormInst, NInput, NForm, NFormItem, NButton, useMessage } from "naive-ui";
import { Login } from "../api/user";

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
      const res = await Login(formValue.value.user.name, formValue.value.user.password);
      console.log(res)
      message.success('登录成功')
    } else {
      message.error('登录成功')
    }
  });
}
</script>

<script lang="ts">
defineComponent({
  name: 'Login'
})
</script>