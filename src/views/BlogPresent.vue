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
                  <span><el-icon><ArrowUpBold /></el-icon>  {{ blog.like }}</span>
                  <span><el-icon><ChatRound /></el-icon>  {{ blog.comment }}</span>
                  <span style="border: none;"><el-icon><View /></el-icon>  {{ blog.view }}</span>
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
        <div class="infinite-list-wrapper" style="overflow: auto">
          <ul
            v-infinite-scroll="load"
            class="list" 
            :infinite-scroll-disabled="disabled"
          >

          <div v-for="(comment,id) in blog.comments" :key="id">
            <blogComment :message="comment"></blogComment>
          </div>
          </ul>
          <p v-if="loading">Loading...</p>
          <p v-if="noMore">No more</p>
        </div>
      </el-card>
    </div>
  </div>

  <el-dialog
    v-model="dialogVisible"
    title="评论"
    width="40%">
    <el-input v-model="newComment" type="textarea" 
    :autosize="{minRows:7,maxRows:10}"
    placeholder="快来给我留言吧！"></el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitComment">
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'
import DataService from '@/components/services/DataService'
import blogComment from '@/components/blogComment.vue'
import { onMounted } from 'vue';
const route=useRoute()
const blogId = ref(route.params.blogId)
const blog=ref({})
const isActive = ref(false)
const dialogVisible = ref(false)
const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const newComment = ref('')

//评论功能
const submitComment = () => {
  //把内容存储到后端，下面这句用于测试 逻辑写好后请删除
  console.log('已经提交评论:', newComment.value);


  //请只改这上面
  //清空评论内容(防止下次点开时会有)
  newComment.value = '';
  //关闭对话框
  dialogVisible.value = false;
}
//点赞功能
const toggleActive = () => {
  if (isActive.value === true) {
    //点赞数+1，请同步到后端
    isActive.value = false;
    blog.value.like -= 1;
  }
  else {
    //点赞数-1，请同步到后端
    isActive.value = true;
    blog.value.like += 1;
  }
};
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}

onMounted( async () => {
    const response = await DataService.SelectBlog(blogId.value);
    blog.value=response.data;
  });


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
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items:end;
  min-width:50px;
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
  margin-right: 10px;
  margin-bottom: 5px;
  color: grey;
  border-bottom: 2px solid gainsboro;
}

.info span i {
  margin-top: 5px;
}

.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  color: black;
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>
