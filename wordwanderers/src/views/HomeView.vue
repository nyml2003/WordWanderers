<template>
  <posterBlock></posterBlock>
  <introPart></introPart>
</template>

<script>
// @ is an alias to /src
import posterBlock from "@/components/posterBlock.vue"
import introPart from "@/components/introPart.vue"
export default {
  name: 'HomeView',
  components: {
    posterBlock,
    introPart
  }
}
</script>
