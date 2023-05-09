<template>
    <el-menu>
            <el-submenu class="nav-l">
                <el-menu-item >
                    <el-icon><Edit /></el-icon>
                    <span>写博客</span>
                </el-menu-item>
                <el-menu-item>
                    <el-icon><UserFilled /></el-icon>
                    <span>个人信息</span>
                </el-menu-item>
                <el-menu-item>
                    <el-icon><View /></el-icon>
                    <span>我的主页</span>
                </el-menu-item>
            </el-submenu>
    </el-menu>
  </template>
  <script>
  export default {
    components: {  },
    name: "CommonAside",
    data() {
      return {
        //展开 还是折叠
        isCollapse: false,
        menu: [
          {index:"1",path: "/", name: "home", label: "首页", icon: "s-home"},
        ]
      };
    },
  }
  </script>

<style>
.func {
  height: 20px;
  padding: 0px;
  margin:0px;
  text-align:start;
}
.func .p{
  text-size-adjust: auto;
}
.el-menu {
    border: none !important;
}
.el-aside {
  border-right: 2px solid #E6E6E6;
  padding-top: 20px;
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 90%;
}

.nav-l .el-menu-item{
    background-color: white;
    color: gray;
    border-radius: 10px;
    padding-left: 27px !important;
    font-size: 16px;
}
.nav-l .el-menu-item:hover{
    border: none;
    color: black;
    background-color: #E6E6E6;
}
</style>
