<template>
  <div id="app">
    <Headernav/>
    <Menulate/>
    <div>
      <template v-if="!oculto">
        <login></login>
      </template>
      <template v-else>
        <router-view></router-view>
      </template>
    </div>
    <Footnav/>
  </div>
</template>

<script>
import Headernav from './components/layout/header';
import Footnav from './components/layout/footer.vue';
import Menulate from './components/layout/menu';
import login from './components/page/admin.vue';
import EventBus from './service/bus';


export default {
  name: 'App',
  components: {
    Headernav,
    Footnav,
    Menulate,
    login
  },
  created : function(){
    EventBus.$on('singin',(item)=>{
      this.oculto = item;
    })
  },
  data(){
    return{
      oculto:false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 800px;
}

</style>
