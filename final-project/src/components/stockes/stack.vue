<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mt-4">
      <div class="card-header">
        <h3 class="card-title">
          {{stock.name}}
          <small>(price: {{stock.price}})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="quantity" v-model="quantity">
        </div>
        <div class="float-right">
          <button class="btn btn-success" @click="buyStock" :disabled="cantBuy || quantity <= 0 || !Number.isInteger(Number(quantity))">{{ cantBuy ? 'cant Buy' : 'buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['stock'],
    data(){
      return{
        quantity: 0
      }
    },
    computed:{
      cantBuy(){
        return this.quantity * this.stock.price > this.$store.getters.funds
      },

    },
    methods:{
      buyStock(){
        const order = {
          stockID: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStoke', order)
        this.quantity = 0
      }
    }
  }
</script>
