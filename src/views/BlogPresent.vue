<template>
  <div class="page">
    <div class="box-card">
      <el-card v-loading='loading'
          element-loading-text="Loading..."
          :element-loading-spinner="svg"
          element-loading-svg-view-box="-10, -10, 50, 50">
        <template #header>
          <div class="card-header">
            <div class="card-header1">
              <div>
                <h2>{{ blog.title }}</h2>
                <p class="author" style="margin-top: 10px;">
                <el-avatar :size="30" :src="blog.avatar"></el-avatar>
                {{ blog.user_name }}
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
      <el-card v-loading='loading'
          element-loading-text="Loading..."
          :element-loading-spinner="svg"
          element-loading-svg-view-box="-10, -10, 50, 50">
        <template #header>
          <div class="card-header">
            <h3>
              <div class="comment">
                <span><el-icon><ChatRound /></el-icon></span>
                <span>
                  <el-button  v-if="isActive"  text round @click="toggleActive" style="background-color: rgb(90,156,248);color:white;width:55px">
                    <el-icon style="font-size:20px;color: white;"><CaretTop /></el-icon>
                    {{ blog.like }}     
                  </el-button>
                  <el-button  v-else text round @click="toggleActive" style="border: 1.5px solid rgb(203, 201, 201);color: rgb(165, 162, 162);width:55px">
                    <el-icon style="font-size:20px;color: rgb(165, 162, 162);"><CaretTop /></el-icon>
                    {{ blog.like }}
                  </el-button>
                  <el-button  text round style="border: 1.5px solid rgb(203, 201, 201);color: rgb(165, 162, 162);width:55px" @click="handleCommentClick">
                    评论 </el-button>
                </span>
              </div>
            </h3>
          </div>
        </template>
        <div class="infinite-list-wrapper" style="overflow: auto">
          <ul
            class="list" 
            :infinite-scroll-disabled="disabled"
          >
          <div v-for="(comment,id) in blog.comments" :key="id">
            <blogComment :message="comment.content" :user_name="comment.user_name" :avatar="comment.avatar"></blogComment>
          </div>
          </ul>
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
import { ElMessage } from 'element-plus';
import { computed, ref,onMounted } from 'vue';
import { useRoute } from 'vue-router'
import DataService from '@/components/services/DataService'
import blogComment from '@/components/blogComment.vue'
import { useStore } from 'vuex';
const state=computed(()=>useStore().state)
const user_id=computed(()=>state.value.user.id)
const route=useRoute()
const blogId = ref(route.params.blogId)
const blog=ref({})
const isActive = ref(false)
const dialogVisible = ref(false)
const loading = ref(false)
const disabled = computed(() => loading.value )
const newComment = ref('')
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
console.log([user_id.value,state.value])
//评论功能
const submitComment = async() => {
  console.log(state)
  //把内容存储到后端，下面这句用于测试 逻辑写好后请删除
  console.log('已经提交评论:', newComment.value);
  const responce= await DataService.insertComment(user_id.value,blogId.value,newComment.value);
  console.log(responce.data)
  loadBlog()
  //请只改这上面
  //清空评论内容(防止下次点开时会有)
  newComment.value = '';
  //关闭对话框
  dialogVisible.value = false;
}
//点赞功能
const toggleActive = () => {
  if (user_id.value === null) {
    ElMessage({
          type: 'error',
          message: '您还没有登录，请先登录！',
        });
  }
  else {
    submitLikes()
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
  }
};
const submitLikes=async()=>{
  const responce= await DataService.Update_Likes(user_id.value,blogId.value,!isActive.value);
  console.log(responce.data)
}
const handleCommentClick = ()=> {
      if (user_id.value === null) {
        ElMessage({
          type: 'error',
          message: '您还没有登录，请先登录！',
        });
      } else {
        dialogVisible.value = true;
      }
}

const loadBlog = async () => {
    loading.value = true;
    const response = await DataService.SelectBlog(blogId.value);
    loading.value = false;
    blog.value=response.data;
}

onMounted(loadBlog );

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
