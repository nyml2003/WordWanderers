<template>
  <div>
    <div class="box-card">
      <el-card>
        <template #header>
          <div class="card-header">
            <h2>{{ blog.title }}{{ blog.id }}</h2>
            <p class="author">作者：{{ blog.user }}{{ blog.id }}</p>
            <div class="info">
              <span><el-icon><CaretTop /></el-icon> {{ blog.likes }}</span>
              <span><el-icon><ChatRound /></el-icon> {{ blog.comments }}</span>
            </div>
          </div>
        </template>
        <p style="font-size: 20px;color:grey">{{ blog.content }}</p>
      </el-card>
    </div>
    <div class="box-card">
      <el-card>
        <template #header>
          <div class="card-header">
            <h3>
              <div class="comment">
                <span><el-icon><ChatRound /></el-icon></span>
                <span><el-button type="info" plain round>点赞 👍🏻</el-button><el-button type="info" plain round>评论 ✉️</el-button></span>
              </div>
            </h3>
          </div>
        </template>
        <p style="font-size: 20px;color:grey">{{ blog.comment }}</p>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
const blog = ref({});
  onMounted( async () => {
    blog.value= this.$route.params.blog;
  });
</script>

<style scoped>
.box-card {
  margin-top: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10px;
}
.card-header{
  margin-bottom: -10px;
}
.author {
  font-size: 20px;
  color: grey;
}
.info {
  margin-top: 10px;
  margin-bottom: 0px;
  display: flex;
}
.comment{
  margin-top: -10px;
  display: flex;
  display: flex;
  align-items: center; /* 设置垂直居中对齐 */
  justify-content: space-between; /* 将子元素分别排列在容器的最左边和最右边 */
}
.comment span{
  display: flex; /* 设置为 Flex 容器 */
  justify-content: center; /* 设置水平居中对齐 */
  align-items: center; /* 设置垂直居中对齐 */
  color: grey;
}
.info span {
  font-size: small;
  margin-right: 20px;
  color: grey;
}
.info span i {
  margin-right: 5px;
}
</style>
