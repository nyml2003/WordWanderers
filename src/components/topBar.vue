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
        <el-avatar :size="30" v-if="isLoggedin">{{ username }}</el-avatar>
        <el-avatar :size="30" v-else icon="UserFilled" @click="handleAvatarClick" />
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedin: false,
      username: '',
    };
  },
  methods: {
    handleAvatarClick() {
      if (this.isLoggedin) {
        this.$router.push({ name: 'homepage' });//若登录成功，点击头像则会跳到个人界面
      } else {
        this.$router.push({ name: 'MyPage' });
        //this.$router.push({ name: 'userLogin' });
      }

    },
    handleLogin() {
      // 登录成功后将用户名存储在this.username中
      // 并设置isLoggedin为true
      this.username = '？？';
      this.isLoggedin = true;
    },
  },
  mounted() {
    // 页面加载时检查用户是否已登录
    if (this.$store.state.isLoggedin) {
      this.handleLogin();
    }
  },
};
</script>


<style>
    @import url(@/assets/css/nav_bar.css);
</style>