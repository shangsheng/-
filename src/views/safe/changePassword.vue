<template>
	<div class="user-index">
    <userHeader :headerName="navName" />
    <div class="user-meta">
      <div class="user-form-ui">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.originalPassword" placeholder="原始密码"></el-input>
                </el-form-item>
                 <el-form-item>
                    <el-input v-model="form.newPassword" placeholder="新密码"></el-input>
                </el-form-item>
                 <el-form-item>
                    <el-input v-model="form.confirmPassword" placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <verificationCode />
                    <el-input v-model="form.code" placeholder="请输入手机验证码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">确定</el-button>
                </el-form-item>
            </el-form>  
      </div>
    </div>
	</div>
</template>
<script>
	export default {
    name:'ChangePassword',
//  components:{},
    data(){
        return{
            navName:'修改登录密码',
            form: {
                originalPassword: '',
                newPassword: '',
                confirmPassword: '',
                code:''
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
  .user-index{
    padding: 0 30px;
}
</style>