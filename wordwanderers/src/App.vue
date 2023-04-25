<template>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <topBar></topBar>
  <router-view/>
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

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 0px;
  a {
    margin-left: 20px;
    text-decoration: none;
    color: #555555;
    order: 1;
    padding-left: 20px;
    font-family: 'Courier New', Courier, monospace;
  }
}
.top-bar {
    background-color: white;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 20px;
    border-bottom: 1px solid #E6E6E6;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: black;
    user-select:none;
  }
  .spacer {
    order: 2;
    flex-grow: 1; /* 让 spacer 元素占据剩余宽度 */
  }
</style>
