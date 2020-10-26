<template>
	<div class="user-index">
    <userHeader :headerName="navName" />
    <div class="user-meta">
      <ul class="meta-ul">
        <router-link to="/changePassword" tag="a" class="arrow">修改登录密码</router-link>
        <router-link to="aa" tag="a" class="arrow">设置资金密码</router-link>
        <router-link to="aa" tag="a" class="arrow">绑定手机号</router-link>
        <router-link to="aa" tag="a" class="arrow">绑定银行号</router-link>
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
    .sign-out{
        width: 164px;
        height: 60px;
        background-color: #2d3339;
        font-size: 18px;
        color: #ffffff;
        position: absolute;
        bottom: 62px;
        left: 50%;
        margin-left: -82px;
        cursor: pointer;
        text-align: center;
        line-height: 60px;
        border-radius: 30px;
    }
}
</style>