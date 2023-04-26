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

</style>
