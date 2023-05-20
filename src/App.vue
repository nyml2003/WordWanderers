<template>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <el-container style="margin:0 !important;padding: 0 !important;">
    <el-header>
      <topBar/>
    </el-header>
    <el-main style="justify-content: center; align-items: center; width: 100%;height:100%">
      <router-view ></router-view>
    </el-main>

    <el-footer class="foot">
      <img class="logo" src="@/assets/logo.png" >
    </el-footer>

  </el-container>
  
</template>

<script>
import topBar from '@/components/topBar.vue';

export default {
  name: 'HomeView',
  components: {
    topBar
    
  }
}
</script>

<style lang="scss" scoped>
.foot {
  height: 40px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-items: center;
}
.logo {
  width: 160px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: auto;
}
</style>
