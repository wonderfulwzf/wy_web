<template>
<div>
    <p>id:{{summaryId}}</p>
    <p>概览信息:{{summary}}</p>
    <p>主演信息{{actor}}</p>
    <p>视频信息{{videos}}</p>
    </div>
</template>
<script>
export default {
 data() {
  return {
      summaryId:"",
      summary:{},
      actor:{},
      videos:[],
  };
 },
 mounted() {
  let _this = this;
  _this.summaryId = _this.$route.query.id;
  console.log(_this.summaryId);
  _this.getAllMessage();
 },
 methods: {
  //列表查询
  getAllMessage() {
   let _this = this;
   _this.$ajax
    .get(process.env.VUE_APP_SERVER + "/business/web/summary/find_all/"+_this.summaryId)
    .then((response) => {
     let resp = response.data;
     if (resp.success) {
      _this.summary = resp.data;
      _this.actor = resp.data.actorDto;
      _this.videos = resp.data.videoDtos;
      console.log(_this.summary);
     }
    })
    .catch((response) => {
     console.log("error：", response);
    });
  },
 },
};
</script>
