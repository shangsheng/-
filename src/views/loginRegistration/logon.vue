<template>
	<div class="user-index login">
    <userHeader :headerName="navName" />
    <router-link to="/userLogin" tag="a" class="register">登录</router-link>
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
                    <el-input v-model="form.confirmPassword" placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <verificationCode />
                    <el-input v-model="form.code" placeholder="验证码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">注册</el-button>
                </el-form-item>
            </el-form>  
      </div>
    </div>
	</div>
</template>
<script>
	export default {
    name:'UserLogon',
//  components:{},
    data(){
        return{
            navName:'注册',
            form: {
                cellphone:'',
                password: '',
                confirmPassword:'',
                code:'',
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