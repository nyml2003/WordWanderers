<template>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <topBar></topBar>
  <router-view/>
  <div class="foot">
    <img class="logo" src="@/assets/logo.png">
  </div>
</template>

<script>
import topBar from '@/components/topBar.vue';

export default {
  name: 'HomeView',
  components: {
    topBar
    
  }
}
</script>

<style lang="scss" scoped>
.foot {
  display: flex;
  border-top: 2px solid rgb(228, 226, 226);
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-items: center;
}
.logo {
  width: 140px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: auto;
}
</style>
