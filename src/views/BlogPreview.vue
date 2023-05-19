<template>
      <div class="box">
        <div class="block">
        <el-timeline>
          <el-timeline-item v-for="(blog,id) in blogs" :key="blog.id" :index="id" :timestamp="blog.created_time" placement="top" >
            <!--点击标题，则传回当前博文的blog参数 并要求执行selectBlog函数-->
            <el-card class="box-card"  @click="this.$router.push({name:'BlogPresent',params: {blogId:blog.id}})">
                <template #header>
                <div class="card-header">
                    <h3 style="margin-bottom: 6px;">{{ blog.title }}</h3>
                    <p><el-avatar :size="30" style="margin-right: 10px;">{{ blog.user_name.substring(0,2) }}</el-avatar>{{ blog.user_name }}</p>
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
  import { ElTimeline, ElTimelineItem, ElCard } from 'element-plus';
  import { ref,onMounted } from 'vue';
  import DataService from '@/components/services/DataService';
  const blogs=ref([]);
  onMounted( async () => {
    const response = await DataService.Select_All_Blogs();
    blogs.value=response.data;
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
}

</style>
  