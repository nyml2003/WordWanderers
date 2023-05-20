<template>
    <el-row v-loading='loading'
          :element-loading-spinner="svg"
          element-loading-svg-view-box="-10, -10, 50, 50"
         class="info">
        <el-avatar :size="50" :src="avatar"></el-avatar>
        <p>{{ username }}</p>
    <div class="button-wrapper">
        <el-button type="primary" round @click="updateInfoDialog"><el-icon><Edit /></el-icon></el-button>
        <el-button type="primary" round @click="isExit = true"><el-icon><Close /></el-icon></el-button>
    </div>
    </el-row>
    <!--基本信息显示区-->
    <div v-loading='loading'
          element-loading-text="Loading..."
          :element-loading-spinner="svg"
          element-loading-svg-view-box="-10, -10, 50, 50"
           class="info2">
        <el-row class="info3"><el-icon size="25" style="margin-right: 15px;"><PriceTag /></el-icon>{{ id }}</el-row>
        <el-row class="info3"><el-icon size="25" style="margin-right: 15px;"><Message /></el-icon>{{ email }}</el-row>
        <el-row class="info3"><el-icon size="25" style="margin-right: 15px;"><Iphone /></el-icon>{{ phone }}</el-row>
        <el-row class="info3" style="border: none;"><el-icon size="25" style="margin-right: 15px;"><Timer /></el-icon>{{ time }}</el-row>
    </div>
    <!--数据信息显示区-->
    <el-row v-loading='loading'
          :element-loading-spinner="svg"
          element-loading-svg-view-box="-10, -10, 50, 50"
           class="detail">
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
                <span class="line2">{{ like }}</span>
            </div>
        </div>
        <div class="show_detail" @click="showComment">
            <div class="icon"><el-icon size="40"><Message /></el-icon></div>
            <div class="text">
                <span class="line1">收获评论</span>
                <span class="line2">{{ comments_number }}</span>
            </div>
        </div>
        <div class="show_detail" style="border-right: none;" @click="showView">
            <div class="icon"><el-icon size="40"><View /></el-icon></div>
            <div class="text">
                <span class="line1">总浏览量</span>
                <span class="line2">{{ views_number }}</span>
            </div>
        </div>
    </el-row>
    <!--修改信息对话框-->
    <el-dialog v-model="dialogVisible" title="修改信息" width="500px">
    <el-row class="row">
        <el-col :span="5"><p style="font-size: 16px;"><el-icon size="20"><Camera/> </el-icon></p></el-col>
        <el-col :span="15"><el-input v-model="avatar" size="small"></el-input></el-col>
    </el-row>
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
        <el-button type="primary" @click="updateInfo">
          提交
        </el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 退出登录 -->
  <el-dialog v-model="isExit" title="您是否要退出登录？" width="500px">
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isExit = false">取消</el-button>
        <el-button type="primary" @click="logout">
          退出
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { onMounted, ref,computed } from 'vue'
import { ElMessage } from 'element-plus'
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'
import DataService from './services/DataService'
const store=useStore()
const state=computed(()=>useStore().state)
const username = ref(state.value.user.user_name)
const avatar=ref(state.value.user.avatar)
const dialogVisible = ref(false)
const router = useRouter();
const isExit = ref(false)
const logout=()=>{
    isExit.value = false
    console.log(state)
    state.value.isLogin=false
    state.value.user.avatar=null
    state.value.user.user_name=null
    state.value.user.id=null
    ElMessage.success('退出成功！')
    router.push({path:'/'})
}
let initData={}
const updateInfoDialog = () => {
    dialogVisible.value = true
    initData={
        id:id.value,
        avatar:avatar.value,
        email:email.value,
        phone_number:phone.value,
        created_time:time.value,
        username:username.value,
    }
    console.log(initData)
};
const updateInfo= async()=>{
    console.log(initData)
    if(email.value!=initData.email){
      const responce= await DataService.UpdateEmail(id.value,email.value)
      console.log(responce.data)
    }
    if (phone.value != initData.phone_number) {
        const responce = await DataService.UpdatePhone(id.value, phone.value)
        console.log(responce.data)
    }
    if (username.value != initData.username) {
        const responce = await DataService.UpdateName(id.value, username.value)
        store.commit('setUser_name',username.value)
        console.log(responce.data)
    }
    if (avatar.value != initData.avatar) {
        const responce = await DataService.UpdateAvatar(id.value, avatar.value)
        store.commit('setAvatar',avatar.value)
        console.log(responce.data)
    }
    dialogVisible.value = false
    ElMessage.success('修改成功！')
}
const email = ref('')
const id = ref(state.value.user.id)
const phone = ref()
const time = ref('')
const like = ref(0)
const blognum = ref(0)
const comments_number=ref(0)
const views_number = ref(0)
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
const getPersonalInfo = async () => {
    if (id.value === null) {
        ElMessage.error('您还没有登录，请先登录！');
        return;
    }
    else {
    loading.value = true
    const responce = await DataService.select_profile(id.value)
    blognum.value=responce.data.blogs_number
    email.value=responce.data.email
    phone.value=responce.data.phone_number
    time.value=responce.data.created_time
    like.value=responce.data.likes_number
    comments_number.value=responce.data.comments_number
    views_number.value = responce.data.views_number
    loading.value = false
    }
};
// const formatDatetime = (key) => {
//     var json_date = new Date(key).toJSON();
//     return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
// }
onMounted(getPersonalInfo)
const showBlogNum = () => {
    ElMessage('当前发表博客数：' + blognum.value);
};

const showLike = () => {
    ElMessage('当前收获点赞数：' + like.value);
};

const showComment = () => {
    ElMessage('当前收获评论数：' + comments_number.value);
};

const showView = () => {
    ElMessage('当前浏览总数：' + views_number.value);
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
    font-size: 25px;
    font-weight: 190;
}

.detail p{
    margin-left: 68px;
    margin-bottom: 20px;
    font-weight: 190;
}

</style>