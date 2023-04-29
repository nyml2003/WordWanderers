<template>
    <div>
        <el-card class="box-card"  @click="$router.push({ name: 'BlogPresent', params: { blogId: blog.id } })">
            <template #header>
            <div class="card-header">
                <h3>{{ blog.title }}{{ blog.id }}</h3>
                <p class="author">作者：{{ blog.user }}{{ blog.id }}</p>
            </div>
            </template>
            <p style="font-size: xx-small;color:grey" >{{ blog.content }}</p>
        </el-card>
    </div>
</template>
  
<script>
  export default {
    name: 'BlogPresent',
    data() {
      return {
        blog: {},
      };
    },
    mounted() {
      // 根据 this.$route.params.blogId 获取博文数据的方法，例如发送 API 请求获取数据
      // 将获取的数据赋值给 this.blog
      const blogId = this.$route.params.blogId;
      // 发送 API 请求或其他操作来获取博文数据

      // 这里只是示例，你需要根据实际情况获取博文数据并赋值给 this.blog
          this.blog = { id: blogId, title: '测试博文', user: '作者', content: '博文内容' };
    },
  };
  </script>
  
  <style scoped>
    .box-card{
        margin-top: 20px;
        margin-left: 5%;
        margin-right: 5%;
    }
    .author{
        font-size: x-small;
        color: grey;
    }
</style>