<template>
	<div class="user-index login">
    <userHeader :headerName="navName" />
    <router-link to="/userLogon" tag="a" class="register">注册</router-link>
    <div class="user-meta">
      <div class="user-form-ui">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.cellphone" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="密码"></el-input>
                </el-form-item>
               
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>  
            <router-link to="/forgetPassword" tag="a" class="fs-12 forget">忘记密码</router-link>
      </div>
    </div>
	</div>
</template>
<script>
	export default {
    name:'UserLogin',
//  components:{},
    data(){
        return{
            navName:'登录',
            form: {
                cellphone:'',
                password: '',
            }
          }
       },
       mounted(){
	    	
        },
        methods:{
            onSubmit() {
                console.log('submit!');
            }
        }
  }
</script>

<style lang="scss">
@import './index.scss';
  .user-index{
    padding: 0 30px;
}
</style>