<template>
  <div class="app-container">
    <div class="app-head">
      <Head></Head>
    </div>
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>    
<script>
import Head from "components/Head.vue";

export default {
  name: "vueApp",
  components: { Head },
  data() {
    return {
      name: "hello vue app",
      title: "hahaha"
    };
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  position: relative;
  height: 100%;
  width: 100%;
  .app-head {
    height: 60px;
  }
  .app-main {
    height: calc(100% - 60px);
  }
}
</style>

