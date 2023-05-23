<template>
  <el-container>
    <!--左侧导航栏-->
    <el-aside>
        <navleft @writeBlog="changeToWriteBlog" @personalInfo="changeToPersonalInfo" @myHome="changeToMyHome" :pos="pos"></navleft>
    </el-aside >
    <!--主内容栏-->
    <el-main>
      <writeBlog v-if="pos=='1'" :user_id="user_id"   :onClose=handleChildClose></writeBlog> <!--显示写博客界面-->
      <personalInfo v-if="pos=='2'"></personalInfo><!--显示个人信息界面-->
      <myBlogPage v-if="pos=='3'"></myBlogPage>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref,computed } from 'vue'
import navleft from "@/components/navLeft.vue"
import writeBlog from "@/components/writeBlog.vue"
import personalInfo from "@/components/personalInfo.vue"
import myBlogPage from "@/components/myBlogPage.vue"
import { useStore } from 'vuex';
const state=computed(()=>useStore().state)
const user_id=computed(()=>state.value.user.id)
const pos=ref('2')
const changeToWriteBlog = () => {
  pos.value = '1';
};
const changeToPersonalInfo = () => {
  pos.value = '2';
};
const changeToMyHome = () => {
  pos.value = '3';
};
const handleChildClose = () => {
  pos.value = '2';
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