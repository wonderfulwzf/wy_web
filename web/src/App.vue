<template>
 <div>
  <!-- 头部 -->
  <TheHeader></TheHeader>
  <!-- 内容 -->
  <router-view></router-view>
  <!-- 底部 -->
  <TheFooter></TheFooter>
 </div>
</template>
<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
export default {
 name: "App",
 components: { TheFooter, TheHeader },
};
</script>
