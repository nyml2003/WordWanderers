<template>
  <el-form ref="form" :model="form" label-width="80px">
    <h2 class="login_title">登录 Word Wanderers</h2>
    <el-form-item label="用户名">
      <el-input v-model="form.username" placeholder="Username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.password" placeholder="Password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">→</el-button>
    </el-form-item>
    <div class="login_register">
      <p>Don't have a Word Wanderers account yet?</p>
      <router-link to="/userRegister" style="color:rgb(47,110,195);">Get started here</router-link>
    </div>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      // 提交表单
    }
  }
}
</script>
