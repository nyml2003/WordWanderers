<template>
    <el-menu @select="handleSelect">
              <el-menu-item index="1">
                <el-icon><Edit /></el-icon>
                <span>写博客</span>
              </el-menu-item>
              <el-menu-item index="2">
                <el-icon><UserFilled /></el-icon>
                <span>个人信息</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon><View /></el-icon>
                <span>我的主页</span>
              </el-menu-item>
    </el-menu>
  </template>
<script setup>

import { defineEmits } from 'vue'

const emit = defineEmits(['writeBlog', 'personalInfo', 'myHome']);

const handleSelect = (index) => {
  switch (index) {
    case '1':
      emit('writeBlog');
      break;
    case '2':
      emit('personalInfo');
      break;
    case '3':
      emit('myHome');
      break;
  }
}
</script>

<style>
.func {
  height: 20px;
  padding: 0px;
  margin:0px;
  text-align:start;
}
.func .p{
  text-size-adjust: auto;
}
.el-menu {
    border: none !important;
}
.el-aside {
  border-right: 2px solid #E6E6E6;
  padding-top: 20px;
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 90%;
  width: 160px !important;
}

.el-menu-item{
    background-color: white;
    color: gray;
    border-radius: 10px;
    padding-left: 27px !important;
    font-size: 16px;
}
.el-menu-item:hover{
    border: none;
    color: black;
    background-color: #E6E6E6;
}
</style>
