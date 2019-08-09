<template>
  <div id="app">
    <Header></Header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/header'
export default {
  name: 'app',
  created(){
    this.$store.dispatch('initStokes')
  },
  components:{
    Header,
  }
}
</script>

<style>
.slide-enter-active{
  animation: slideAnim .2s ease-in forwards;
}
.slide-leave-active{
  animation: slideAnim-in .2s ease-in forwards;
}
@keyframes slideAnim {
   from{
     opacity: 0;
     transform: translateY(30px);
   }
   to{
     opacity: 1;
     transform: translateY(0px);
   }
 }
@keyframes slideAnim-in {
    from{
      opacity: 1;
      transform: translateY(0px);
    }
    to{
      opacity: 0;
      transform: translateY(30px);
    }
  }
</style>
