<template>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <el-container>
<el-header>
    <topBar/>
  </el-header>
  <el-main style="justify-content: center; align-items: center; width: 100%;height:100%">
    <router-view ></router-view>
  </el-main>
  
  <el-footer style="display: flex; justify-content: center; align-items: center; width: fit-content;">
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
  display: flex;
  border-top: 2px solid rgb(228, 226, 226);
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-items: center;
}
.logo {
  width: 140px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: auto;
}
</style>
