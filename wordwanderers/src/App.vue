<template>
  <nav class="top-bar">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link> 
    <div class="spacer"></div>
  </nav>
  <router-view/>
</template>


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
