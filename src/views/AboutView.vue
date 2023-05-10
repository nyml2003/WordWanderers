<template>
  <div style="height: 150px;">
  </div>
  <div class="block text-center">
    <el-carousel height="400px" type="card">
      <el-carousel-item class="show" v-for="item in this.poster" :key="item">
        <h1 class="small justify-center" text="2xl">{{ item.job }}</h1>
        <h2 class="small justify-center" text="2xl">{{ item.name }}</h2>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      poster: [
        { name: '曾楚童  黄再华', job: '前端开发' },
        { name: '李宝锟', job: '数据库、接口设计' },
        { name: '蒋钦禹  曾诗倬', job: '后端、前后端交互' }
      ]
    };
  },
}
</script>

<style scoped>
.show {
  display: block; 
  justify-content: center; 
  align-items:center;
}
.el-carousel__item{
  padding: 65px;
}
.el-carousel__item h1 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item h2 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(3n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(3n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item:nth-child(3n + 2) {
  background-color:darkgrey;
}
</style>