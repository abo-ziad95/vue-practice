<template>
  <header class="header">
    <ul class="ul">
      <li class="li">
        <nuxt-link to="/users">users</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">home</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
.header{
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: #ccc;
}
  .ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%
  }
</style>
