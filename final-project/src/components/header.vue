<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/" exact tag="li" class="nav-item" activeClass="active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </router-link>
        <router-link to="/stokes" tag="li" class="nav-item" activeClass="active">
          <a class="nav-link" href="#">stokes</a>
        </router-link>
        <router-link to="/portfolio" tag="li" class="nav-item" activeClass="active">
          <a class="nav-link" href="#">portfolio</a>
        </router-link>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="savaData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadDataFn">load data</a>
          </div>
        </li>
      </ul>
      <button class="btn-dark mr-4" @click="endDay">End Day</button>
      <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
    </div>
  </nav>
</template>
<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      funds(){
        return this.$store.getters.funds
      },
    },
    methods:{
      ...mapActions([
        'randomeStokes',
        'loadData'
      ]),
      endDay(){
        this.randomeStokes()
      },
      savaData () {
        const data = {'stockPortfolio': this.stockPortfolio, 'stokes': this.stokes, 'funds': this.funds};
        this.$http.put('data.json', data)
      },
      loadDataFn(){
        this.loadData()
      }
    },
    computed:{
      ...mapGetters([
        'stockPortfolio',
        'stokes',
        'funds'
      ]),
    }
  }
</script>
