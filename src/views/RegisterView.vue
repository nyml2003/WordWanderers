<template>
  <el-row style="align-items: center; justify-content: center; height:100% width:100%">
    <el-form
      ref="form"
      :model="{username,email,password,confirmpassword}"
      :rules="rules"
      status-icon
      label-position="top"
      label-width="100px"
      max-width="800px"
    >
      <h2 class="register_title">欢迎来到 Word Wanderers</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="username" placeholder="用户名长度为1-10，由数字、字母、汉字组成"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="email" placeholder="请填写您的邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="password" placeholder="密码长度为1-15，由数字、字母组成"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmpassword">
        <el-input v-model="confirmpassword" placeholder="请确认您的密码"></el-input>
      </el-form-item>
      <el-form-item >
        <el-col :span="24" style="text-align: center;">
          <el-button round plain type="info" size="large" @click="submit(form)" >注册</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'
import DataService from '@/components/services/DataService'
import { useStore} from 'vuex'
import router from '@/router';
const form=ref(null)
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/, message: '用户名只能包含数字、字母、汉字', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' },
    { pattern:/^[a-zA-Z0-9]+$/, message:'密码只能包含数字、字母', trigger:'blur'}
  ],
  confirmpassword:[
    { required:true, message:'请再次输入密码', trigger:'blur'},
    { validator:(rule,value,callback)=>{
      if(value!==password.value){
        callback(new Error('两次输入的密码不一致'))
      }else{
        callback()
      }
    },trigger:'blur'}
  ]
}
const store=useStore()
const password=ref('')
const username=ref('')
const email=ref('')
const confirmpassword=ref('')
const postData=async()=>{
  const response=await DataService.Register(username.value,password.value,email.value)
  console.log(response.data)
  store.commit("Register",response.data)
  router.push({path:'/MyPage'})
}
const submit=(() => {
  console.log("click")
  console.log(form.value)
  if (form.value===null) return
  form.value.validate((valid) => {
    if (valid) {
      postData()
      console.log('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
})
</script>

<style src="@/assets/css/register.css" scoped></style>