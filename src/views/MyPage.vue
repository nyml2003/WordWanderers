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

<script>
import navleft from "@/components/nav-left.vue"
import writeBlog from "@/components/writeBlog.vue"
import personalInfo from "@/components/personalInfo.vue"
export default {
  name: 'MyPage',
  data() {
    return {
      pos:2,
    };
  },
  components: {
      navleft,
      writeBlog,
      personalInfo,
  },
  methods: {
    changeToWriteBlog() {
      this.pos = 1;
    },
    changeToPersonalInfo() {
      this.pos = 2;
    },
    changeToMyHome() {
      this.pos = 3;
    }
  },
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
