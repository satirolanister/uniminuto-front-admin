<template>
    <div class="row">        
        <div class="col-4">
            <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
              <ul class="list-group">
              <li class="list-group-item "><router-link :to="{name:'tabla'}">Datos</router-link></li>
              </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Menulate',
    methods:{
        
        closeNav() {
            document.getElementById("mySidenav").style.display = "none";
        }
    }
    
}
</script>
<style scoped>

.sidenav {
  display: none;
  height: 100%;
  width: 15%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #125;
  overflow-x: hidden;
  padding-top: 60px;
}


.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
}
</style>