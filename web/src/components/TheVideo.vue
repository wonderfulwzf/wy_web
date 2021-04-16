<template>
 <div class="col-md-4 ">
  <Card style="width: 320px">
   <div style="text-align: center" >
    <img class="img-fluid" :src="summary.image" />
     <h4 class="">{{ summary.name }}</h4>
     <!-- <p class="card-text">{{ heatsumary.describe }}</p> -->
      <Row type="flex" justify="center" align="middle" class="code-row-bg">
           <Col span="8"><Button type="primary" ghost :to="'/detail?id=' + summary.id">视频详情</Button ></Col>
           <Col span="8"><Tag color="error">时长:{{summary.time | formatSecond }}</Tag></Col>
          <Col span="8"><Tag color="warning"><Icon type="md-flame" color="red" />{{ summary.heat }}</Tag></Col>  
      </Row>
   </div>
  </Card>
 </div>
</template>

<script>
export default {
 name: "TheVideo",
 props: {
  summary: {},
 },
 data: function () {
  return {};
 },
};
</script>

<style>

</style>
