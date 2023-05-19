<template>
  <el-row style="align-items: center; justify-content: center; height:100% width:100%">
  <el-form
    label-position="top"
    label-width="80px"
    style="width: fit-content;"
  >
    <h2 class="login_title">登录 Word Wanderers</h2>
      <el-form-item label="用户名">
        <el-input v-model="username" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input  v-model="password" placeholder="Password"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
   <div class="login_register">
      <p>Don't have a Word Wanderers account yet?</p>
      <router-link to="/userRegister" style="color:rgb(47,110,195);">Get started here</router-link>
    </div>
  </el-form>
  </el-row>
 
</template>

<script setup>
import { ref } from 'vue'
import DataService from '@/components/services/DataService'
import { ElNotification } from 'element-plus'
import { useStore} from 'vuex'
import router from '@/router';
const store=useStore()
const password=ref('')
const username=ref('')
const submit=async()=>{
  const response=await DataService.isInputRight(username.value,password.value)
  console.log(response.data)
  if (response.data.isRight === false){
    ElNotification({
    title: '登录失败',
    message: '用户名或密码错误',
  })
  }else{
    store.commit("setUser",response.data.user)
    router.push({path:'/MyPage'})
  }

}
</script>

<style src="../assets/css/login.css" scoped></style>