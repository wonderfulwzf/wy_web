<template>
 <div>
  <TheHeader></TheHeader>
  <router-view></router-view>
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
