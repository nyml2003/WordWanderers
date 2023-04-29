<template>
  <div>
    <div class="box-card">
      <el-card @click="$router.push({ name: 'BlogPresent', params: { blogId: blog.id } })">
        <template #header>
          <div class="card-header">
            <h3>{{ blog.title }}{{ blog.id }}</h3>
            <p class="author">作者：{{ blog.user }}{{ blog.id }}</p>
          </div>
        </template>
        <p style="font-size: xx-small;color:grey">{{ blog.content }}</p>
      </el-card>
      <div class="info">
        <el-button type="primary">
          <el-icon-thumb-up></el-icon-thumb-up> 
          {{ blog.likes }}
        </el-button>
        <el-button type="info">
          <el-icon-view></el-icon-view> 
          {{ blog.views }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ElIconThumbUp, ElIconView } from '@element-plus/icons';

export default {
  name: 'BlogPresent',
  components: {
    ElIconThumbUp,
    ElIconView
  },
  data() {
    return {
      blog: {},
    };
  },
  mounted() {
    const blogId = this.$route.params.blogId;
    this.blog = { id: blogId, title: '测试博文', user: '作者', content: '博文内容', likes: 10, views: 100 };
  },
};
</script>

<style scoped>
.box-card {
  margin-top: 20px;
  margin-left: 5%;
  margin-right: 5%;
}
.author {
  font-size: x-small;
  color: grey;
}
.info {
  margin-top: 20px;
}
</style>
