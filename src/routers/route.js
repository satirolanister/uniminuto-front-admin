
import Tableinfo from '../components/page/tabla.vue';
import login from '../components/page/admin.vue';


const routes = [
    {
      path:'/',
      name:'login',
      component: login
    },
    { path: '/tabla',
      name: 'tabla', 
      component: Tableinfo
    }
  ];

export default routes;
  
  
 