<template>
 <main role="main">
  <div class="header-nav">
   <div class="clearfix">
    <div class="container">
     <div class="row">
      <div class="col-12">
       <a
        v-on:click="onClickLevel1('00000000')"
        id="category-00000000"
        href="javascript:;"
        class="cur"
        >全部</a
       >
       <a
        v-for="o in level1"
        v-bind:key="o.id"
        v-on:click="onClickLevel1(o.id)"
        v-bind:id="'category-' + o.id"
        href="javascript:;"
        >{{ o.name }}</a
       >
      </div>
     </div>
    </div>
   </div>
  </div>
  <div class="skill clearfix">
   <div class="container">
    <div class="row">
     <div class="col-12">
      <a
       v-on:click="onClickLevel2('11111111')"
       id="category-11111111"
       href="javascript:;"
       class="on"
       >不限</a
      >
      <a
       v-for="o in level2"
       v-bind:key="o.id"
       v-on:click="onClickLevel2(o.id)"
       v-bind:id="'category-' + o.id"
       href="javascript:;"
       >{{ o.name }}</a
      >

      <div style="clear: both"></div>
     </div>
    </div>
   </div>
  </div>
  <div class="album py-5 bg-light">
   <div class="container">
    <!-- 视频内容 -->
    <div class="row">
     <div v-for="o in summarys" v-bind:key="o.id" class="col-md-4">
      <the-video v-bind:summary="o"></the-video>
     </div>
     <h3 v-show="summarys.length === 0">赶紧叫老王上传视频资源！</h3>
    </div>
    <br />
    <div class="row">
     <div class="col-md-12">
      <Row>
       <Col span="9"></Col>
       <Col span="12"
        ><Page
         :current="pageNo"
         :total="totalRecord"
         :page-size="pageSize"
         @on-change="handleCurrentChange"
         @on-page-size-change="handleSizeChange"
         show-sizer
         show-total
         :page-size-opts="pagesizelist"
       /></Col>
      </Row>
      <Col span=""></Col>
     </div>
    </div>
   </div>
  </div>
 </main>
</template>

