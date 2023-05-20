<template>
  <el-row style="align-items: center; justify-content: center; height:100% width:100%">
  <el-form
  v-loading='loading'
    element-loading-text="Loading..."
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.1)"
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
        <el-col :span="24" style="text-align: center;">
          <el-button circle plain type="info" @click="submit" size="large">→</el-button>
        </el-col>
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
import router from '@/router'
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
const store=useStore()
const password=ref('')
const username = ref('')
const loading = ref(false)
const submit = async () => {
  loading.value = true;
  const response=await DataService.isInputRight(username.value,password.value)
  console.log(response.data)
  if (response.data.isRight === false) {
    loading.value = false;
    ElNotification({
    title: '登录失败',
    message: '用户名或密码错误',
  })
  } else {
    loading.value = false;
    store.commit("setUser",response.data.user)
    router.push({path:'/MyPage'})
  }

}
</script>

<style src="../assets/css/login.css" scoped></style>