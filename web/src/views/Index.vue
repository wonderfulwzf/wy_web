<template>
 <main role="main">
  <section class="jumbotron text-center">
   <div class="container">
    <h1>往忆视频</h1>
    <p class="lead text-muted">记录一些值得回味的视频，供大家欣赏！</p>
    <p class="lead text-muted">create by:王智芳</p>
    <p>
     <router-link to="/list" class="btn btn-primary my-2">开启视频之旅</router-link>
     &nbsp;&nbsp;
     <a href="#" class="btn btn-primary my-2">你可能喜欢的</a>
    </p>
   </div>
  </section>

  <div class="album py-5 bg-light">
   <div class="container">
    <div class="title1">当前最热</div>
    <div class="row">
     <!-- 遍历最热的视频 -->
     <div class="col-md-4" v-for="o in heatsumarys" v-bind:key="o.id">
       <the-video v-bind:heatsumary="o"></the-video>
     </div>
    </div>
   </div>
  </div>
 </main>
</template>

<script>
import TheVideo from '../components/TheVideo.vue';
export default {
 name: "index",
 components: { TheVideo },
 data: function () {
  return {
   heatsumarys: [],
  };
 },
 mounted() {
  let _this = this;
  _this.heatVideo();
 },
 methods: {
  /**
   * 查询新上好课
   */
  heatVideo() {
   let _this = this;
   _this.$ajax
    .post(process.env.VUE_APP_SERVER + "/business/web/sumary/heat",{
      pageNo:1,
      pageSize:6
    })
    .then((response) => {
     console.log("查询当前最热的视频", response);
     let resp = response.data;
     if (resp.success) {
      _this.heatsumarys = resp.data.records;
     }
    })
    .catch((response) => {
     console.log("error：", response);
    });
  },
 },
};
</script>

<style>
.title1 {
 margin-bottom: 2rem;
 color: #ff5c38;
 letter-spacing: 0;
 text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777,
  0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333,
  0px 8px 7px #001135;
 font-size: 2rem;
}
.title2 {
 margin-bottom: 2rem;
 color: transparent;
 -webkit-text-stroke: 1px black;
 letter-spacing: 0.04em;
 font-size: 2rem;
}
</style>
