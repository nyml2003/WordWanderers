<template>
    <div class="blog-editor">
      <el-form ref="form" :model="blog" label-width="40px">
        <el-form-item label="标题">
          <el-input
          :rows="1" type="textarea" placeholder="请输入标题" 
          v-model="blog.title"></el-input>
        </el-form-item>

        <el-form-item label="摘要">
          <el-input 
            :rows="3" type="textarea" placeholder="请输入摘要，不超过100字" 
            v-model="blog.description"></el-input>
        </el-form-item>

        <el-form-item label="分类">
          <el-radio-group v-model="blog.type" size="default">
            <el-radio-button label="原创" />
            <el-radio-button label="翻译" />
            <el-radio-button label="转载" />
          </el-radio-group>
        </el-form-item>

        <el-form-item label="内容">
          <v-md-editor ref="editor" v-model="blog.content"></v-md-editor>
        </el-form-item>

        <el-form-item style="margin-left: 44%;">
          <el-button type="primary" round @click="submitBlog">发布</el-button>
        </el-form-item>

      </el-form>
    </div>
  </template>
  
<script setup>
  import { ref } from 'vue';
  import DataService from '@/components/services/DataService'
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
const router = useRouter()
const user_id=useStore().state.user.id
  const blog = ref({
    title: "",
    description: "",
    content: "",
    type: "原创",
  });
  
  const submitBlog = () => {
    console.log(blog.value)
    submit()
    console.log("submit ok")
    router.push({path:'/blog',query:{content:''}})
    // 将博客内容转换为Markdown格式存储
    // 提交博客数据到后台
    // ...
  };
  const submit=async()=>{
    const responce=await DataService.insertBlog(user_id,blog.value.type,blog.value.description,blog.value.title,blog.value.content)
    console.log(responce.data)
  }

</script>

  
<style scoped>
  .blog-editor {
    width:100%;
    height: 90%;
    margin: 0 auto;
  }
  .el-form {
    width: 100%;
    height: 100%;
    margin-left: 0px;
    margin-top: 0px;
    border-color:#E6E6E6;
  }
  </style>
  