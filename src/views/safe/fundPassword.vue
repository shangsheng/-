<template>
	<div class="user-index">
    <userHeader :headerName="navName" />
    <div class="user-meta">
      <div class="user-form-ui">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.fundPassword" placeholder="设置六位数字的密码"></el-input>
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
    name:'FundPassword',
//  components:{},
    data(){
        return{
            navName:'设置资金密码',
            form: {
                fundPassword: '',
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