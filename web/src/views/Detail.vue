<template>
 <div class="album py-5 bg-light">
  <div class="container">
   <Row>
    <Col span="16">
     <!-- <img src="//puui.qpic.cn/vcover_vt_pic/0/mzc002007edivq01617092726239/350" alt="视频封面" style="width: 700px; height: 389px"/> -->
     <div>
      <player
       ref="detailplayer"
       :player-id="'detailplayer'"
       style="width: 700px; height: 389px"
      ></player>
     </div>

     <List item-layout="vertical" style="margin-top: 30px">
      <ListItem v-for="item in comment" :key="item.title">
       <ListItemMeta
        :avatar="item.avatar"
        :title="item.title"
        :description="item.description"
       />
       {{ item.content }}
       <template slot="action">
        <li><Icon type="ios-star-outline" /> 123</li>
        <li><Icon type="ios-thumbs-up-outline" /> 234</li>
        <li><Icon type="ios-chatbubbles-outline" /> 345</li>
       </template>
      </ListItem>
     </List>
    </Col>
    <Col span="8">
     <Row style="text-align: center">
      <Col span="24"
       ><h3>{{ summary.name }}</h3></Col
      >
     </Row>
     <List border>
      <ListItem>简介:{{ summary.describe }}</ListItem>
      <ListItem>
       <div style="height: 285px">
        <Row v-if="videos.length>4">
         <!-- 遍历集数 -->
         <Col span="6" v-for="(video, i) in videos" v-bind:key="i" style="margin-top: 10px" >
          <div>
           <Button type="success" shape="circle" v-on:click="checkvideo(video)"
            ><Icon type="logo-yen" v-if="video.charge == 1" size="small" /><Icon
             type="ios-play"
             v-else
             size="small"
            />第{{ i + 1 }}集</Button
           >
          </div>
         </Col>
        </Row>
        <Row  type="flex" justify="space-around" class="code-row-bg" v-else>
         <!-- 遍历集数 -->
         <Col span="6" v-for="(video, i) in videos" v-bind:key="i" style="margin-top: 10px" >
          <div>
           <Button type="success" shape="circle" v-on:click="checkvideo(video)"
            ><Icon type="logo-yen" v-if="video.charge == 1" size="small" /><Icon
             type="ios-play"
             v-else
             size="small"
            />第{{ i + 1 }}集</Button
           >
          </div>
         </Col>
        </Row>
       </div>
      </ListItem>
      <ListItem>
       <Card style="width: 320px">
        <div style="text-align: center">
         <h4>主演:{{ actor.name }}</h4>
         <img :src="actor.image" :title="actor.intro" />
        </div>
       </Card>
      </ListItem>
     </List>
     <!-- <p>id:{{ summaryId }}</p>
     <p>概览信息:{{ summary }}</p>
     <p>主演信息{{ actor }}</p>
     <p>视频信息{{ videos }}</p>
     864 x 486 -->
    </Col>
   </Row>
  </div>
 </div>
</template>
<script>
import Player from "../components/Player.vue";

export default {
 components: { Player },
 name: "wy_detail",
 data() {
  return {
   summaryId: "",
   summary: {},
   actor: {},
   videos: [],
   comment: [
    {
     title: "会员00****00",
     description: "萌新",
     avatar:
      "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
     content: "我第一次看感觉真的很nice！",
    },
    {
     title: "会员00****02",
     description: "小影迷",
     avatar:
      "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
     content: "百看不腻，爱了！",
    },
    {
     title: "会员00****03",
     description: "忠实影迷",
     avatar:
      "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
     content: "我都看了N遍了,没事就喜欢重温经典！",
    },
   ],
   playname: "",
   vod: "",
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
    .get(
     process.env.VUE_APP_SERVER +
      "/business/web/summary/find_all/" +
      _this.summaryId
    )
    .then((response) => {
     let resp = response.data;
     if (resp.success) {
      _this.summary = resp.data;
      _this.actor = resp.data.actorDto;
      _this.videos = resp.data.videoDtos;
      console.log(_this.summary);
      if (_this.vod == "") {
       _this.vod = _this.videos[0].vod;
      }
      _this.playname = "detailplayer";
      _this.$refs[_this.playname].playVod(_this.vod);
     }
    })
    .catch((response) => {
     console.log("error：", response);
    });
  },
  checkvideo(video) {
   let _this = this;
   _this.vod = video.vod;
   _this.getAllMessage();
  },
 },
};
</script>
