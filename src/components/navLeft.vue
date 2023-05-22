<template>
    <el-menu @select="handleSelect">
              <el-menu-item index="1">
                <el-icon><Edit /></el-icon>
                <span>Write Blog</span>
              </el-menu-item>
              <el-menu-item index="2">
                <el-icon><UserFilled /></el-icon>
                <span>Info</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon><View /></el-icon>
                <span>My Blogs</span>
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
    margin-left: 0px;
}
.el-aside {
  border-right: 2px solid #E6E6E6;
  padding-top: 0px;
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 100px;
  height: 90%;
  width: 170px !important;
}

.el-menu-item{
    height: 35px !important;
    margin-top: 5px;
    margin-right: 20px;
    background-color: white;
    color: gray !important;
    border-radius: 5px;
    padding-left: 15px !important;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: 300;
}
.el-menu-item:hover{
    border: none;
    background-color: #E6E6E6 !important;
}
.el-menu-item.is-active {
  background-color: rgb(89,154,245) !important;
  color: white !important;
}
</style>
