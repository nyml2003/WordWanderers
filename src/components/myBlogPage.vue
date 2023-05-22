<template>
    <div v-loading="loading"
        element-loading-text="Loading..."
        :element-loading-spinner="svg"
        element-loading-svg-view-box="-10, -10, 50, 50" class="box">

      <div class="block">
      <el-timeline :reverse="reverse">

        <el-timeline-item timestamp="2023-5-20" placement="top" >
          <el-card class="box-card">
              <template #header>
              <div class="card-header">
                  <h3 style="margin-bottom: 6px;">测试 when 还没写读取用户数据时</h3>
                  <p><el-avatar :size="30" style="margin-right: 10px;"></el-avatar>输入用户ID，输出内容和Blog界面一样</p>
              </div>
              </template>
              <p style="font-size: 15px; color:grey" >12332131</p>
          </el-card>
        </el-timeline-item>

        <el-timeline-item v-for="(blog,id) in blogs" :key="id" :index="id" :timestamp="blog.created_time" placement="top" >
          <!--点击标题，则传回当前博文的blog参数 并要求执行selectBlog函数-->
          <el-card class="box-card"  @click="router.push({name:'BlogPresent',params: {blogId:blog.id}})">
              <template #header>
              <div class="card-header">
                  <h3 style="margin-bottom: 6px;">{{ blog.title }}</h3>
                  <p><el-avatar :size="30" style="margin-right: 10px;" :src="blog.avatar"></el-avatar>{{ blog.user_name }}</p>
              </div>
              </template>
              <p style="font-size: 15px; color:grey" >{{ blog.description }}</p>
          </el-card>
        </el-timeline-item>

      </el-timeline>
      </div>

    </div>
</template>


<script setup>
import { ElTimeline, ElTimelineItem, ElCard, ElMessage } from 'element-plus';
import { ref, onMounted } from 'vue';
import DataService from '@/components/services/DataService';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
const router = useRouter();
const title=ref(useRoute().query.content)
const blogs = ref([]);
const reverse=ref(true)
const loading = ref(true)
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
onMounted(async () => {
  try {
    loading.value = true;
    console.log(title);
    let response;
    if (title.value===""){
      response = await DataService.Select_All_Blogs();
    }else{
      response = await DataService.Select_Conditional_Blogs(title.value);
    }
    console.log(response);
    loading.value = false;
    blogs.value = response.data;
  } catch (error) {      
    loading.value = false;
    ElMessage.error('Failed to fetch data. Please try again.');
    console.error(error);
  }
});
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
color: rgb(52, 98, 246);
}

</style>
  