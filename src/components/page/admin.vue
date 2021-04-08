<template>
    <div class="jumbotron mt-3 content-body">
        <form class="container">
            <div class="form-group">
                <label>Usuario</label>
                <input type="text" v-model="user" class="form-control" placeholder="Digite su usuario">
            </div>
            <div class="form-group">
                <label>contraseña</label>
                <input type="password" v-model="pass" class="form-control" placeholder="Digite su contraseña">
            </div>
            <div>
                <button @click.prevent="login()">
                    <router-link :to="{name:'tabla'}">Ingresar</router-link>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import EventBus from '../../service/bus.js';

export default {
        name: 'login',
        data() {
            return{
                user:'',
                pass:''
            }
        },
        methods:{

            login(){

                const a = 'alex';
                const b = 'lopez';
                
                   
                    if(a!=this.user && b!=this.pass){
                        EventBus.$emit('singin', false);
                        this.user= '';
                        this.pass= '';
                        alert('Error en las credenciales');
                    }
                    else{
                        EventBus.$emit('singin', true);
                        this.user = '';
                        this.pass = '';
                    }
            }
        }
    }
</script>

<style scoped>
.content-body{
  position: absolute;
  right: 36%;
}
</style>