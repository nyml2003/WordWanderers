<template>
    <el-row class="info">
        <el-avatar :size="50">{{ username.substring(0,2) }}</el-avatar>
        <p>{{ username }}</p>
    <div class="button-wrapper">
        <el-button type="primary" round @click="dialogVisible = true"><el-icon><Edit /></el-icon></el-button>
    </div>
    </el-row>
    <!--基本信息显示区-->
    <div class="info2">
        <el-row class="info3"><el-icon size="25" style="margin-right: 15px;"><PriceTag /></el-icon>{{ id }}</el-row>
        <el-row class="info3"><el-icon size="25" style="margin-right: 15px;"><Message /></el-icon>{{ email }}</el-row>
        <el-row class="info3"><el-icon size="25" style="margin-right: 15px;"><Iphone /></el-icon>{{ phone }}</el-row>
        <el-row class="info3" style="border: none;"><el-icon size="25" style="margin-right: 15px;"><Timer /></el-icon>{{ time }}</el-row>
    </div>
    <!--数据信息显示区-->
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
    <!--修改信息对话框-->
    <el-dialog v-model="dialogVisible" title="修改信息" width="500px">
    <el-row class="row">
        <el-col :span="5"><p style="font-size: 16px;"><el-icon size="20"><PriceTag /></el-icon></p></el-col>
        <el-col :span="15"><el-input disabled v-model="id" size="small"></el-input></el-col>
    </el-row>
        <el-row class="row">
        <el-col :span="5"><p style="font-size: 16px;"><el-icon size="20"><User /></el-icon></p></el-col>
        <el-col :span="15"><el-input v-model="username" size="small"></el-input></el-col>
    </el-row>
    <el-row class="row">
        <el-col :span="5"><p style="font-size: 16px;"><el-icon size="20"><Message /></el-icon></p></el-col>
        <el-col :span="15"><el-input v-model="email" size="small"></el-input></el-col>
    </el-row>
    <el-row class="row">
        <el-col :span="5"><p style="font-size: 16px;"><el-icon size="20"><Iphone /></el-icon></p></el-col>
        <el-col :span="15"><el-input v-model="phone" size="small"></el-input></el-col>
    </el-row>
    <el-row class="row">
        <el-col :span="5"><p style="font-size: 16px;"><el-icon size="20"><Timer /></el-icon></p></el-col>
        <el-col :span="15"><el-input disabled v-model="time" size="small"></el-input></el-col>
    </el-row>
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
import { ElMessage } from 'element-plus';
const username = ref('测试用户');
const blognum = ref('101');
const dialogVisible = ref(false);
const email = ref('12315999@qq.com');
const id = ref(10010);
const phone = ref(18900033021);
const time = ref('2021-03-08');

const showBlogNum = () => {
    ElMessage('当前发表博客数：' + blognum.value);
};

const showLike = () => {
    ElMessage('当前收获点赞数：' + blognum.value);
};

const showComment = () => {
    ElMessage('当前收获评论数：' + blognum.value);
};

const showView = () => {
    ElMessage('当前浏览总数：' + blognum.value);
};

</script>

<style scoped>
.row {
    margin-bottom: 15px;
    font-size: 16px;
    margin-left: 80px;
}
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
    color:gray;
    margin-left: 70px;
    height: 60vh;
    font-size: 17px;
    font-weight: 340;
    display: flex; 
    align-items: begin;
    justify-items: center;
    flex-direction: column;
}
.info3 {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 2px solid #E6E6E6;
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
    border:none !important;
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
