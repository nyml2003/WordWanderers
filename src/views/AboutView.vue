<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <testA></testA>
  <el-row>
    <el-button size="large">Large</el-button>
    <el-button>Default</el-button>
    <el-button size="small">Small</el-button>
    <el-button size="large" :icon="Search">Search</el-button>
    <el-button :icon="Search">Search</el-button>
    <el-button size="small" :icon="Search">Search</el-button>
  </el-row>
  <el-row class="my-4">
    <el-button size="large" round>Large</el-button>
    <el-button round>Default</el-button>
    <el-button size="small" round>Small</el-button>
    <el-button size="large" :icon="Search" round>Search</el-button>
    <el-button :icon="Search" round>Search</el-button>
    <el-button size="small" :icon="Search" round>Search</el-button>
  </el-row>
  <el-row>
    <el-button :icon="Search" size="large" circle />
    <el-button :icon="Search" circle />
    <el-button :icon="Search" size="small" circle />
  </el-row>
</template>

<script>
// @ is an alias to /src
import testA from "@/components/testA.vue"
import { Search } from '@element-plus/icons-vue'
export default {
  name: 'HomeView',
  components: {
    testA,
    Search
  }
}
</script>