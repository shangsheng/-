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
import account from '../views/account/index.vue';
import recharge from '../views/account/recharge.vue';
import membership from '../views/account/membership.vue';
import pointsDetails from '../views/account/pointsDetails.vue';
import userLogin from '../views/loginRegistration/index.vue';
import userLogon from '../views/loginRegistration/logon.vue';
import forgetPassword from '../views/loginRegistration/forgetPassword.vue';
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
    },{
      path: "/account",
      name: "Account",
      component: account,
    },{
      path: "/recharge",
      name: "Recharge",
      component: recharge,
    },{
      path: "/membership",
      name: "Membership",
      component: membership,
    },{
      path: "/pointsDetails",
      name: "PointsDetails",
      component: pointsDetails,
    },{
      path: "/userLogin",
      name: "UserLogin",
      component: userLogin,
    },{
      path: "/userLogon",
      name: "UserLogon",
      component: userLogon,
    },{
      path: "/forgetPassword",
      name: "ForgetPassword",
      component: forgetPassword,
    },]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
