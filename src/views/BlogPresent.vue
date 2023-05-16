<template>
  <div class="page">
    <div class="box-card">
      <el-card>
        <template #header>
          <div class="card-header">
            <div class="card-header1">
              <div>
                <h2>{{ blog.title }}{{ blog.id}}</h2>
                <p class="author" style="margin-top: 10px;">
                <el-avatar :size="30">{{ blog.user_name }}</el-avatar>
                {{ blog.user_name }}{{ blog.id }}
                </p>
              </div>
              <div class="info">
                <span><el-icon><CaretTop /></el-icon> {{ blog.like }}</span>
                <span><el-icon><ChatRound /></el-icon> {{ blog.comment }}</span>
              </div>
            </div>
          </div>
        </template>
        <v-md-editor :model-value="blog.content" mode="preview"></v-md-editor>
      </el-card>
    </div> 
    <div class="box-card">
      <el-card>
        <template #header>
          <div class="card-header">
            <h3>
              <div class="comment">
                <span><el-icon><ChatRound /></el-icon></span>
                <span>
                  <el-button v-if="isActive"  text round @click="toggleActive" style="background-color: rgb(90,156,248);color:white;width:55px">
                    <el-icon style="font-size:20px;color: white;"><CaretTop /></el-icon>
                    {{ blog.like }}
                  </el-button>
                  <el-button v-else text round @click="toggleActive" style="border: 1.5px solid rgb(203, 201, 201);color: rgb(165, 162, 162);width:55px">
                    <el-icon style="font-size:20px;color: rgb(165, 162, 162);"><CaretTop /></el-icon>
                    {{ blog.like }}
                  </el-button>
                  <el-button text round style="border: 1.5px solid rgb(203, 201, 201);color: rgb(165, 162, 162);width:55px" @click="dialogVisible = true">
                    评论 </el-button>
                </span>
              </div>
            </h3>
          </div>
        </template>
          <div v-for="(comment,id) in blog.comments" :key="id">{{ comment }}</div>
      </el-card>
    </div>
  </div>

  <el-dialog
    v-model="dialogVisible"
    title="评论"
    width="60%">
    <span>快来留下你想说的话！</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import DataService from '@/components/services/DataService'
import { onMounted } from 'vue';
const route=useRoute()
const blogId = ref(route.params.blogId);
const blog=ref({})
const isActive = ref(false);
const dialogVisible = ref(false)
onMounted( async () => {
    const response = await DataService.SelectBlog(blogId.value);
    blog.value=response.data;
  });


const toggleActive = () => {
  if (isActive.value === true) {
    isActive.value = false;
    blog.value.like -= 1;
  }
  else {
    isActive.value = true;
    blog.value.like += 1;
  }
};

blog.value.like = 100;


</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column; /* 设置为竖排 */
  justify-content:center;/* 在垂直方向上居中对齐 */
  align-items: center; /* 在水平方向上居中对齐 */
}

.box-card {
  max-width: 900px;
  width:90%;
  margin-top: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10px;
}
.card-header{
  margin-bottom: -10px;
}
.card-header1{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
