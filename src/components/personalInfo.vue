<template>
    <el-row class="info">
        <el-avatar :size="50">{{ username.substring(0,2) }}</el-avatar>
        <p>{{ username }}</p>
    <div class="button-wrapper">
        <el-button type="primary" round @click="dialogVisible = true"><el-icon><Edit /></el-icon></el-button>
    </div>
    </el-row>
    <el-row class="info2">
    </el-row>
    <el-row class="detail">
        <div class="show_detail" @click="showBlogNum">
            <div class="icon"><el-icon size="40"><ChatRound /></el-icon></div>
            <div class="text">
                <span class="line1">发表博客</span>
                <span class="line2">{{ blognum }}</span>
            </div>
        </div>
        <div class="show_detail" @click="showLike">
            <div class="icon"><el-icon size="40"><Pointer /></el-icon></div>
            <div class="text">
                <span class="line1">收获点赞</span>
                <span class="line2">{{ blognum }}</span>
            </div>
        </div>
        <div class="show_detail" @click="showComment">
            <div class="icon"><el-icon size="40"><Message /></el-icon></div>
            <div class="text">
                <span class="line1">收获评论</span>
                <span class="line2">{{ blognum }}</span>
            </div>
        </div>
        <div class="show_detail" style="border-right: none;" @click="showView">
            <div class="icon"><el-icon size="40"><View /></el-icon></div>
            <div class="text">
                <span class="line1">总浏览量</span>
                <span class="line2">{{ blognum }}</span>
            </div>
        </div>
    </el-row>

    <el-dialog v-model="dialogVisible" title="修改信息" width="50%">
    <span>修改信息</span>
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

<script>
import { ElMessage } from 'element-plus';
export default {
    data() {
    return {
        username: '测试用户',
        blognum: '101',
        dialogVisible:false,
    };
    },
    methods: {
        showBlogNum() {
            ElMessage('当前发表博客数：'+this.blognum)
        },
        showLike() {
            ElMessage('当前收获点赞数：'+this.blognum)
        },
        showComment() {
            ElMessage('当前收获评论数：'+this.blognum)
        },
        showView() {
            ElMessage('当前浏览总数：'+this.blognum)
        }
    },
};
</script>

<style scoped>
.detail {
    background-image: linear-gradient(to right, #5d9cec, #8eb5f3);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon {
    margin-right: 10px;
}
.button-wrapper {
  margin-left: auto;
}

.info2 {
    height: 60vh;
}
.show_detail {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    padding-right: 50px;
    padding-left: 50px;
    border-right: 2px solid white;
}
.icon {
    color: white;
}
.text {
    color: white;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 220;
    font-size: 16px;
}
.info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 3px solid #E6E6E6;
    padding-bottom: 10px;
    justify-content: space-between;
}
.info p {
    margin-left: 20px;
    font-size: 17px;
    font-weight: 190;
}

.detail p{
    margin-left: 68px;
    margin-bottom: 20px;
    font-weight: 190;
}

</style>
