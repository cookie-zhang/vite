<!--
 * @Author: your name
 * @Date: 2021-02-23 13:11:56
 * @LastEditTime: 2021-02-23 13:12:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite/src/views/list.vue
-->
<template>
  <p>登录页</p>
  vuex:{{ $store.state.num }}
  <div>
    <van-button type="primary" @click="goLogin">跳转到首页</van-button>
  </div>
</template>
<script lang="ts" setup="props">
import { useRouter } from "vue-router";
const router = useRouter();
const goLogin = () => {
  router.push("/");
};
</script>