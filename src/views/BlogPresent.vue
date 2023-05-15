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
                <span>
                  <el-button v-if="isActive"  text round @click="toggleActive" style="background-color: rgb(90,156,248);color:white;width:55px">
                    <el-icon style="font-size:20px;color: white;"><CaretTop /></el-icon>
                    {{ blog.likes }}
                  </el-button>
                  <el-button v-else text round @click="toggleActive" style="border: 1.5px solid rgb(203, 201, 201);color: rgb(165, 162, 162);width:55px">
                    <el-icon style="font-size:20px;color: rgb(165, 162, 162);"><CaretTop /></el-icon>
                    {{ blog.likes }}
                  </el-button>
                  <el-button text round style="border: 1.5px solid rgb(203, 201, 201);color: rgb(165, 162, 162);width:55px" @click="dialogVisible = true">
                    评论 </el-button>
                </span>
              </div>
            </h3>
          </div>
        </template>
        <p style="font-size: 20px;color:grey">{{ blog.comment }}</p>
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
import { onMounted,ref } from 'vue';
const blog = ref({});
const isActive = ref(false);
const dialogVisible = ref(false)

onMounted( async () => {
  blog.value= this.$route.params.blog;
});
const toggleActive = () => {
  if (isActive.value === true) {
    isActive.value = false;
    blog.value.likes -= 1;
  }
  else {
    isActive.value = true;
    blog.value.likes += 1;
  }
};

blog.value.likes = 100;

</script>

<style scoped>
.normal {
  background-color: #f0f0f0;
  font-size:5px;
}
.active {
  background-color: dodgerblue; /* 选中时的背景颜色 */
  color: white; /* 选中时的文字颜色 */
}

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
