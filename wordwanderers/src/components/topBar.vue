<template>
  <el-menu 
    class="el-menu-demo" 
    mode="horizontal" 
    text-color="#000000"
    active-text-color="#3989fa">
  <el-menu-item index="1">
    <router-link to="/">主页</router-link>
  </el-menu-item>
  <el-menu-item index="2">
    <router-link to="/about">关于</router-link>
  </el-menu-item>
</el-menu>

</template>
 
 <script setup>

 </script>
 
 <style scoped>
 .el-menu-item a {
  text-decoration: none;
}
 </style>
 