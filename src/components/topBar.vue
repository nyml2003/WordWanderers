<template>
    <div class="top-bar">
      <div class="logo">Word Wanderers</div>
      <div class="spacer"></div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
      <div class="search-box">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="Search...">
      </div>
      <div class="user">
        <!-- <i class="fa fa-user"></i> -->
          <el-avatar :icon="UserFilled" />


      </div>
    </div>
</template>


<script setup>
  //import ElAvatar from 'element-plus';
  import { UserFilled } from '@element-plus/icons-vue'
</script>

<style>
    @import url(@/assets/css/nav_bar.css);
</style>