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
.el-menu {
    border: none !important;
}
.el-aside {
  background-color: rgb(32,33,35);
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}
.nav-l {
    background-color: rgb(32,33,35);
}
.nav-l .el-menu-item{
    background-color: rgb(32,33,35);
    color: white;
}
.nav-l .el-menu-item:hover{
    background-color: rgb(1,158,213);
    color: white;
}
</style>
