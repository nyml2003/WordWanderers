<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <testA></testA>
</template>

<script>
// @ is an alias to /src
import testA from "@/components/testA.vue"
export default {
  name: 'HomeView',
  components: {
    testA,
  }
}
</script>