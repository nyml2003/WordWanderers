<template>
    <div class="poster">
      <!-- 使用 div 元素创建一个矩形盒子 -->
        <div class="poster_words">
            <!-- 在盒子中放置一些文本 -->
            <p class="p_w_black">Write Words</p>
            <p class="p_w_blue">Be A Wanderer</p>
        </div>
        <div v-if="! useStore().state.isLogin" class="poster_box">
            <router-link to="/userLogin" class = 'white'>Login Now →</router-link>
        </div>
    </div>
    <div style="text-align: center;">
            <img class="p_img" src="@/assets/poster.png">
    </div>
</template>
<script setup>
import { useStore } from 'vuex'
console.log(useStore().state)
</script>
<style>
    @import url(@/assets/css/poster.css);
</style>