<template>
  <AppNav />
  <div class="px-5">
    <router-view />
  </div>
</template>
<script>
import AppNav from "./components/nav-bar.component.vue";
export default {
  components: {
    AppNav,
  },
};
</script>
<style></style>
