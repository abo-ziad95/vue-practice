<template>
<div>
  <input type="text" v-model="userId">
  <button @click="loadUser">Load User</button>
  <nuxt-child></nuxt-child>
</div>
</template>

<script>
  export default {
    data() {
      return {
        userId: ''
      }
    },
    layout: 'users',
    methods: {
      loadUser(){
        this.$router.push('/users/' + this.userId)
      }
    }
  }
</script>

