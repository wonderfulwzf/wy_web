<template>
 <div class="col-md-4 ">
  <Card style="width: 320px">
   <div style="text-align: center">
    <img class="img-fluid" :src="heatsumary.image" />
     <h4 class="">{{ heatsumary.name }}</h4>
     <!-- <p class="card-text">{{ heatsumary.describe }}</p> -->
      <Row type="flex" justify="center" align="middle" class="code-row-bg">
          <Col span="8"><Icon type="md-flame" color="red" />{{ heatsumary.heat }}</Col>
          <Col span="8"><Button type="primary" ghost :to="'/detail?id=' + heatsumary.id">视频详情</Button ></Col>
          <Col span="8">时长:{{ heatsumary.time | formatSecond }}</Col>
      </Row>
   </div>
  </Card>
 </div>
</template>

<script>
export default {
 name: "TheVideo",
 props: {
  heatsumary: {},
 },
 data: function () {
  return {};
 },
};
</script>

<style>



</style>
