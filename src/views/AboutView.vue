<template>
  <div class="block text-center">
    <el-carousel height="87vh" >
      <el-carousel-item class="show" v-for="item in this.poster" :key="item">
        <div>
          <h1 class="small justify-center" text="2xl">{{ item.job }}</h1>
          <h2 class="small justify-center" text="2xl">By: {{ item.name }}</h2>
          <!-- <img class="i_img" src="@/assets/about_pic.png"> -->
        </div>
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
  background-color: black;
}

.el-carousel__item:nth-child(3n + 1) {
  background-color: black;
}
.el-carousel__item:nth-child(3n + 2) {
  background-color: black;
}
</style>