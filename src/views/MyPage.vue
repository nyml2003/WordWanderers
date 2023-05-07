<template>
  <el-container>
    <el-aside width="180px">
        <navleft/>
    </el-aside>
  </el-container>
</template>

<script>
import navleft from "@/components/nav-left.vue"
export default {
    name: 'MyPage',
    components: {
      navleft
    }
  }
</script>

<style>
.el-container{
    height: 100vh;
}
</style>
