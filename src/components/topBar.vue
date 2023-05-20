<template>
    <div class="top-bar">
      <div>
        <img class="icon" src="@/assets/icon.png">
        <img class="logo" src="@/assets/logo.png">
      </div>
      <div class="spacer"></div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
      <div class="search-box">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="Search..." v-bind="content" @keydown="searchByKey" v-on:click="searchByblur">
      </div>
      <div class="user" >
        <el-avatar :size="30" v-if="isLogin" :src="avatar" @click="handleAvatarClick"></el-avatar>
        <el-avatar :size="30" v-else icon="UserFilled"  @click="handleAvatarClick"/>
      </div>
    </div>
</template>

<script setup>
import { computed,ref} from 'vue';
import {useStore} from 'vuex'
import { useRouter } from 'vue-router';
const router = useRouter();
const content = ref('')
const state=computed(()=>useStore().state)
const isLogin=computed(()=>state.value.isLogin)
const avatar=computed(()=>state.value.user.avatar)
const handleAvatarClick=()=>{
    if(isLogin.value){
        router.push({path:'/MyPage'})
    }else{
        router.push({path:'/userLogin'})
    }
}
const searchByKey=(event)=>{
  if(event.keyCode===13){
    search()
  }
}
const searchByblur=()=>{
    search()
}
const search=()=>{
    router.push({path:'/blog',params:{content:content.value}})
}
</script>


<style scoped>
    @import url(@/assets/css/nav_bar.css);
</style>