import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";
import Safe from '../views/safe/index.vue';
import changePassword from '../views/safe/changePassword.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home,
    children:[{
    	path:'/user',
    	name:'User',
    	component:()=>import('../views/user/index')
    }, {
      path: "/safe",
      name: "Safe",
      component: Safe,
    },
    {
      path: "/changePassword",
      name: "ChangePassword",
      component: changePassword,
    },]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
