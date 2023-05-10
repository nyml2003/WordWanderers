<template>
    <el-row class="info">
        <el-avatar :size="50">{{ username.substring(0,3) }}</el-avatar>
        <p>{{ username }}</p>
    </el-row>
    <e-row class="detail">
        <p>发表博客数: {{ blognum }}</p>
    </e-row>
</template>

<script>
export default {
    data() {
    return {
        username: '测试用户',
        blognum: '101',
    };
    },
    methods: {
        
    },
};
</script>

<style scoped>
.info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 3px solid #E6E6E6;
    padding-bottom: 10px;
}
.info p {
    margin-left: 20px;
    font-size: 17px;
    font-weight: 190;
}
.detail {
    font-size: 17px;
}
.detail p{
    margin-left: 68px;
    font-weight: 190;
}

</style>
