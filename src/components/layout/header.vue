<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <template v-if="oculto==true">
        <div class="container-fluid">
          <span class="menu" v-on:click="openNav()">&#9776; Menu</span>
          <button @click="logout()" class="d-flex">
            <router-link :to="{name:'login'}">salir</router-link> 
          </button>
        </div>            
      </template>
      <template v-else>
          <a class="navbar-brand" href="#">
            <img src="src/assets/logo.png">
          </a>
      </template>
    </nav>
  </div>
</template>

<script>
import EventBus from '../../service/bus.js'


export default {

  name: 'Headernav',
  data() {
    return{
      oculto: false
    }
  },
  created: function(){
      EventBus.$on('singin', (item)=>{
      this.oculto = item
    })},
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.display = "block";
    },
    logout(){
      this.oculto = false;
    } 
  }
}
</script>
<style scoped>
.menu{
    left:0px;
    font-size:30px;
    cursor:pointer
}
</style>
