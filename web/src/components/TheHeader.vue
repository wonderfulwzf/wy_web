<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
   <a class="navbar-brand" href="#">
    <i class="fa fa-video-camera"></i>&nbsp; 往忆视频</a
   >
   <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
   >
    <span class="navbar-toggler-icon"></span>
   </button>

   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     <li class="nav-item active">
      <a class="nav-link" href="#"
       >主页 <span class="sr-only">(current)</span></a
      >
     </li>
     <li class="nav-item active">
      <a class="nav-link" href="#">全部视频</a>
     </li>
     <li class="nav-item dropdown">
      <a
       class="nav-link dropdown-toggle active"
       href="#"
       id="navbarDropdown"
       role="button"
       data-toggle="dropdown"
       aria-haspopup="true"
       aria-expanded="false"
      >
       更多
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
       <a class="dropdown-item" href="#">关于我们</a>
       <a class="dropdown-item" href="#">渠道合作</a>
       <div class="dropdown-divider"></div>
       <a class="dropdown-item" href="#">更多信息</a>
      </div>
     </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
     <input
      class="form-control mr-sm-2"
      type="search"
      placeholder="搜索"
      aria-label="Search"
     />
     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
      搜索
     </button>
    </form>
    <button
     class="btn btn-outline-success my-2 my-sm-0"
     type="submit"
     style="margin: 6px"
    >
     登录
    </button>
   </div>
  </div>
 </nav>
</template>

<script>
export default {
 name: "TheHeader",
};
</script>
