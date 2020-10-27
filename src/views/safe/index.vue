<template>
	<div class="user-index">
    <userHeader :headerName="navName" />
    <div class="user-meta">
      <ul class="meta-ul">
        <router-link to="/changePassword" tag="a" class="arrow">修改登录密码</router-link>
        <router-link to="/fundPassword" tag="a" class="arrow">设置资金密码</router-link>
        <router-link to="/phoneNumber" tag="a" class="arrow">绑定手机号</router-link>
        <router-link to="/bindingCard" tag="a" class="arrow">绑定银行卡</router-link>
      </ul>
    </div>
	</div>
</template>
<script>
	export default {
    name:'User',
//  components:{},
    data(){
        return{
            navName:'安全中心'
          }
       },
       mounted(){
	    	
	    }
  }
</script>

<style lang="scss">
  .user-index{
    padding: 0 30px;
}
</style>