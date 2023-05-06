<template>
    <div>
      <div class="box">
        <div class="block">
        <el-timeline>
          <el-timeline-item v-for="blog in blogs" :key="blog.id" :timestamp="blog.created" placement="top" >
            <!--点击标题，则传回当前博文的blog参数 并要求执行selectBlog函数-->
            <el-card class="box-card"  @click="$router.push({ name: 'BlogPresent', params: { blogId: blog.id } })">
                <template #header>
                <div class="card-header">
                    <h3>{{ blog.title }}</h3>
                    <p>作者：{{ blog.user }}</p>
                </div>
                </template>
                <p style="font-size: xx-small;color:grey" >{{ blog.description }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ElTimeline, ElTimelineItem, ElCard } from 'element-plus';
  import { ref } from 'vue';
  import axios from 'axios';
  const apiClient = axios.create({
    baseURL: "http://8.130.84.162:114/api",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const blogs=ref([]);
  const getAllData=async () => {
    const response  =await apiClient.get('/data');
    blogs.value=response.data.content;
  };
  getAllData();
</script>

<style scoped>
.box {

    margin-top: 20px;
    margin-left: 10%;
    margin-right: 10%;
}
.block{
    margin:10px,80px,10px,80px;
}
.el-card {
    min-width: 380px;
    margin-right: 20px;
    transition: all .5s;
    margin-top: 20px;
    margin-bottom: 10px;  
}

.el-card:hover{
margin-left: 20px;
}

</style>
  