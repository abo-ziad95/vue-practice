<template>
  <div>
    <Header/>
    <nuxt />
  </div>
</template>
<script>
  import Header from '~/components/Header.vue'
  export default {
    components: {
      Header
    },
  }
</script>
<style>
html{
  font-family: sans-serif;
  font-size: 19px;
  color: red;
}
</style>
