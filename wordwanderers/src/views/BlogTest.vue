<template>
    <div>
      <div class="box">
        <div class="block">
        <el-timeline>
          <el-timeline-item v-for="blog in blogs" :key="blog.id" :timestamp="blog.created" placement="top">
            <el-card class="box-card">
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
  
  <script>
  import { ElTimeline, ElTimelineItem, ElCard } from 'element-plus';
  
  export default {
    components: {
      ElTimeline,
      ElTimelineItem,
      ElCard
    },
    data() {
      return {
        blogs: [
          {
            id: 1,
            title: 'Element-UI实现按钮',
            description: '利用element-ui的el-button功能，指定button的type等信息从而实现快捷可靠的按钮设定',
            created: '2023-05-01',
            user: '王浩天'
          },
          {
            id: 2,
            title: '【算法与数据结构】5 常见的时间复杂度，你知道吗？',
            description: '欢迎来到爱书不爱输的程序猿的博客, 本博客致力于知识分享，与更多的人进行学习交流 本文收录于算法与数据结构体系专栏,本专栏对于0基础者极为友好,欢迎与我一起完成算法与数据结构的从0到1的跨越',
            created: '2023-04-25',
            user: '易锡源'
          },
          {
            id: 3,
            title: '探究二叉搜索树：从原理到实现',
            description: '一颗二叉查找树(BST)是一颗二叉树，其中每个节点都含有一个Comparable的键(以及相关联的值)且每个节点的键都大于其左子树中的任意节点的键而小于右子树的任意节点的键—红宝书中的定义这里说说自己的理解，二叉搜索树其实可以理解为二叉树的派生类，它在二叉树的基础上多了个有序；有序并不是线性结构的有序(前面和后面比大小)而是树状结构的有序(左根右或者右根左)，中序遍历的结果完全可以看成树状结构的线性有序',
            created: '2023-04-15',
            user: '程序猿'
          }
        ]
      };
    }
  };
  </script>

<style>
.box {
    margin-top: 20px;
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
margin-top: 10px;
margin-bottom: 20px;
}

</style>
  