<template>
  <div>
    <h1>this is about page</h1>
    <List :name="name" :list="listData" @getData="getData"></List>
  </div>
</template>
<script>
import List from "./List.vue";

export default {
  name: "about",
  components: { List },
  data() {
    return {
      name: "hello list",
      listData: [
        {
          name: "212",
          id: 32
        },
        {
          name: "212",
          id: 32
        }
      ]
    };
  },
  methods: {
    getData(data) {
      console.log("data:", data);
    }
  },
  mounted() {
    console.log(this.$store);
    this.$bus.$on("getToHomeData", data => {
      console.log("eventBus - data:", data);
    });
  },
  destory() {
    this.$bus.$off("getToHomeData");
  }
};
</script>
