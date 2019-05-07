<template>
  <div class="list-item">
    <h1>{{name}}</h1>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
    </ul>
    <button @click="getToDAata">getData</button>
    <button @click="getToHome">eventBus</button>
  </div>
</template>
<script>
export default {
  props: { name: String, list: Array },
  data() {
    return {
      title: "hahhahhah"
    };
  },
  methods: {
    getToDAata() {
      this.$emit("getData", this.title);
    },
    getToHome() {
      this.$bus.$emit("getToHomeData", this.title);
    }
  },
  mounted() {
    this.getToDAata();
  }
};
</script>
