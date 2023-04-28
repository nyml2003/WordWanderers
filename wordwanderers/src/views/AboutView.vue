<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <el-button type="primary">Primary</el-button>
  <testA></testA>
</template>

<script>
// @ is an alias to /src
import testA from "@/components/testA.vue"

export default {
  name: 'HomeView',
  components: {
    testA
  }
}
</script>