<script>
import TheVideo from "../components/TheVideo.vue";
export default {
 components: { TheVideo },
 name: "list",
 data: function () {
  return {
   summarys: [],
   level1: [],
   level2: [],
   categorys: [],
   level1Id: "",
   level2Id: "",
   //分页查询参数
   pageNo: 1,
   totalRecord: 0,
   pageSize: 6,
   summary: {},
   pagesizelist:[6,12,18,24]
  };
 },
 mounted() {
  let _this = this;
  _this.allCategory();
  _this.listSummary(1);
 },
 methods: {
  //列表查询
  listSummary(pageNo) {
   let _this = this;
   _this.$ajax
    .post(process.env.VUE_APP_SERVER + "/business/web/summary/list_by_category", {
     pageNo: pageNo,
     pageSize: _this.pageSize,
     categoryId: _this.level2Id || _this.level1Id || "", // 优先取level2Id
    })
    .then((response) => {
     let resp = response.data;
     if (resp.success) {
      _this.summarys = resp.data.records;
      _this.totalRecord = resp.data.totalRecord;
     }
    })
    .catch((response) => {
     console.log("error：", response);
    });
  },
  //页码改变
  handleCurrentChange(page) {
   this.listSummary(page);
  },
  //改变页长
  handleSizeChange(size) {
   let _this = this;
   _this.pageSize = size;
   _this.listSummary(_this.pageNo);
  },
  //查询所有分类
  allCategory() {
   let _this = this;
   _this.$ajax
    .get(process.env.VUE_APP_SERVER + "/business/category/all")
    .then((response) => {
     let resp = response.data;
     let categorys = resp.data;
     _this.categorys = categorys;

     // 将所有记录格式化成树形结构
     _this.level1 = [];
     for (let i = 0; i < categorys.length; i++) {
      let c = categorys[i];
      if (c.parent === "00000000") {
       _this.level1.push(c);
      } else {
       _this.level2.push(c);
      }
     }
    });
  },

  /**
   * 点击一级分类时
   * @param level1Id
   */
  onClickLevel1(level1Id) {
   let _this = this;

   // 点击一级分类时，设置变量，用于课程筛选
   // 二级分类id为空，
   // 如果点击的是【全部】，则一级分类id为空
   _this.level2Id = null;
   _this.level1Id = level1Id;
   if (level1Id === "00000000") {
    _this.level1Id = null;
   }

   // 点击一级分类时，显示激活状态
   $("#category-" + level1Id)
    .siblings("a")
    .removeClass("cur");
   $("#category-" + level1Id).addClass("cur");

   // 点击一级分类时，二级分类【无限】按钮要设置激活状态
   $("#category-11111111").siblings("a").removeClass("on");
   $("#category-11111111").addClass("on");

   // 注意：要先把level2中所有的值清空，再往里放
   _this.level2 = [];
   let categorys = _this.categorys;
   // 如果点击的是【全部】，则显示所有的二级分类
   if (level1Id === "00000000") {
    for (let i = 0; i < categorys.length; i++) {
     let c = categorys[i];
     if (c.parent !== "00000000") {
      _this.level2.push(c);
     }
    }
   }
   // 如果点击的是某个一级分类，则显示该一级分类下的二级分类
   if (level1Id !== "00000000") {
    for (let i = 0; i < categorys.length; i++) {
     let c = categorys[i];
     if (c.parent === level1Id) {
      _this.level2.push(c);
     }
    }
   }

   // 重新加载课程列表
   _this.listSummary(_this.pageNo);
  },

  /**
   * 点击二级分类时
   * @param level1Id
   */
  onClickLevel2(level2Id) {
   let _this = this;
   $("#category-" + level2Id)
    .siblings("a")
    .removeClass("on");
   $("#category-" + level2Id).addClass("on");

   // 点击二级分类时，设置变量，用于课程筛选
   // 如果点击的是【无限】，则二级分类id为空
   if (level2Id === "11111111") {
    _this.level2Id = null;
   } else {
    _this.level2Id = level2Id;
   }

   // 重新加载课程列表
   _this.listSummary(_this.pageNo);
  },
 },
};
</script>
<style>
/* 头部 一级分类 */
.header-nav {
 height: auto;
 background: #fff;
 box-shadow: 0 8px 16px 0 rgba(28, 31, 33, 0.1);
 padding: 16px 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 /*background-color: #d6e9c6;*/
}
.header-nav > div {
 width: 100%;
 padding-left: 12px;
 box-sizing: border-box;
 margin-left: auto;
 margin-right: auto;
 /*background-color: #B4D5AC;*/
}
.header-nav a {
 float: left;
 font-size: 16px;
 color: #07111b;
 line-height: 50px;
 height: 45px;
 position: relative;
 margin-right: 46px;
 font-weight: 700;
}
.header-nav a:hover {
 color: #c80;
}
.header-nav a.cur {
 color: #c80;
}
.header-nav a.cur:before {
 display: block;
}
.header-nav a:before {
 display: none;
 content: " ";
 position: absolute;
 bottom: 0;
 background: #c80;
 width: 16px;
 height: 3px;
 left: 50%;
 margin-left: -8px;
}
/* 二级分类 */
.skill {
 width: 100%;
 padding: 24px 0 0;
 position: relative;
 margin: 0 auto;
}
.skill a.on {
 color: #c80;
 background: rgba(204, 136, 0, 0.1);
}
.skill a {
 float: left;
 margin-right: 20px;
 padding: 0 12px;
 font-size: 14px;
 color: #4d555d;
 line-height: 32px;
 border-radius: 6px;
 margin-bottom: 12px;
}
.skill a:hover {
 background: #d9dde1;
}
</style>
