import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";
import Safe from '../views/safe/index.vue';
import changePassword from '../views/safe/changePassword.vue';
import fundPassword from '../views/safe/fundPassword.vue';
import phoneNumber from '../views/safe/phoneNumber.vue';
import bindingCard from '../views/safe/bankCard/index.vue';
import bankCard from '../views/safe/bankCard/bankCard.vue';
import certification from '../views/certification/index.vue';
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
    },{
      path: "/fundPassword",
      name: "FundPassword",
      component: fundPassword,
    },{
      path: "/phoneNumber",
      name: "PhoneNumber",
      component: phoneNumber,
    },{
      path: "/bindingCard",
      name: "BindingCard",
      component: bindingCard,
    },{
      path: "/bankCard",
      name: "BankCard",
      component: bankCard,
    },{
      path: "/certification",
      name: "Certification",
      component: certification,
    },]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
