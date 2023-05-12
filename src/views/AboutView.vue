<template>
  <div class="block text-center">
    <el-carousel height="90vh" >
      <el-carousel-item class="show" v-for="item in this.poster" :key="item">
        <h1 class="small justify-center" text="2xl">{{ item.job }}</h1>
        <h2 class="small justify-center" text="2xl">By: {{ item.name }}</h2>
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
        { name: '曾楚童  黄再华', job: '前端逻辑 & UI设计' },
        { name: '李宝锟', job: '数据库 & 接口设计' },
        { name: '蒋钦禹  曾诗倬', job: '后端 & 前后端交互' }
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
  padding: 30vh;
}
.el-carousel__item h1 {
  color: white;
  line-height: 150px;
  margin: 0;
  text-align: center;
  font-weight: 330;
  font-size: 60px;
}

.el-carousel__item h2 {
  color: white;
  line-height: 120px;
  margin: 0;
  text-align: center;
  font-weight: 300;
  font-size: 30px;
}

.el-carousel__item:nth-child(3n) {
  background-color: rgb(45, 151, 200);
}

.el-carousel__item:nth-child(3n + 1) {
  background-color: rgb(195, 138, 149);
}
.el-carousel__item:nth-child(3n + 2) {
  background-color: RGB(131, 175, 155);
}
</style>