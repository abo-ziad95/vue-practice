<template>
  <div class="row">
    <Stack v-for="stock in stocks" :stock="stock"></Stack>
  </div>
</template>
<script>
  import Stack from './stack.vue'
  export default {
    computed:{
      stocks(){
        return this.$store.getters.stokes
      }
    },
    components: {
      Stack
    }
  }
</script>
