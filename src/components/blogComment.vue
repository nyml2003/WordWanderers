<template>
    <div class="comment_group">
        <div class="info">
            <el-avatar :size="30">{{username.substring(0,2)}}</el-avatar>
            <p style="margin-left: 10px;">{{ username }}</p>
        </div>
        <div class="comment_main">
            <p>{{ props.message }}</p>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const username = ref('user1');

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});

</script>

<style scoped>

.comment_group {
    display: flex;
    flex-direction: column;
    border-bottom: 1.5px solid gainsboro;
    margin-top: 5px;
    padding-bottom: 10px;
}
.info {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
}
.comment_main {
    margin-left: 40px;
    text-align: start;
    font-size: 16px;
}
</style>