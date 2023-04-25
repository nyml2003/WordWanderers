<template>
<div>
{{ cnt }}
</div>
<button @click="add">

</button>
</template>

<script setup>
import { ref } from "vue";
const cnt = ref(0);
const add = () => {
    cnt.value+=1;
}
</script>