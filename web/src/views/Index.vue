<template>
 <main role="main">
  <section class="jumbotron text-center">
   <div class="container">
    <h1>往忆视频</h1>
    <p class="lead text-muted">记录一些值得回味的视频，供大家欣赏！</p>
    <p>
     <a href="#" class="btn btn-primary my-2">开启视频之旅</a>
     &nbsp;&nbsp;
     <a href="#" class="btn btn-primary my-2">你可能喜欢的</a>
    </p>
   </div>
  </section>

  <div class="album py-5 bg-light">
   <div class="container">
    <div class="row">
     <div class="col-md-4" v-for="o in news" v-bind:key="o.id">
      <div class="card mb-4 shadow-sm">
       <img class="img-fluid" v-bind:src="o.image" />
       <div class="card-body">
        <h4>{{ o.name }}</h4>
        <p class="card-text">{{ o.sunmary }}</p>
        <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
           View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
           Edit
          </button>
         </div>
         <small class="text-muted">9 mins</small>
        </div>
       </div>
      </div>
     </div>

     <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
       <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
       >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
       </svg>

       <div class="card-body">
        <p class="card-text">
         This is a wider card with supporting text below as a natural lead-in to
         additional content. This content is a little bit longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
           View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
           Edit
          </button>
         </div>
         <small class="text-muted">9 mins</small>
        </div>
       </div>
      </div>
     </div>
     <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
       <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
       >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
       </svg>

       <div class="card-body">
        <p class="card-text">
         This is a wider card with supporting text below as a natural lead-in to
         additional content. This content is a little bit longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
           View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
           Edit
          </button>
         </div>
         <small class="text-muted">9 mins</small>
        </div>
       </div>
      </div>
     </div>
     <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
       <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
       >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
       </svg>

       <div class="card-body">
        <p class="card-text">
         This is a wider card with supporting text below as a natural lead-in to
         additional content. This content is a little bit longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
           View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
           Edit
          </button>
         </div>
         <small class="text-muted">9 mins</small>
        </div>
       </div>
      </div>
     </div>

     <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
       <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
       >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
       </svg>

       <div class="card-body">
        <p class="card-text">
         This is a wider card with supporting text below as a natural lead-in to
         additional content. This content is a little bit longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
           View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
           Edit
          </button>
         </div>
         <small class="text-muted">9 mins</small>
        </div>
       </div>
      </div>
     </div>
     <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
       <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
       >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
       </svg>

       <div class="card-body">
        <p class="card-text">
         This is a wider card with supporting text below as a natural lead-in to
         additional content. This content is a little bit longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
           View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
           Edit
          </button>
         </div>
         <small class="text-muted">9 mins</small>
        </div>
       </div>
      </div>
     </div>
     <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
       <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
       >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
       </svg>

       <div class="card-body">
        <p class="card-text">
         This is a wider card with supporting text below as a natural lead-in to
         additional content. This content is a little bit longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
           View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
           Edit
          </button>
         </div>
         <small class="text-muted">9 mins</small>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </main>
</template>

<script>
export default {
 name: "index",
 data: function () {
  return {
   news: [],
  };
 },
 mounted() {
  let _this = this;
  _this.listNew();
 },
 methods: {
  /**
   * 查询新上好课
   */
  listNew() {
   let _this = this;

   // 新上好课不经常变，又经常被访问，适合用缓存
   // 判断是否有缓存
   //let news = SessionStorage.get("news");
  //  if (!Tool.isEmpty(news)) {
  //   _this.news = news;
  //   return;
  //  }

   _this.$ajax
    .get(process.env.VUE_APP_SERVER + "/business/web/course/list_new")
    .then((response) => {
     console.log("查询新上好课结果：", response);
     let resp = response.data;
     if (resp.success) {
      _this.news = resp.data;
      // 保存到缓存
     // SessionStorage.set("news", _this.news);
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
 color: #fafafa;
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
