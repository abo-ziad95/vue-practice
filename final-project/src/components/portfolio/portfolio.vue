<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>
<script>
  import Stock from './stock';
  import {mapGetters} from 'vuex';

  export default {
    components:{
      appStock: Stock
    },
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    }
  }
</script>
