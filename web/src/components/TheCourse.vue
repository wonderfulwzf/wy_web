<template>
  <div class="card mb-4 shadow-sm course">
    <img class="img-fluid" v-bind:src="course.image">
    <div class="card-body">
      <h4 class="">{{course.name}}</h4>
      <p class="card-text">{{course.sunmary}}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <router-link v-bind:to="'/detail?id=' + course.id" class="btn btn-outline-secondary">视频详情</router-link>
        </div>
        <div class="text-muted">
          <span class="badge badge-info"><i class="fa fa-yen" aria-hidden="true"></i>&nbsp;{{course.price}}</span>&nbsp;
          <span class="badge badge-info"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;{{course.enroll}}</span>&nbsp;
          <span class="badge badge-info">{{COURSE_LEVEL | optionKV(course.level)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheCourse',
    props: {
      course: {}
    },
    data: function () {
      return {
        COURSE_LEVEL: {ONE:{key:"1", value:"初级"},TWO:{key:"2", value:"中级"},THREE:{key:"3", value:"高级"}}
      }
    },
  }
</script>

<style>
  .course h4 {
    font-size: 1.25rem;
    margin: 15px 0;
  }

  .course .text-muted .badge {
    font-size: 1rem;
  }
</style>
