<template>
	<div class="user-index">
		<div class="user-content">
      <img src="../../assets/images/face.png" class="user-logo">
      <div class="user-accounts">
        <h4 class="name">409019683@qq.com</h4>
        <span>文明驾驶分<strong>0</strong></span>
      </div>
    </div>
    <div class="user-meta">
      <ul class="meta-ul">
        <router-link to="aa" tag="a" class="arrow"><i class="icon icon-with-26 icon-user-money"></i>我的帐户</router-link>
        <router-link to="aa" tag="a" class="arrow"><i class="icon icon-with-26 icon-user-wheel"></i>租车订单</router-link>
        <router-link to="/certification" tag="a" class="arrow"><i class="icon icon-with-26 icon-user-adviser"></i>实名认证</router-link>
        <router-link to="/safe" tag="a" class="arrow"><i class="icon icon-with-26 icon-user-security"></i>安全设置</router-link>
        <router-link to="aa" tag="a" class="arrow"><i class="icon icon-with-26 icon-user-help"></i>帮助中心</router-link>
      </ul>
    </div>
    <div class="sign-out">退出</div>
	</div>
</template>





<script>
	export default {
    name:'User',
//  components:{},
    data(){
        return{
          }
       },
       mounted(){
	    	
	    }
  }
</script>

<style lang="scss">
	@import './index.scss';
</style>