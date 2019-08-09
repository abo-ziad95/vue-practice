<template>
  <div class="col-sm-6 col-md-4">
    <div class="card mt-4">
      <div class="card-header">
        <h3 class="card-title">
          {{stock.name}}
          <small>(price: {{stock.price}} | quantity: {{stock.quantity}})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="quantity" v-model="quantity">
        </div>
        <div class="float-right">
          <button class="btn btn-success" @click="sellStock" :disabled="cantSell || quantity <= 0 || !Number.isInteger(Number(quantity))">{{ cantSell ? 'cant sell' : 'sell' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex';

  export default {
    props: ['stock'],
    data(){
      return{
        quantity: 0
      }
    },
    computed: {
      cantSell(){
        return this.quantity > this.stock.quantity
      }
    },
    methods:{
      ...mapActions([
        'sellStocks'
      ]),
      sellStock(){
        const order = {
          stockID: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.sellStocks(order);
        this.quantity = 0
      }
    }
  }
</script>
