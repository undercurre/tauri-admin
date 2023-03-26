<template>
  <div
    class="w-full h-full bg-gradient-to-r from-white via-gray to-black flex flex-col items-center"
  >
    <div class="w-full flex justify-center items-center">
      <i-line-md:coffee-loop
        class="w-100px h-100px bg-black text-white rounded-full p-10px box-border"
      />
      <n-gradient-text
        :size="80"
        :gradient="{
                        deg: 270,
                        from: 'rgb(37, 23, 73)',
                        to: 'rgb(73, 85, 121)',
                    }"
      >
        Metu
      </n-gradient-text>
    </div>
    <n-form
      ref="formRef"
      :label-width="80"
      :model="formValue"
      :rules="rules"
      label-placement="top"
      size="medium"
      class="w-200px"
    >
      <n-form-item label="username" path="user.name" class="w-200px">
        <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
      </n-form-item>
      <n-form-item label="password" path="user.password" class="w-200px">
        <n-input
          v-model:value="formValue.user.password"
          placeholder="输入密码"
        />
      </n-form-item>
      <n-form-item class="flex justify-center">
        <n-button
          class="w-200px"
          type="info"
          attr-type="button"
          @click="handleValidateClick"
        >
          submit
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { FormInst, NInput, NForm, NFormItem, NButton, useMessage } from "naive-ui";
import { Login } from "../../api/user";
import { mainWin } from "../../window";
import { useRouter } from "vue-router";
import { http } from "@tauri-apps/api";

const router = useRouter();

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
      const loginRes2 = await http.fetch('http://81.71.85.68:8086/api/backend/login', {
          headers:{
              Authorization: 'Bearer test'
          },
          method: 'GET',
          // *** 注意：get请求的参数值必须为字符串，不然tauri会报错，这是tauri框架的要求；可以自己手动进行字符串强制转换 ***
          query: {
            username: 'lirh3333',
            password: '123456'
          }
      })
      console.log(loginRes2)
      const loginRes = await Login(formValue.value.user.name, formValue.value.user.password);
      message.success('登录成功');
      const token = loginRes.data.token;
      const info = loginRes.data.info;
      localStorage.setItem('token', token);
      localStorage.setItem('info', JSON.stringify(info));
      router.push('./')
      // mainWin();
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
