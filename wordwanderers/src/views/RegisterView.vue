<template>
    <userRegister></userRegister>
</template>
  
<script>
  // @ is an alias to /src
  import userRegister from "@/components/userRegister.vue"
  export default {
    name: 'RegisterView',
    components: {
      userRegister
    }
  }
</script>
  