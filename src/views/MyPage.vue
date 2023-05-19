<template>
  <el-container>
    <!--左侧导航栏-->
    <el-aside>
        <navleft @writeBlog="changeToWriteBlog" @personalInfo="changeToPersonalInfo" @myHome="changeToMyHome"></navleft>
    </el-aside >
    <!--主内容栏-->
    <el-main>
      <writeBlog v-if="pos==1"></writeBlog><!--显示写博客界面-->
      <personalInfo v-if="pos==2"></personalInfo><!--显示个人信息界面-->
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import navleft from "@/components/navLeft.vue"
import writeBlog from "@/components/writeBlog.vue"
import personalInfo from "@/components/personalInfo.vue"
const pos=ref(2)
const changeToWriteBlog = () => {
  pos.value = 1;
};
const changeToPersonalInfo = () => {
  pos.value = 2;
};
const changeToMyHome = () => {
  pos.value = 3;
};
</script>

<style>
.el-container{
    height: 100vh;
}
.el-main {
  width:75%;
}
</style>