<template>
  <div class="app-head-box">
    <div class="logo-box">
      {{title}}
      <span @click="goBack">返回</span>
    </div>
    <ul class="head-menu">
      <!-- <li
        v-for="(item,index) in list"
        :key="index"
        @click="goPage(item.path)"
        :class="{ active: item.path == currentPath }"
      >{{item.name}}</li>-->
      <router-link
        v-for="(item,index) in list"
        :key="index"
        :to="item.path"
        class="link-item"
      >{{item.name}}</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "headVue",
  data() {
    return {
      title: "hello vue",
      currentPath: "/",
      list: [
        {
          name: "首页",
          path: "/"
        },
        {
          name: "文化",
          path: "/culture"
        },
        {
          name: "关于",
          path: "/about"
        }
      ]
    };
  },
  methods: {
    goPage(path) {
      this.$router.push(path);
      this.currentPath = path;
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
      this.getCurrentPath();
    },
    getCurrentPath() {
      let pathname = window.location.hash.replace("#", "");
      this.currentPath = pathname;
    }
  },
  mounted() {
    this.getCurrentPath();
  }
};
</script>
<style scoped lang="scss">
.app-head-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  line-height: 60px;
  background: #0f8aff;
  color: #fff;
  font-size: 16px;
  padding: 0 20px;
  .logo-box {
    width: 40%;
  }
  .head-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 60%;
    .link-item,
    li {
      color: #fff;
      height: 100%;
      padding: 0 30px;
      cursor: pointer;
      padding-bottom: 1px;
      border-bottom: 2px solid transparent;
      &.router-link-exact-active,
      &.active,
      &:hover {
        color: #f75d62;
      }
      &.active {
        border-bottom: 2px solid red;
      }
    }
  }
}
</style>


