<template>
    <div class="blog-editor">
      <el-form ref="form" :model="blog" label-width="40px">
        <el-form-item label="标题">
          <el-input v-model="blog.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <textEditor ref="editor" v-model="blog.content"></textEditor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitBlog">发布</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import textEditor from "@/components/textEditor.vue";
  
  export default {
    name: "BlogEditor",
    components: {
      textEditor,
    },
    data() {
      return {
        blog: {
          title: "",
          content: "",
        },
      };
    },
    methods: {
      submitBlog() {
        // 将博客内容转换为Markdown格式存储
        this.$refs.editor.getContent();
        // 提交博客数据到后台
        // ...
      },
    },
  };
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
  