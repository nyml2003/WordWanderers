<template>
    <user-Login></user-Login>
</template>
  
<script>
  // @ is an alias to /src
  import userLogin from "@/components/userLogin.vue"
  export default {
    name: 'LoginView',
    components: {
      userLogin
    }
  }
</script>
