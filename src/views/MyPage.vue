<template>
  <el-container>
    <el-aside width="160px">
        <!--左侧导航栏-->
        <navleft/>
    </el-aside>
    <el-main>
      <writeBlog></writeBlog>
    </el-main>
  </el-container>
</template>

<script>
import navleft from "@/components/nav-left.vue"
import writeBlog from "@/components/writeBlog.vue"
export default {
    name: 'MyPage',
    components: {
      navleft,
      writeBlog
    }
  }
</script>

<style>
.el-container{
    height: 100vh;
}
.el-main {
  width:90%;
}
</style>
