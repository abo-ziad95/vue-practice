<template>
<h1>a single user id {{ $route.params.id }}</h1>
</template>

<script>
  export default {
    validate(data){
      return /^\d+$/.test(data.params.id)
    }
  }
</script>

<style scoped>

</style>
