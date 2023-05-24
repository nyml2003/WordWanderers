<template>
    <div class="comment_group">
        <div class="info">
            <el-avatar :size="30" :src="props.avatar">{{ props.user_name.substring(0,2) }}</el-avatar>
            <p style="margin-left: 10px;">{{ props.user_name }}</p>
        </div>
        <div class="comment_main">
            <p>{{ props.message }}</p>
        </div>
    </div>
    
</template>

<script setup>
import { defineProps } from 'vue';


const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

</script>

<style scoped>

.comment_group {
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #e3e3e3;
    margin-top: 5px;
    padding-bottom: 10px;
}
.info {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    font-weight: 600;
}
.comment_main {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-weight: light;
    margin-top: 8px;
    margin-left: 40px;
    text-align: start;
    font-size: 16px;
}
</style>