<template>
  <div>
    <h1>douban api test</h1>
    <div v-show="showLoading && !topMovies">加载中...</div>
    <ul class="movies-list">
      <li v-for="(item,index) in topMovies.subjects" :key="index">
        {{item.title}} --
        <span @click="DELETE_TOP_MOVIES(item.id)" class="delete">删除</span>
      </li>
    </ul>
    <button @click="add">ADD</button>
    <h1>{{count}}</h1>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import * as Apis from "../api/douban";
import * as Type from "../store/mutationTypes";
export default {
  data() {
    return {
      list: [],
      initCount: 0,
      showLoading: true
    };
  },
  computed: {
    ...mapState(["topMovies"]),
    count: function() {
      return this.initCount++;
    }
  },
  methods: {
    ...mapMutations(["GET_TOP_MOVIES", "DELETE_TOP_MOVIES"]),
    //初始化时获取基本数据
    async initData() {
      let res = await Apis.getTopMovies();
      this.showLoading = false;
      this.GET_TOP_MOVIES(res.data);
    },
    async getMovieDetail() {
      let res = await Apis.getMovieDetail();
      if (res.status === 200) {
        let data = res.data;
      }
    },
    add() {
      this.initCount++;
    }
  },
  mounted() {
    this.initData();
    this.getMovieDetail();
  }
};
</script>
<style lang="scss" scoped>
.movies-list {
  padding: 20px;
  .delete {
    cursor: pointer;
  }
}
</style>
