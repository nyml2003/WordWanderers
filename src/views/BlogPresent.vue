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
        <div class="info">
          
          <span><el-icon name="thumb" style="color: red;"></el-icon> {{ blog.likes }}</span>
          <span><el-icon><ChatRound /></el-icon> {{ blog.comments }}</span>
        </div>
      </el-card>
    </div>
  </div>
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <el-icon :size="20">
    <Edit />
  </el-icon>
  <el-icon color="#409EFC" class="no-inherit">
    <Share />
  </el-icon>
  <el-icon>
    <Delete />
  </el-icon>
  <el-icon class="is-loading">
    <Loading />
  </el-icon>
  <el-button type="primary">
    <el-icon style="vertical-align: middle">
      <Search />
    </el-icon>
    <span style="vertical-align: middle"> Search </span>
  </el-button>
</template>

<script >
export default {
  name: 'BlogPresent',
  data() {
    return {
      blog: {},
    };
  },
  mounted() {
    const blogId = this.$route.params.blogId;
    this.blog = { id: blogId, title: '测试博文', user: '作者', content: '博文内容', likes: 10, comments: 5 };
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
  display: flex;
  justify-content: space-between;
}
.info span {
  font-size: small;
  color: grey;
}
.info span i {
  margin-right: 5px;
}
</style>
