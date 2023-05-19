<template>
  <el-container>
    <el-aside>
        <!--左侧导航栏-->
        <navleft @writeBlog="changeToWriteBlog" @personalInfo="changeToPersonalInfo" @myHome="changeToMyHome"></navleft>
    </el-aside >
    <el-main>
      <writeBlog v-if="pos==1"></writeBlog>
      <personalInfo v-if="pos==2"></personalInfo>
    </el-main>
  </el-container>
</template>

<script setup>
import navleft from "@/components/nav-left.vue"
import writeBlog from "@/components/writeBlog.vue"
import personalInfo from "@/components/personalInfo.vue"
import { ref } from 'vue'
const pos=ref(1)
const changeToWriteBlog=()=>{
  pos.value=1
}
const changeToPersonalInfo=()=>{
  pos.value=2
}
const changeToMyHome=()=>{
  pos.value=3
}
</script>

<style>
.el-container{
    height: 100vh;
}
.el-main {
  width:75%;
}
</style>
