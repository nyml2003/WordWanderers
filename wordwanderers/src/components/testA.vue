<template>
<div class="counter">
{{ cnt }}
<el-button type="primary" @click="add">+</el-button>
{{ cnt }}
</div>
</template>

<script setup>
import { ref } from "vue";
const cnt = ref(0);
const add = () => {
    cnt.value+=1;
}
</script>

<style scoped>
.counter{
    margin-left: 30px;
}
</style>