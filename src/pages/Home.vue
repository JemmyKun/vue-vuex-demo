<template>
  <div>
    <h1>this is home page</h1>
    <h2>{{getCount}}</h2>
    <h2>{{count}}</h2>
    <button @click="addCount">addCount</button>
    <button @click="handleCount">1.5s后handleCount</button>
  </div>
</template>
<script>
import * as mutationType from "../store/mutationTypes";
import * as actionType from "../store/actionTypes";
import { mapGetters } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapGetters(["getCount"]),
    count: function() {
      return this.$store.state.count;
    }
  },
  methods: {
    addCount() {
      this.$store.commit(mutationType.GET_COUNT);
    },
    handleCount() {
      this.$store.dispatch(actionType.HANDLE_COUNT);
    }
  },
  mounted() {
    console.log(this.$store);
    this.$bus.$on("getToHomeData", data => {
      console.log("data:", data);
    });
  },
  destory() {
    this.$bus.$off("getToHomeData");
  }
};
</script>
